package controllers

import (
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
func UserRegisterHandler(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
	}
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
	query := `SELECT id, password, role FROM users WHERE email=$1`
	err := config.DB.QueryRow(query, credentials.Email).Scan(&user.ID, &user.Password, &user.Role)
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
		"exp":     time.Now().Add(time.Hour).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, _ := token.SignedString([]byte(os.Getenv("JWT_SECRET")))
	fmt.Println("JWT Token:", signedToken)

	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Login successful",
		"token":   signedToken,
		"role":    user.Role,
		"user_id": user.ID,
	})
	fmt.Println(user.Role)
}

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
