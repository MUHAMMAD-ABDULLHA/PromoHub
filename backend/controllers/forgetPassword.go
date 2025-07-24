package controllers

import (
	"fmt"
	"math/rand"
	"net/http"
	"strings"
	"sync"
	"time"
	"vite-project/backend/config"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// 💾 In-memory store → email → code
var (
	verificationCodes = make(map[string]string)
	mu                sync.Mutex // mutex to protect concurrent map access
)

func generateVerificationCode() string {
	const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	rand.Seed(time.Now().UnixNano())
	code := make([]byte, 6)
	for i := range code {
		code[i] = charset[rand.Intn(len(charset))]
	}
	fmt.Println("[DEBUG] Generated code:", string(code))
	return string(code)
}

func ForgetPasswordHandler(c *gin.Context) {
	var req struct {
		Email string `json:"email"`
	}

	fmt.Println("[DEBUG] Received ForgetPassword request")

	if err := c.ShouldBindJSON(&req); err != nil || req.Email == "" {
		fmt.Println("[ERROR] Invalid request payload:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	fmt.Println("[DEBUG] Request email:", req.Email)

	code := generateVerificationCode()

	// Store the code in-memory for this email
	mu.Lock()
	verificationCodes[strings.ToLower(req.Email)] = code
	mu.Unlock()

	fmt.Println("[DEBUG] Stored code for email:", req.Email, "→ code:", code)

	// Send email
	if err := sendEmail(strings.ToLower(req.Email), code); err != nil {
		fmt.Println("[ERROR] Failed to send email:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to send email"})
		return
	}

	fmt.Println("[DEBUG] Email successfully sent for:", req.Email)

	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Verification code sent to your email",
	})
}

func VerifyCodeHandler(c *gin.Context) {
	var req struct {
		Email string `json:"email"`
		Code  string `json:"code"`
	}

	fmt.Println("[DEBUG] Received VerifyCode request")

	if err := c.ShouldBindJSON(&req); err != nil || req.Email == "" || req.Code == "" {
		fmt.Println("[ERROR] Invalid request payload for VerifyCode:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	email := strings.ToLower(req.Email)
	fmt.Println("[DEBUG] Verifying code for email:", email)

	mu.Lock()
	storedCode, exists := verificationCodes[email]
	mu.Unlock()

	if !exists {
		fmt.Println("[ERROR] No code found for email:", email)
		c.JSON(http.StatusNotFound, gin.H{"error": "No verification code found for this email"})
		return
	}

	fmt.Println("[DEBUG] Stored code:", storedCode, "| Provided code:", req.Code)

	if storedCode != req.Code {
		fmt.Println("[ERROR] Incorrect code for email:", email)
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect verification code"})
		return
	}

	// ✅ Verified → delete the code to prevent reuse
	mu.Lock()
	delete(verificationCodes, email)
	mu.Unlock()

	fmt.Println("[DEBUG] Code verified and deleted for email:", email)

	c.JSON(http.StatusOK, gin.H{"message": "✅ Code verified successfully"})
}
func ResetPasswordHandler(c *gin.Context) {
	var req struct {
		Email       string `json:"email"`
		NewPassword string `json:"newPassword"`
	}

	fmt.Println("[DEBUG] Received ResetPassword request")

	// Bind and validate request
	if err := c.ShouldBindJSON(&req); err != nil || req.Email == "" || req.NewPassword == "" {
		fmt.Println("[ERROR] Invalid request payload for ResetPassword:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	email := strings.ToLower(req.Email)
	fmt.Println("[DEBUG] Resetting password for email:", email)

	// Validate password length (consistent with registration)
	if len(req.NewPassword) < 8 {
		fmt.Println("[ERROR] Password too short for email:", email)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Password must be at least 8 characters long"})
		return
	}

	// Hash the new password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.NewPassword), bcrypt.DefaultCost)
	if err != nil {
		fmt.Println("[ERROR] Failed to hash password:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to process password"})
		return
	}

	// Update password in the database
	result, err := config.DB.Exec("UPDATE users SET password = $1 WHERE email = $2", string(hashedPassword), email)
	if err != nil {
		fmt.Println("[ERROR] Failed to update password:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to reset password"})
		return
	}

	// Check if any rows were affected
	rowsAffected, err := result.RowsAffected()
	if err != nil {
		fmt.Println("[ERROR] Failed to check rows affected:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to verify password update"})
		return
	}
	if rowsAffected == 0 {
		fmt.Println("[ERROR] No user found with email:", email)
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	fmt.Println("[DEBUG] Password updated for email:", email)
	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Password reset successfully",
	})
}
