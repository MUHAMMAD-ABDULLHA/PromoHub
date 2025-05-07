package models

import (
	"encoding/json"
	"time"
)

type Brand struct {
	User         User   `json:"user"`
	BrandName    string `json:"brand_name"`
	BrandWebsite string `json:"brand_website"`
}

// BrandSettings holds per-brand account settings.
type BrandSettings struct {
	BrandUserID      int    `json:"brand_user_id" db:"brand_user_id"`
	BusinessAddress  string `json:"business_address" db:"business_address"`
	Timezone         string `json:"timezone" db:"timezone"`
	Currency         string `json:"currency" db:"currency"`
	TaxID            string `json:"tax_id" db:"tax_id"`
	PrivacyPolicyURL string `json:"privacy_policy_url" db:"privacy_policy_url"`
	BusinessVerified bool   `json:"business_verified" db:"business_verified"`
}

// BrandPaymentMethod represents one saved payment method.
type BrandPaymentMethod struct {
	ID          int             `json:"id" db:"id"`
	BrandUserID int             `json:"brand_user_id" db:"brand_user_id"`
	Type        string          `json:"type" db:"type"`                 // e.g. "credit_card"
	Details     json.RawMessage `json:"details_json" db:"details_json"` // token/meta JSON
	IsDefault   bool            `json:"is_default" db:"is_default"`
	AddedAt     time.Time       `json:"added_at" db:"added_at"`
}

// BrandNotification holds a brand’s alert preferences.
type BrandNotification struct {
	BrandUserID      int      `json:"brand_user_id" db:"brand_user_id"`
	Channels         []string `json:"channels" db:"channels_json"` // unmarshaled from JSONB
	BillingThreshold float64  `json:"billing_threshold" db:"billing_threshold"`
	AdApprovalAlert  bool     `json:"ad_approval_alert" db:"ad_approval_alert"`
}
