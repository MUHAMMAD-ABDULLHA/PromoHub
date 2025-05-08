package routes

import (
	"time"
	"vite-project/backend/controllers"
	"vite-project/backend/middlewares"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func AuthRoutes(c *gin.Engine) {
	c.POST("/register/user", controllers.UserRegisterHandler)
	c.POST("/register/brand", controllers.BrandRegisterHandler)
	c.POST("/register/influencer", controllers.InfluencerRegisterHandler)
	c.POST("/login", controllers.LoginHandler)
	c.POST("/google-login", controllers.GoogleLoginHandler)
	c.POST("/forget-password", controllers.ForgetPasswordHandler)
	c.POST("/verify-code", controllers.VerifyCodeHandler)

	brandGroup := c.Group("/brand")
	brandGroup.Use(
		cors.New(cors.Config{
			AllowOrigins:     []string{"http://localhost:5173"},
			AllowMethods:     []string{"POST", "GET", "OPTIONS", "PUT", "DELETE"},
			AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
			ExposeHeaders:    []string{"Content-Length"},
			AllowCredentials: true,
			MaxAge:           12 * time.Hour,
		}),
		middlewares.AuthMiddleware("brandAdmin"),
	)
	// Register /brand/campaigns routes under that group
	campaignGroup := brandGroup.Group("/campaigns")
	CampaignRoutes(campaignGroup)
}
