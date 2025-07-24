package firebase

import (
	"context"
	"log"

	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/messaging"
	"google.golang.org/api/option"
)

var FirebaseClient *messaging.Client

func InitFirebase() {
	ctx := context.Background()
	opt := option.WithCredentialsFile("firebase-service-account.json")

	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		log.Fatalf("❌ Error initializing Firebase app: %v", err)
	}

	client, err := app.Messaging(ctx)
	if err != nil {
		log.Fatalf("❌ Error initializing Firebase messaging: %v", err)
	}

	FirebaseClient = client
	log.Println("✅ Firebase Messaging initialized.")
}
