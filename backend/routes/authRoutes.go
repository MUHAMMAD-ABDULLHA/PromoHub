package routes

import (
	"vite-project/backend/controllers"
	"vite-project/backend/middlewares"

	"github.com/gin-gonic/gin"
)

func AuthRoutes(c *gin.Engine) {
	c.POST("/register/user", controllers.UserRegisterHandler)
	c.POST("/register/brand", controllers.BrandRegisterHandler)
	c.POST("/register/influencer", controllers.InfluencerRegisterHandler)
	c.POST("/login", controllers.LoginHandler)
	brandgroup := c.Group("/brand")

	brandgroup.Use(middlewares.AuthMiddleware("brandAdmin"))
	{
		CampaignRoutes(brandgroup)
	}
}
