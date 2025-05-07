package controllers

import (
	"fmt"
	"net/http"
	"time"
	"vite-project/backend/config"
	"vite-project/backend/models"

	"github.com/gin-gonic/gin"
)

// CreateCampaign handles campaign creation
// func CreateCampaign(c *gin.Context) {
// 	var campaign models.Campaign
// 	if err := c.ShouldBindJSON(&campaign); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	campaign.CreatedAt = time.Now()
// 	campaign.UpdatedAt = time.Now()

// 	tx, err := config.DB.Begin()
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Transaction begin failed"})
// 		return
// 	}
// 	defer tx.Rollback()

// 	query := `
// 		INSERT INTO campaigns
// 		(brand_user_id, name, description, objective, overall_budget, daily_budget, start_date, end_date, demographics,
// 		has_historical, historical_data, key_messages, cta, offers, enable_ar, enable_voice, multi_step_form,
// 		personalized_page, status, created_at, updated_at)
// 		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
// 		RETURNING id`

// 	err = tx.QueryRow(query,
// 		campaign.BrandUserID, campaign.Name, campaign.Description, campaign.Objective,
// 		campaign.OverallBudget, campaign.DailyBudget, campaign.StartDate, campaign.EndDate, campaign.Demographics,
// 		campaign.HasHistorical, campaign.HistoricalData, campaign.KeyMessages, campaign.Cta, campaign.Offers,
// 		campaign.EnableAR, campaign.EnableVoice, campaign.MultiStepForm, campaign.PersonalizedPage, campaign.Status,
// 		campaign.CreatedAt, campaign.UpdatedAt,
// 	).Scan(&campaign.ID)

// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert campaign"})
// 		return
// 	}

// 	// Example for KPI handling (extend if needed)
// 	var kpis []string
// 	if err := c.ShouldBindJSON(&kpis); err == nil {
// 		for i, kpi := range kpis {
// 			_, err := tx.Exec("INSERT INTO campaign_kpis (campaign_id, kpi_name) VALUES ($1, $2)", campaign.ID, kpi)
// 			if err != nil {
// 				c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert KPI at index " + string(i)})
// 				return
// 			}
// 		}
// 	}

// 	if err := tx.Commit(); err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Transaction commit failed"})
// 		return
// 	}

//		c.JSON(http.StatusCreated, campaign)
//	}
func CreateCampaign(c *gin.Context) {
	var campaign models.Campaign
	if err := c.ShouldBindJSON(&campaign); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	campaign.CreatedAt = time.Now()
	campaign.UpdatedAt = time.Now()

	tx, err := config.DB.Begin()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Transaction begin failed"})
		return
	}
	defer tx.Rollback()

	// Insert campaign
	query := `
		INSERT INTO campaigns 
		(brand_user_id, name, description, objective, overall_budget, daily_budget, start_date, end_date, demographics,
		has_historical, historical_data, key_messages, cta, offers, enable_ar, enable_voice, multi_step_form, 
		personalized_page, status, created_at, updated_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
		RETURNING id`
	fmt.Println("Query:", query)
	err = tx.QueryRow(query,
		campaign.BrandUserID, campaign.Name, campaign.Description, campaign.Objective,
		campaign.OverallBudget, campaign.DailyBudget, campaign.StartDate, campaign.EndDate, campaign.Demographics,
		campaign.HasHistorical, campaign.HistoricalData, campaign.KeyMessages, campaign.Cta, campaign.Offers,
		campaign.EnableAR, campaign.EnableVoice, campaign.MultiStepForm, campaign.PersonalizedPage, campaign.Status,
		campaign.CreatedAt, campaign.UpdatedAt,
	).Scan(&campaign.ID)
	fmt.Println("Campaign ID:", campaign.BrandUserID)
	if err != nil {
		fmt.Println("Error inserting campaign:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert campaign"})
		return
	}

	// Insert KPIs into campaign_kpis table
	for i, kpi := range campaign.Kpis {
		if _, err := tx.Exec(
			"INSERT INTO campaign_kpis (campaign_id, kpi_name) VALUES ($1, $2)",
			campaign.ID, kpi); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert KPI at index " + string(i)})
			fmt.Println("Error inserting KPI:", err)
			return
		}
	}

	if err := tx.Commit(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Transaction commit failed"})
		return
	}

	c.JSON(http.StatusCreated, campaign)
}

// GetCampaign retrieves a single campaign by ID
func GetCampaign(c *gin.Context) {
	id := c.Param("id")
	var campaign models.Campaign

	err := config.DB.QueryRow("SELECT * FROM campaigns WHERE id = $1", id).Scan(
		&campaign.ID, &campaign.BrandUserID, &campaign.Name, &campaign.Description,
		&campaign.Objective, &campaign.OverallBudget, &campaign.DailyBudget, &campaign.StartDate,
		&campaign.EndDate, &campaign.Demographics, &campaign.HasHistorical, &campaign.HistoricalData,
		&campaign.KeyMessages, &campaign.Cta, &campaign.Offers, &campaign.EnableAR,
		&campaign.EnableVoice, &campaign.MultiStepForm, &campaign.PersonalizedPage,
		&campaign.Status, &campaign.CreatedAt, &campaign.UpdatedAt,
	)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Campaign not found"})
		return
	}

	c.JSON(http.StatusOK, campaign)
}

// GetAllCampaigns returns all campaigns
func GetAllCampaigns(c *gin.Context) {
	rows, err := config.DB.Query("SELECT * FROM campaigns")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch campaigns"})
		return
	}
	defer rows.Close()

	var campaigns []models.Campaign
	for rows.Next() {
		var cpn models.Campaign
		err := rows.Scan(&cpn.ID, &cpn.BrandUserID, &cpn.Name, &cpn.Description,
			&cpn.Objective, &cpn.OverallBudget, &cpn.DailyBudget, &cpn.StartDate,
			&cpn.EndDate, &cpn.Demographics, &cpn.HasHistorical, &cpn.HistoricalData,
			&cpn.KeyMessages, &cpn.Cta, &cpn.Offers, &cpn.EnableAR, &cpn.EnableVoice,
			&cpn.MultiStepForm, &cpn.PersonalizedPage, &cpn.Status, &cpn.CreatedAt, &cpn.UpdatedAt)
		if err == nil {
			campaigns = append(campaigns, cpn)
		}
	}

	c.JSON(http.StatusOK, campaigns)
}

// UpdateCampaign updates campaign details
func UpdateCampaign(c *gin.Context) {
	id := c.Param("id")
	var campaign models.Campaign
	if err := c.ShouldBindJSON(&campaign); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	campaign.UpdatedAt = time.Now()

	_, err := config.DB.Exec(`
		UPDATE campaigns SET 
		name=$1, description=$2, objective=$3, overall_budget=$4, daily_budget=$5, start_date=$6, end_date=$7, 
		demographics=$8, has_historical=$9, historical_data=$10, key_messages=$11, cta=$12, offers=$13, 
		enable_ar=$14, enable_voice=$15, multi_step_form=$16, personalized_page=$17, status=$18, updated_at=$19
		WHERE id=$20`,
		campaign.Name, campaign.Description, campaign.Objective, campaign.OverallBudget,
		campaign.DailyBudget, campaign.StartDate, campaign.EndDate, campaign.Demographics,
		campaign.HasHistorical, campaign.HistoricalData, campaign.KeyMessages, campaign.Cta, campaign.Offers,
		campaign.EnableAR, campaign.EnableVoice, campaign.MultiStepForm, campaign.PersonalizedPage,
		campaign.Status, campaign.UpdatedAt, id,
	)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Update failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Campaign updated"})
}

// DeleteCampaign removes a campaign by ID
func DeleteCampaign(c *gin.Context) {
	id := c.Param("id")
	_, err := config.DB.Exec("DELETE FROM campaigns WHERE id = $1", id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Delete failed"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Campaign deleted"})
}
