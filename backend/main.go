package main

import (
	"vite-project/backend/config"
	"vite-project/backend/routes"

	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Connect to Database
	config.ConnectDB()

	// Setup Router
	server := gin.Default()

	// Add CORS middleware with custom config
	server.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // React app origin
		AllowMethods:     []string{"POST", "GET", "OPTIONS", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	routes.AuthRoutes(server)

	// Start Server
	server.Run() // defaults to ":8080"
}
