package routes

import (
	"vite-project/backend/controllers"

	"github.com/gin-gonic/gin"
)

func CampaignRoutes(rg *gin.RouterGroup) {
	campaign := rg.Group("/campaigns")
	{
		campaign.POST("/", controllers.CreateCampaign)
		campaign.GET("/", controllers.GetAllCampaigns)
		campaign.GET("/:id", controllers.GetCampaign)
		campaign.PUT("/:id", controllers.UpdateCampaign)
		campaign.DELETE("/:id", controllers.DeleteCampaign)
	}
}
