package controllers

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"time"

	"golang.org/x/crypto/bcrypt"

	"database/sql"
	"vite-project/backend/config"
	"vite-project/backend/models"
	"vite-project/backend/utils"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"google.golang.org/api/idtoken"
)

// Register a new user
// func RegisterHandler(w http.ResponseWriter, r *http.Request) {
// 	var user models.User

// 	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
// 		http.Error(w, "❌ Invalid request body", http.StatusBadRequest)
// 		return
// 	}

// 	// Hash password
// 	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
// 	if err != nil {
// 		http.Error(w, "❌ Failed to hash password", http.StatusInternalServerError)
// 		return
// 	}

// 	// Insert into DB
// 	query := `INSERT INTO users (email, password, full_name, username, phone, age, role)
// 			  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
// 	err = config.DB.QueryRow(query, user.Email, string(hashedPassword), user.FullName, user.Username, user.Phone, user.Age, user.Role).Scan(&user.ID)
// 	if err != nil {
// 		http.Error(w, "❌ Failed to register user", http.StatusBadRequest)
// 		return
// 	}

//		token, _ := utils.GenerateJWT(user.ID, user.Role)
//		json.NewEncoder(w).Encode(map[string]interface{}{
//			"message": "✅ User registered successfully",
//			"token":   token,
//		})
//	}
// func UserRegisterHandler(c *gin.Context) {
// 	var user models.User
// 	if err := c.ShouldBindJSON(&user); err != nil {
// 		fmt.Println("❌ JSON Binding Error:", err)
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
// 		return
// 	}
// 	fmt.Println("User data:", user)
// 	var existingUserID int
// 	err := config.DB.QueryRow("SELECT id FROM users WHERE email = $1", user.Email).Scan(&existingUserID)
// 	fmt.Println("Checking email:", user.Email)
// 	if err != sql.ErrNoRows {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "❌ Email already registered"})
// 		return
// 	}

// 	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
// 	}

// 	query := `INSERT INTO users (email, password, full_name, username, phone, age, role)
// 			  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
// 	err = config.DB.QueryRow(query, user.Email, string(hashedPassword), user.FullName, user.Username, user.Phone, user.Age, user.Role).Scan(&user.ID)
// 	if err != nil {
// 		fmt.Println("❌ SQL Error:", err)
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to register user"})
// 		return
// 	}

//		token, _ := utils.GenerateJWT(user.ID, user.Role)
//		c.JSON(http.StatusOK, gin.H{
//			"message": "✅ User registered successfully",
//			"token":   token,
//		})
//	}
func UserRegisterHandler(c *gin.Context) {
	var nested struct {
		User models.User `json:"user"`
	}

	if err := c.ShouldBindJSON(&nested); err != nil {
		fmt.Println("❌ JSON Binding Error:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	user := nested.User
	fmt.Println("✅ Parsed User:", user)

	// Duplicate email check
	var existingUserID int
	err := config.DB.QueryRow("SELECT id FROM users WHERE email = $1", user.Email).Scan(&existingUserID)
	if err != sql.ErrNoRows {
		c.JSON(http.StatusBadRequest, gin.H{"error": "❌ Email already registered"})
		return
	}

	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	// Insert user
	query := `INSERT INTO users (email, password, full_name, username, phone, age, role) 
			  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
	err = config.DB.QueryRow(query, user.Email, string(hashedPassword), user.FullName, user.Username, user.Phone, user.Age, user.Role).Scan(&user.ID)
	if err != nil {
		fmt.Println("❌ SQL Error:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to register user"})
		return
	}

	token, _ := utils.GenerateJWT(user.ID, user.Role)
	c.JSON(http.StatusOK, gin.H{
		"message": "✅ User registered successfully",
		"token":   token,
	})
}

// func BrandRegisterHandler(c *gin.Context) {
// 	var brand models.Brand
// 	if err := c.ShouldBindJSON(&brand); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
// 		return
// 	}
// 	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(brand.User.Password), bcrypt.DefaultCost)
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
// 	}
// 	var userID int
// 	query := `INSERT INTO users (email, password, full_name, username, phone, age, role)
// 			  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
// 	err = config.DB.QueryRow(query,
// 		brand.User.Email, string(hashedPassword), brand.User.FullName, brand.User.Username, brand.User.Phone, brand.User.Age, brand.User.Role).Scan(&userID)
// 	if err != nil {
// 		fmt.Println("❌ SQL Error:", err)
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to register user"})
// 		return
// 	}
// 	brandQuery := `INSERT INTO brands (user_id, brand_name, brand_website) VALUES ($1, $2, $3)`
// 	_, err = config.DB.Exec(brandQuery, userID, brand.BrandName, brand.BrandWebsite)
// 	if err != nil {
// 		fmt.Println("❌ SQL Error inserting brand:", err)
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to register brand details"})
// 		return
// 	}

// 	// ✅ Generate JWT
// 	token, _ := utils.GenerateJWT(userID, "brand")

// 	c.JSON(http.StatusOK, gin.H{
// 		"message": "✅ Brand registered successfully",
// 		"token":   token,
// 	})

// }
// func BrandRegisterHandler(c *gin.Context) {
// 	var brand models.Brand
// 	if err := c.ShouldBindJSON(&brand); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
// 		return
// 	}

// 	// ✅ Check if email already exists
// 	var exists bool
// 	checkQuery := `SELECT EXISTS(SELECT 1 FROM users WHERE email=$1)`
// 	err := config.DB.QueryRow(checkQuery, brand.User.Email).Scan(&exists)
// 	if err != nil {
// 		fmt.Println("❌ SQL Error checking email:", err)
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to check email"})
// 		return
// 	}
// 	// if exists {
// 	// 	c.JSON(http.StatusConflict, gin.H{"error": "Email already registered"})
// 	// 	return
// 	// }

// 	// ✅ Proceed to hash password
// 	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(brand.User.Password), bcrypt.DefaultCost)
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
// 		return
// 	}

// 	var userID int
// 	query := `INSERT INTO users (email, password, full_name, username, phone, age, role)
// 			  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
// 	err = config.DB.QueryRow(query, brand.User.Email, string(hashedPassword), brand.User.FullName, brand.User.Username, brand.User.Phone, brand.User.Age, brand.User.Role).Scan(&userID)
// 	if err != nil {
// 		fmt.Println("❌ SQL Error inserting user:", err)
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to register user"})
// 		return
// 	}

// 	brandQuery := `INSERT INTO brands (user_id, brand_name, brand_website) VALUES ($1, $2, $3)`
// 	_, err = config.DB.Exec(brandQuery, userID, brand.BrandName, brand.BrandWebsite)
// 	if err != nil {
// 		fmt.Println("❌ SQL Error inserting brand:", err)
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to register brand details"})
// 		return
// 	}

// 	token, _ := utils.GenerateJWT(userID, "brand")

//		c.JSON(http.StatusOK, gin.H{
//			"message": "✅ Brand registered successfully",
//			"token":   token,
//		})
//	}
func BrandRegisterHandler(c *gin.Context) {
	var brand models.Brand
	if err := c.ShouldBindJSON(&brand); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(brand.User.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	// Begin transaction
	tx, err := config.DB.Begin()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to start transaction"})
		return
	}
	defer tx.Rollback()

	// Insert into users
	var userID int
	userQuery := `INSERT INTO users (email, password, full_name, username, phone, age, role)
				  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
	err = tx.QueryRow(userQuery, brand.User.Email, string(hashedPassword), brand.User.FullName,
		brand.User.Username, brand.User.Phone, brand.User.Age, brand.User.Role).Scan(&userID)
	fmt.Println(userQuery, userQuery, brand.User.Email, string(hashedPassword), brand.User.FullName,
		brand.User.Username, brand.User.Phone, brand.User.Age, brand.User.Role)
	if err != nil {
		fmt.Println("❌ Error inserting user:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "User registration failed"})
		return
	}

	// Insert into brands
	brandQuery := `INSERT INTO brands (user_id, brand_name, brand_website)
				   VALUES ($1, $2, $3)`
	_, err = tx.Exec(brandQuery, userID, brand.BrandName, brand.BrandWebsite)
	fmt.Println(brandQuery, userID, brand.BrandName, brand.BrandWebsite)
	if err != nil {
		fmt.Println("❌ Error inserting brand:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Brand registration failed"})
		return
	}

	// Commit transaction
	if err = tx.Commit(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Transaction commit failed"})
		return
	}

	// Generate JWT
	token, _ := utils.GenerateJWT(userID, "brand")
	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Brand registered successfully",
		"token":   token,
	})
}

func InfluencerRegisterHandler(c *gin.Context) {
	var influencer models.Influencer
	if err := c.ShouldBindJSON(&influencer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(influencer.User.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
	}
	var userID int
	query := `INSERT INTO users (email, password, full_name, username, phone, age, role) 
			  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
	err = config.DB.QueryRow(query,
		influencer.User.Email, string(hashedPassword), influencer.User.FullName, influencer.User.Username, influencer.User.Phone, influencer.User.Age, influencer.User.Role).Scan(&userID)
	if err != nil {
		fmt.Println("❌ SQL Error:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to register user"})
		return
	}
	influencerQuery := `INSERT INTO influencers (user_id, social_media, social_media_link, followers) VALUES ($1, $2, $3, $4)`
	_, err = config.DB.Exec(influencerQuery, userID, influencer.SocialMedia, influencer.SocialMediaLink, influencer.Followers)
	if err != nil {
		fmt.Println("❌ SQL Error inserting influencer:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to register brand details"})
		return
	}

	// ✅ Generate JWT
	token, _ := utils.GenerateJWT(userID, "influencer")

	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Influencer registered successfully",
		"token":   token,
	})

}

func LoginHandler(c *gin.Context) {
	var credentials struct {
		Email    string `json:"email" binding:"required,email"`
		Password string `json:"password" binding:"required"`
	}

	if err := c.ShouldBindJSON(&credentials); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "❌ Invalid email or password format"})
		return
	}

	var user models.User
	query := `SELECT id, password, role, username FROM users WHERE email=$1`
	fmt.Println("Query:", query)
	fmt.Println(config.DB.QueryRow(query, credentials.Email).Scan(&user.ID, &user.Password, &user.Role))
	err := config.DB.QueryRow(query, credentials.Email).Scan(&user.ID, &user.Password, &user.Role, &user.Username)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "❌ Email not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "❌ Database error"})
		}
		return
	}

	// Check password
	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(credentials.Password))
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "❌ Incorrect password"})
		return
	}

	// Generate JWT
	claims := jwt.MapClaims{
		"user_id": user.ID,
		"role":    user.Role,
		"exp":     time.Now().Add(time.Hour * 5).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, _ := token.SignedString([]byte(os.Getenv("JWT_SECRET")))
	fmt.Println(os.Getenv("JWT_SECRET"))
	fmt.Println("JWT Token:", signedToken)

	c.JSON(http.StatusOK, gin.H{
		"message":  "✅ Login successful",
		"token":    signedToken,
		"role":     user.Role,
		"user_id":  user.ID,
		"username": user.Username,
	})
	fmt.Println(user.Role)
	fmt.Println(user.ID)
	fmt.Println(user.Username)
}
func verifyGoogleToken(idToken string) (string, error) {
	payload, err := idtoken.Validate(context.Background(), idToken, "268718797943-ka8u44ld2gaa75losn91l7vo81iccd2d.apps.googleusercontent.com")
	if err != nil {
		return "", err
	}
	fmt.Println("Payload:", payload)
	email := payload.Claims["email"].(string)
	fmt.Println("Email:", email)
	return email, nil
}

func GoogleLoginHandler(c *gin.Context) {
	var req struct {
		IDToken string `json:"id_token"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	email, err := verifyGoogleToken(req.IDToken)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid Google token: " + err.Error()})
		return
	}

	var user models.User
	query := `SELECT id, role FROM users WHERE email=$1`
	err = config.DB.QueryRow(query, email).Scan(&user.ID, &user.Role)
	if err != nil {
		if err == sql.ErrNoRows {
			// 👉 Optionally create user if doesn't exist
			// If you don't want auto-register:
			c.JSON(http.StatusUnauthorized, gin.H{"error": "❌ Email not found"})
			return

			// Otherwise, auto-insert user:
			/*
				insertQuery := `INSERT INTO users (email, role) VALUES ($1, 'user') RETURNING id, role`
				err = config.DB.QueryRow(insertQuery, email).Scan(&user.ID, &user.Role)
				if err != nil {
					c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
					return
				}
			*/
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "❌ Database error"})
			return
		}
	}

	// ✅ Generate JWT
	claims := jwt.MapClaims{
		"user_id": user.ID,
		"role":    user.Role,
		"exp":     time.Now().Add(time.Hour * 24).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, _ := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Google login successful",
		"token":   signedToken,
		"role":    user.Role,
		"user_id": user.ID,
		"email":   email,
	})
}

// func GetNotificationsHandler(c *gin.Context) {
// 	// Get role from query parameter
// 	role := c.Query("role")
// 	if role == "" {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "❌ Role parameter is required"})
// 		return
// 	}

// 	// Get user ID from JWT or session if you need user-specific notifications
// 	userID, exists := c.Get("userID")
// 	if !exists {
// 		c.JSON(http.StatusUnauthorized, gin.H{"error": "❌ User not authenticated"})
// 		return
// 	}

// 	// Get filter from query parameter (optional)
// 	filter := c.DefaultQuery("filter", "all")

// 	// Base query
// 	query := `SELECT
// 		id,
// 		type,
// 		title,
// 		message,
// 		is_read,
// 		created_at
// 	FROM notifications
// 	WHERE role = $1 AND user_id = $2`

// 	// Add filter condition if not "all"
// 	if filter != "all" {
// 		query += " AND type = $3"
// 	}

// 	// Execute query
// 	var rows *sql.Rows
// 	var err error

// 	if filter != "all" {
// 		rows, err = config.DB.Query(query, role, userID, filter)
// 	} else {
// 		rows, err = config.DB.Query(query, role, userID)
// 	}

// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "❌ Database error: " + err.Error()})
// 		return
// 	}
// 	defer rows.Close()

// 	var notifications []models.Notification
// 	var unreadCount int

// 	for rows.Next() {
// 		var notification models.Notification
// 		var createdAt time.Time

// 		err := rows.Scan(
// 			&notification.ID,
// 			&notification.Type,
// 			&notification.Title,
// 			&notification.Message,
// 			&notification.IsRead,
// 			&createdAt,
// 		)
// 		if err != nil {
// 			c.JSON(http.StatusInternalServerError, gin.H{"error": "❌ Error scanning notification: " + err.Error()})
// 			return
// 		}

// 		// Format timestamp for frontend
// 		notification.Timestamp = createdAt.Format("3:04 PM")

// 		// Count unread notifications
// 		if !notification.IsRead {
// 			unreadCount++
// 		}

// 		notifications = append(notifications, notification)
// 	}

// 	// Get total count for pagination (if needed)
// 	var totalCount int
// 	countQuery := `SELECT COUNT(*) FROM notifications WHERE role = $1 AND user_id = $2`
// 	err = config.DB.QueryRow(countQuery, role, userID).Scan(&totalCount)
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "❌ Error counting notifications: " + err.Error()})
// 		return
// 	}

//		c.JSON(http.StatusOK, gin.H{
//			"message":       "✅ Notifications retrieved successfully",
//			"notifications": notifications,
//			"unreadCount":   unreadCount,
//			"totalCount":    totalCount,
//		})
//	}
// Login a user
// func LoginHandler(w http.ResponseWriter, r *http.Request) {
// 	var credentials struct {
// 		Email    string `json:"email"`
// 		Password string `json:"password"`
// 	}
// 	if err := json.NewDecoder(r.Body).Decode(&credentials); err != nil {
// 		http.Error(w, "❌ Invalid request body", http.StatusBadRequest)
// 		return
// 	}

// 	var storedPassword string
// 	var userID int
// 	var role string

// 	err := config.DB.QueryRow("SELECT id, password, role FROM users WHERE email = $1", credentials.Email).Scan(&userID, &storedPassword, &role)
// 	if err != nil {
// 		http.Error(w, "❌ Invalid credentials", http.StatusUnauthorized)
// 		return
// 	}

// 	// Compare password
// 	if err := bcrypt.CompareHashAndPassword([]byte(storedPassword), []byte(credentials.Password)); err != nil {
// 		http.Error(w, "❌ Invalid credentials", http.StatusUnauthorized)
// 		return
// 	}

// 	token, _ := utils.GenerateJWT(userID, role)
// 	json.NewEncoder(w).Encode(map[string]interface{}{
// 		"message": "✅ Login successful",
// 		"token":   token,
// 		"user_id": userID,
// 		"role":    role,
// 	})
// }
