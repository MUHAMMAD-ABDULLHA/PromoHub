package models

type User struct {
	ID       int    `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
	FullName string `json:"full_name"`
	Username string `json:"username"`
	Phone    string `json:"phone"`
	Age      int    `json:"age"`
	Role     string `json:"role"`
}

type Influencer struct {
	User            User   `json:"user"`
	SocialMedia     string `json:"social_media"`
	SocialMediaLink string `json:"social_media_link"`
	Followers       int    `json:"followers"`
}
