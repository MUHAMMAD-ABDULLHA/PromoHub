package controllers

import (
	"fmt"
	"math/rand"
	"net/http"
	"strings"
	"sync"
	"time"

	"gopkg.in/gomail.v2"

	"github.com/gin-gonic/gin"
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

func sendEmail(to string, code string) error {
	fmt.Println("[DEBUG] Preparing to send email to:", to)
	m := gomail.NewMessage()
	m.SetHeader("From", "muhammadabdullah146k@gmail.com")
	m.SetHeader("To", to)
	m.SetHeader("Subject", "Your Password Reset Code")
	m.SetBody("text/plain", fmt.Sprintf("Your verification code is: %s", code))

	d := gomail.NewDialer("smtp.gmail.com", 587, "muhammadabdullah146k@gmail.com", "ynrk yqft wrkq pnva")
	fmt.Println("[DEBUG] Dialer config →")
	fmt.Println("  Host:", d.Host)
	fmt.Println("  Port:", d.Port)
	fmt.Println("  Username:", d.Username)
	fmt.Println("  Password:", d.Password)
	fmt.Println("  SSL:", d.SSL)

	err := d.DialAndSend(m)
	if err != nil {
		fmt.Println("[ERROR] sendEmail failed:", err)
	} else {
		fmt.Println("[DEBUG] Email sent successfully to:", to)
	}

	return err
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
