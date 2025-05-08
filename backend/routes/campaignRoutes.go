package routes

import (
	"vite-project/backend/controllers"

	"github.com/gin-gonic/gin"
)

func CampaignRoutes(rg *gin.RouterGroup) {
	rg.POST("/", controllers.CreateCampaign)
	rg.GET("/", controllers.GetAllCampaigns)
	rg.GET("/:id", controllers.GetCampaign)
	rg.PUT("/:id", controllers.UpdateCampaign)
	rg.DELETE("/:id", controllers.DeleteCampaign)
}
