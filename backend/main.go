package main

import (
	"fmt"
	"time"
	"vite-project/backend/config"
	"vite-project/backend/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Connect to Database
	config.ConnectDB()

	// Setup Router
	server := gin.Default()
	server.Use(cors.New(cors.Config{
		AllowOrigins:        []string{"http://localhost:5173"},
		AllowMethods:        []string{"POST", "GET", "OPTIONS", "PUT", "DELETE"},
		AllowHeaders:        []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:       []string{"Content-Length"},
		AllowCredentials:    true,
		AllowPrivateNetwork: true,
		MaxAge:              12 * time.Hour,
	}))
	server.Use(func(c *gin.Context) {
		fmt.Println("🔍 Request Method:", c.Request.Method)
		fmt.Println("🔍 Request Path:", c.Request.URL.Path)
		fmt.Println("🔍 Origin:", c.Request.Header.Get("Origin"))
		c.Next()
	})

	routes.AuthRoutes(server)

	// Start Server
	server.Run() // defaults to ":8080"

}
