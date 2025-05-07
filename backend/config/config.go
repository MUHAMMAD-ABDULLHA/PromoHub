package config

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func ConnectDB() {
	connStr := "user=postgres dbname=brandpromotionplatform sslmode=disable password=ahmad1122 host=localhost port=5432"
	var err error
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatalf("❌ Error opening database: %v", err)
	}

	// Check connection
	err = DB.Ping()
	if err != nil {
		log.Fatalf("❌ Error connecting to database: %v", err)
	}

	fmt.Println("✅ Connected to PostgreSQL")
}
