package middlewares

import (
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

func AuthMiddleware(allowedRoles ...string) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Missing Authorization header"})
			c.Abort()
			return
		}

		jwtSecret := os.Getenv("JWT_SECRET")
		fmt.Println("JWT Secret is:", jwtSecret)

		tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			return []byte(jwtSecret), nil // ✅ FIXED
		})
		fmt.Println("Parsed token:", token)
		if err != nil || !token.Valid {
			fmt.Println("JWT parse error:", err)
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
			c.Abort()
			return
		}

		fmt.Println("Token claims:", claims)

		role, ok := claims["role"].(string)
		if !ok {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Role not found in token claims"})
			c.Abort()
			return
		}

		c.Set("user_id", claims["user_id"])
		c.Set("role", role)

		fmt.Println("User role:", role)

		for _, allowed := range allowedRoles {
			if allowed == role {
				c.Next()
				return
			}
		}

		c.JSON(http.StatusForbidden, gin.H{"error": "Access forbidden: role not allowed"})
		c.Abort()
	}
}
