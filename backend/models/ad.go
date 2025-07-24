package models

import "time"

type Ad struct {
	ID          int       `json:"id"` // Auto-generated, not required on create
	CampaignID  string    `json:"campaignId" binding:"required"`
	Headline    string    `json:"headline" binding:"required,max=30"`
	Audience    string    `json:"audience" binding:"required"`
	Location    string    `json:"location" binding:"required"`
	MediaType   string    `json:"mediaType" binding:"required,oneof=image video"`
	MediaURL    string    `json:"mediaUrl" binding:"omitempty,url"` // Validate URL only if present
	BidStrategy string    `json:"bidStrategy" binding:"required,oneof=max_conversions max_impressions max_clicks"`
	EnableAR    bool      `json:"enableAR"`
	ARURL       string    `json:"arUrl" binding:"omitempty,url"` // Validate URL only if present
	Status      string    `json:"status" binding:"required,oneof=enabled paused"`
	CreatedAt   time.Time `json:"created_at" db:"created_at"`
	UpdatedAt   time.Time `json:"updatedAt" db:"updated_at"`
}
