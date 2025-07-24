package controllers

import (
	"fmt"

	"gopkg.in/gomail.v2"
)

func sendEmail(to string, code string) error {
	fmt.Println("[DEBUG] Preparing to send email to:", to)
	m := gomail.NewMessage()
	m.SetHeader("From", "muhammadabdullah146k@gmail.com")
	m.SetHeader("To", "mabdullaha913@gmail.com")
	m.SetHeader("Subject", "Your Password Reset Code")
	m.SetBody("text/plain", fmt.Sprintf("Your verification code is: %s", code))

	d := gomail.NewDialer("smtp.gmail.com", 587, "muhammadabdullah146k@gmail.com", "ynrk yqft wrkq pnva")
	fmt.Println("[DEBUG] Dialer config →")
	fmt.Println("  Host:", d.Host)
	fmt.Println("  Port:", d.Port)
	fmt.Println("  Username:", d.Username)
	fmt.Println("  Password:", d.Password)
	fmt.Println("  SSL:", d.SSL)

	err := d.DialAndSend(m)
	if err != nil {
		fmt.Println("[ERROR] sendEmail failed:", err)
	} else {
		fmt.Println("[DEBUG] Email sent successfully to:", to)
	}

	return err
}
