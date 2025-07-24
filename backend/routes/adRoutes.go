package routes

import (
	"vite-project/backend/controllers"

	"github.com/gin-gonic/gin"
)

func AdRoutes(rg *gin.RouterGroup) {
	// Create new ad
	rg.POST("/", controllers.CreateAd)

	// Get all ads
	rg.GET("/", controllers.GetAllAds)

	// Static routes first
	rg.GET("/campaign/:id", controllers.GetAdsByCampaignID) // must come before :id

	// Dynamic route last
	rg.GET("/:id", controllers.GetSingleAd)

	// Update ad
	rg.PUT("/:id", controllers.UpdateAd)

	// Delete ad
	rg.DELETE("/:id", controllers.DeleteAd)
}
