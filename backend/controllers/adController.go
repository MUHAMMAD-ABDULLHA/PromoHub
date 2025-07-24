package controllers

import (
	"database/sql"
	"fmt"
	"net/http"
	"time"
	"vite-project/backend/config"
	"vite-project/backend/models"

	"github.com/gin-gonic/gin"
)

func CreateAd(c *gin.Context) {
	var ad models.Ad

	// Bind JSON, not form
	if err := c.ShouldBindJSON(&ad); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ad.CreatedAt = time.Now()
	ad.UpdatedAt = time.Now()

	tx, err := config.DB.Begin()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to start transaction"})
		return
	}
	defer tx.Rollback()

	query := `
        INSERT INTO ads (campaign_id, headline, audience, location, media_type, media_url,
                         bid_strategy, enable_ar, ar_url, status, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING id
    `
	err = tx.QueryRow(query,
		ad.CampaignID, ad.Headline, ad.Audience, ad.Location,
		ad.MediaType, ad.MediaURL, ad.BidStrategy, ad.EnableAR,
		ad.ARURL, ad.Status, ad.CreatedAt, ad.UpdatedAt,
	).Scan(&ad.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to create ad: %v", err)})
		return
	}

	// Commit transaction (CRUCIAL)
	if err := tx.Commit(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to commit transaction"})
		return
	}

	c.JSON(http.StatusCreated, ad)
}

func GetAllAds(c *gin.Context) {
	rows, err := config.DB.Query("SELECT * FROM ads")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to fetch ads: %v", err)})
		return
	}
	defer rows.Close()
	var ads []models.Ad
	for rows.Next() {
		var ad models.Ad
		if err := rows.Scan(
			&ad.ID, &ad.CampaignID, &ad.Headline, &ad.Audience, &ad.Location,
			&ad.MediaType, &ad.MediaURL, &ad.BidStrategy, &ad.EnableAR,
			&ad.ARURL, &ad.Status, &ad.CreatedAt, &ad.UpdatedAt,
		); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to scan ad: %v", err)})
			continue
		}
		ads = append(ads, ad)
	}
	c.JSON(http.StatusOK, ads)
}

func GetAdsByCampaignID(c *gin.Context) {
	campaignID := c.Param("id")
	// This would normally fetch ads for the specific campaign from the database
	query := `SELECT * FROM ads WHERE campaign_id = $1`

	rows, err := config.DB.Query(query, campaignID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to fetch ads: %v", err)})
	}

	defer rows.Close()
	var ads []models.Ad
	for rows.Next() {
		var ad models.Ad
		if err := rows.Scan(
			&ad.ID, &ad.CampaignID, &ad.Headline, &ad.Audience, &ad.Location,
			&ad.MediaType, &ad.MediaURL, &ad.BidStrategy, &ad.EnableAR,
			&ad.ARURL, &ad.Status, &ad.CreatedAt, &ad.UpdatedAt,
		); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to scan ad: %v", err)})
			continue
		}
		ads = append(ads, ad)
	}
	c.JSON(200, ads)

}
func GetSingleAd(c *gin.Context) {
	adID := c.Param("id")
	query := `SELECT * FROM ads WHERE id = $1`
	var ad models.Ad
	err := config.DB.QueryRow(query, adID).Scan(
		&ad.ID, &ad.CampaignID, &ad.Headline, &ad.Audience, &ad.Location,
		&ad.MediaType, &ad.MediaURL, &ad.BidStrategy, &ad.EnableAR,
		&ad.ARURL, &ad.Status, &ad.CreatedAt, &ad.UpdatedAt,
	)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusNotFound, gin.H{"error": fmt.Sprintf("Ad not found: %v", err)})
		return
	} else if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to fetch ad: %v", err)})
		return
	}
	c.JSON(http.StatusOK, ad)
}
func UpdateAd(c *gin.Context) {
	adID := c.Param("id")
	var ad models.Ad
	if err := c.ShouldBind(&ad); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	ad.UpdatedAt = time.Now()
	query := `UPDATE ads SET campaign_id = $1, headline = $2, audience = $3, location = $4, media_type = $5, media_url = $6, bid_strategy = $7, enable_ar = $8, ar_url = $9, status = $10, updated_at = $11 WHERE id = $12`
	_, err := config.DB.Exec(query, ad.CampaignID, ad.Headline, ad.Audience, ad.Location, ad.MediaType, ad.MediaURL, ad.BidStrategy, ad.EnableAR, ad.ARURL, ad.Status, ad.UpdatedAt, adID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to update ad: %v", err)})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Ad updated successfully"})
}
func DeleteAd(c *gin.Context) {
	adID := c.Param("id")
	query := `DELETE FROM ads WHERE id = $1`
	_, err := config.DB.Exec(query, adID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to delete ad: %v", err)})
		return
	}
	c.JSON(200, gin.H{"message": "Ad deleted successfully", "ad_id": adID})
}
