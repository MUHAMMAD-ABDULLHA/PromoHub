package controllers

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
	"vite-project/backend/config"
	"vite-project/backend/models"

	"github.com/gin-gonic/gin"
)

func SaveNotificationSettings(c *gin.Context) {
	var notificationSettings models.NotificationSettings
	if err := c.ShouldBindJSON(&notificationSettings); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}
	notificationSettings.CreatedAt = time.Now()
	notificationSettings.UpdatedAt = time.Now()

	tx, err := config.DB.Begin()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Transaction begin failed"})
		return
	}
	defer tx.Rollback()

	query := `INSERT INTO user_notification_settings (user_id, email_notifications, push_notifications, sms_notifications, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (user_id) DO UPDATE SET
         email_notifications = $2, push_notifications = $3, sms_notifications = $4, updated_at = $6`
	_, err = tx.Exec(query,
		notificationSettings.UserID, notificationSettings.EmailNotifications, notificationSettings.PushNotifications,
		notificationSettings.SmsNotifications, notificationSettings.CreatedAt, notificationSettings.UpdatedAt,
	)
	if err != nil {
		log.Printf("Error saving notification settings: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save notification settings"})
		return
	}

	if err = tx.Commit(); err != nil {
		log.Printf("Error committing transaction: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to commit transaction"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Notification settings saved"})
}

// GetSettingsHandler fetches user notification settings
func GetSettingsHandler(c *gin.Context) {
	userID := c.Query("user_id")
	if userID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User ID is required"})
		return
	}

	// Fetch settings
	var settings models.NotificationSettings
	err := config.DB.QueryRow(
		"SELECT user_id, email_notifications, push_notifications, sms_notifications, created_at, updated_at FROM user_notification_settings WHERE user_id = $1",
		userID,
	).Scan(&settings.UserID, &settings.EmailNotifications, &settings.PushNotifications, &settings.SmsNotifications, &settings.CreatedAt, &settings.UpdatedAt)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusOK, gin.H{
			"email_notifications": false,
			"push_notifications":  false,
			"sms_notifications":   false,
		})
		return
	}
	if err != nil {
		log.Printf("Error fetching settings: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch settings"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"email_notifications": settings.EmailNotifications,
		"push_notifications":  settings.PushNotifications,
		"sms_notifications":   settings.SmsNotifications,
	})
}

// UpdateSettingsHandler updates user notification settings
func UpdateSettingsHandler(c *gin.Context) {
	var notificationSettings models.NotificationSettings
	if err := c.ShouldBindJSON(&notificationSettings); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}
	notificationSettings.CreatedAt = time.Now()
	notificationSettings.UpdatedAt = time.Now()

	// Save settings
	_, err := config.DB.Exec(
		`INSERT INTO user_notification_settings (user_id, email_notifications, push_notifications, sms_notifications, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (user_id) DO UPDATE SET
         email_notifications = $2, push_notifications = $3, sms_notifications = $4, updated_at = $6`,
		notificationSettings.UserID, notificationSettings.EmailNotifications, notificationSettings.PushNotifications, notificationSettings.SmsNotifications, notificationSettings.CreatedAt, notificationSettings.UpdatedAt,
	)
	if err != nil {
		log.Printf("Error saving settings: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save settings"})
		return
	}

	// Create confirmation notification
	metadata, _ := json.Marshal(map[string]interface{}{"action": "settings_updated"})
	notification := models.Notification{
		UserID:    notificationSettings.UserID,
		Role:      "brandAdmin", // Set based on user role; adjust if dynamic
		Type:      "SETTINGS_UPDATED",
		Title:     "Settings Updated",
		Message:   "Your notification settings have been updated.",
		IsRead:    false,
		Metadata:  map[string]interface{}{"action": "settings_updated"},
		Timestamp: time.Now().Format(time.RFC3339),
		CreatedAt: time.Now(),
		ExpiresAt: nil,
	}
	result, err := config.DB.Exec(
		`INSERT INTO notifications (user_id, role, type, title, message, is_read, metadata, timestamp, created_at, expires_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
         RETURNING id`,
		notification.UserID, notification.Role, notification.Type, notification.Title, notification.Message, notification.IsRead, metadata, notification.Timestamp, notification.CreatedAt, notification.ExpiresAt,
	)
	fmt.Println(result)
	if err != nil {
		log.Printf("Error creating notification: %v", err)
	} else {
		// Retrieve the auto-generated ID
		var notificationID int
		err = config.DB.QueryRow("SELECT id FROM notifications WHERE user_id = $1 AND timestamp = $2", notification.UserID, notification.Timestamp).Scan(&notificationID)
		if err != nil {
			log.Printf("Error retrieving notification ID: %v", err)
		} else {
			notification.ID = notificationID
			// Use the existing sendEmail function
			if err := sendEmail(notification.Title, notification.Message); err != nil {
				log.Printf("Error sending email: %v", err)
				config.DB.Exec("UPDATE notifications SET is_read = $1 WHERE id = $2", false, notification.ID)
			} else {
				config.DB.Exec("UPDATE notifications SET is_read = $1 WHERE id = $2", true, notification.ID)
			}
		}
	}

	c.JSON(http.StatusOK, gin.H{"message": "Settings updated"})
}

// SendEmailNotificationHandler sends an email notification
func SendEmailNotificationHandler(c *gin.Context) {
	var req struct {
		UserID  int    `json:"user_id"`
		Type    string `json:"type"`
		Title   string `json:"title"`
		Message string `json:"message"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// Fetch user role for notification
	var user models.User
	err := config.DB.QueryRow("SELECT id, email, role FROM users WHERE id = $1", req.UserID).Scan(&user.ID, &user.Email, &user.Role)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User not found"})
		return
	}
	if err != nil {
		log.Printf("Error fetching user: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch user"})
		return
	}

	metadata, _ := json.Marshal(map[string]interface{}{"notification_type": req.Type})
	notification := models.Notification{
		UserID:    req.UserID,
		Role:      user.Role,
		Type:      req.Type,
		Title:     req.Title,
		Message:   req.Message,
		IsRead:    false,
		Metadata:  map[string]interface{}{"notification_type": req.Type},
		Timestamp: time.Now().Format(time.RFC3339),
		CreatedAt: time.Now(),
		ExpiresAt: nil,
	}

	result, err := config.DB.Exec(
		`INSERT INTO notifications (user_id, role, type, title, message, is_read, metadata, timestamp, created_at, expires_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
         RETURNING id`,
		notification.UserID, notification.Role, notification.Type, notification.Title, notification.Message, notification.IsRead, metadata, notification.Timestamp, notification.CreatedAt, notification.ExpiresAt,
	)
	fmt.Println(result)
	if err != nil {
		log.Printf("Error creating notification: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create notification"})
		return
	}

	// Retrieve the auto-generated ID
	var notificationID int
	err = config.DB.QueryRow("SELECT id FROM notifications WHERE user_id = $1 AND timestamp = $2", notification.UserID, notification.Timestamp).Scan(&notificationID)
	if err != nil {
		log.Printf("Error retrieving notification ID: %v", err)
	} else {
		notification.ID = notificationID
		// Use the existing sendEmail function
		if err := sendEmail(notification.Title, notification.Message); err != nil {
			log.Printf("Error sending email: %v", err)
			config.DB.Exec("UPDATE notifications SET is_read = $1 WHERE id = $2", false, notification.ID)
		} else {
			config.DB.Exec("UPDATE notifications SET is_read = $1 WHERE id = $2", true, notification.ID)
		}
	}

	c.JSON(http.StatusAccepted, gin.H{"message": "Notification queued"})
}

func SaveNotifications(c *gin.Context) {
	var notifications []models.Notification
	if err := c.ShouldBindJSON(&notifications); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	tx, err := config.DB.Begin()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Transaction begin failed"})
		return
	}
	defer tx.Rollback()

	for _, notification := range notifications {
		notification.CreatedAt = time.Now()
		notification.Timestamp = time.Now().Format(time.RFC3339)

		result, err := tx.Exec(
			`INSERT INTO notifications (user_id, role, type, title, message, is_read, metadata, timestamp, created_at, expires_at)
			 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
			notification.UserID, notification.Role, notification.Type,
			notification.Title, notification.Message, notification.IsRead,
			notification.Metadata, notification.Timestamp,
			notification.CreatedAt, notification.ExpiresAt,
		)
		if err != nil {
			log.Printf("Error saving notification: %v", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save notifications"})
			return
		}
		fmt.Println(result)
	}

	if err = tx.Commit(); err != nil {
		log.Printf("Error committing transaction: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to commit transaction"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Notifications saved successfully"})
}

func FetchNotifications(c *gin.Context) {
	userID := c.Query("user_id")
	if userID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User ID is required"})
		return
	}

	rows, err := config.DB.Query("SELECT id, user_id, role, type, title, message, is_read, metadata, timestamp, created_at, expires_at FROM notifications WHERE user_id = $1", userID)
	if err != nil {
		log.Printf("Error fetching notifications: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch notifications"})
		return
	}
	defer rows.Close()

	var notifications []models.Notification
	for rows.Next() {
		var notification models.Notification
		var metadata []byte
		var timestamp sql.NullString
		if err := rows.Scan(&notification.ID, &notification.UserID, &notification.Role, &notification.Type,
			&notification.Title, &notification.Message, &notification.IsRead,
			&metadata, &timestamp, &notification.CreatedAt, &notification.ExpiresAt); err != nil {
			log.Printf("Error scanning notification: %v", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to parse notifications"})
			return
		}
		if metadata != nil {
			if err := json.Unmarshal(metadata, &notification.Metadata); err != nil {
				log.Printf("Error unmarshaling metadata: %v", err)
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to parse notification metadata"})
				return
			}
		} else {
			notification.Metadata = map[string]interface{}{}
		}
		notification.Timestamp = timestamp.String // Use empty string if NULL
		notifications = append(notifications, notification)
	}

	c.JSON(http.StatusOK, notifications)
}

func UpdateNotificationStatus(c *gin.Context) {
	var req struct {
		ID     int  `json:"id"`
		IsRead bool `json:"is_read"`
	}
	fmt.Println(req)
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	_, err := config.DB.Exec("UPDATE notifications SET is_read = $1 WHERE id = $2", req.IsRead, req.ID)
	if err != nil {
		log.Printf("Error updating notification status: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update notification status"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Notification status updated"})
}

// save the notification in database to use in the api functions
func saveSingleNotification(userID int, role, notifType, title, message string, metadata map[string]interface{}) {
	notifications := []models.Notification{
		{
			UserID:    userID,
			Role:      role,
			Type:      notifType,
			Title:     title,
			Message:   message,
			IsRead:    false,
			Metadata:  metadata,
			Timestamp: time.Now().Format(time.RFC3339),
			CreatedAt: time.Now(),
		},
	}

	// Use existing SaveNotifications logic (but as internal call, not HTTP)
	tx, err := config.DB.Begin()
	if err != nil {
		log.Printf("Error starting transaction: %v", err)
		return
	}
	defer tx.Rollback()

	for _, notification := range notifications {
		_, err := tx.Exec(
			`INSERT INTO notifications (user_id, role, type, title, message, is_read, metadata, timestamp, created_at, expires_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
			notification.UserID, notification.Role, notification.Type,
			notification.Title, notification.Message, notification.IsRead,
			notification.Metadata, notification.Timestamp,
			notification.CreatedAt, notification.ExpiresAt,
		)
		if err != nil {
			log.Printf("Error saving notification: %v", err)
			return
		}
	}

	if err = tx.Commit(); err != nil {
		log.Printf("Error committing transaction: %v", err)
		return
	}
}
