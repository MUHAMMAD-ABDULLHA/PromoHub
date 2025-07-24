package routes

import (
	"vite-project/backend/controllers"

	"github.com/gin-gonic/gin"
)

func CampaignRoutes(rg *gin.RouterGroup) {
	// Create a new campaign
	rg.POST("/", controllers.CreateCampaign)

	// Get all campaigns (for admin)
	rg.GET("/", controllers.GetAllCampaigns)

	// Get campaigns by brand user ID (list view for specific brand)
	rg.GET("/brand/:id", controllers.GetCampaign) // <-- for user_id

	// Get single campaign by campaign ID (detail view)
	rg.GET("/:id", controllers.GetSingleCampaign) // <-- for campaign_id

	// Update campaign
	rg.PUT("/:id", controllers.UpdateCampaign)

	// Delete campaign
	rg.DELETE("/:id", controllers.DeleteCampaign)
}
