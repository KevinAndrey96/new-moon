package main

import (
	"bufio"
	"encoding/csv"
	"errors"
	"fmt"
	"io"
	"log"
	"net/smtp"
	"os"
	"strings"
	"time"
)

type Colegio struct {
	Nombre    string
	Email     string
	Telefono  string
	Localidad string
}

type EmailConfig struct {
	SMTPHost     string
	SMTPPort     string
	EmailUser    string
	EmailPass    string
	FromName     string
	Subject      string
	DelaySeconds int
}

func main() {
	fmt.Println("==================================================")
	fmt.Println("Bulk Email Sending System")
	fmt.Println("New Moon Psicología en Evolución S.A.S.")
	fmt.Println("==================================================")
	fmt.Println()

	// File paths
	csvPath := "colegios_bogota.csv"
	templatePath := "email_schools.html"

	// Check if files exist
	if _, err := os.Stat(csvPath); os.IsNotExist(err) {
		log.Fatalf("Error: CSV file not found: %s", csvPath)
	}

	if _, err := os.Stat(templatePath); os.IsNotExist(err) {
		log.Fatalf("Error: HTML template not found: %s", templatePath)
	}

	fmt.Printf("Files found:\n")
	fmt.Printf("  CSV: %s\n", csvPath)
	fmt.Printf("  Template: %s\n\n", templatePath)

	// Get SMTP configuration from user
	config := getSMTPConfig()

	subjectTemplate := "Propuesta de apoyo neuropsicológico para {{.Nombre}}"

	fmt.Printf("\n==================================================\n")
	fmt.Printf("Configuration:\n")
	fmt.Printf("  Server: %s:%s\n", config.SMTPHost, config.SMTPPort)
	fmt.Printf("  From: %s\n", config.EmailUser)
	fmt.Printf("  Subject: %s\n", subjectTemplate)
	fmt.Printf("==================================================\n\n")

	// Confirm before sending
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Do you want to continue with sending? (y/n): ")
	confirm, _ := reader.ReadString('\n')
	confirm = strings.TrimSpace(strings.ToLower(confirm))

	if confirm != "y" && confirm != "s" {
		fmt.Println("Sending cancelled.")
		return
	}

	// Process CSV and send emails
	if err := processAndSend(csvPath, templatePath, subjectTemplate, config); err != nil {
		log.Fatalf("Error processing emails: %v", err)
	}
}

func getSMTPConfig() EmailConfig {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("SMTP Server (e.g., smtp.gmail.com): ")
	smtpHost, _ := reader.ReadString('\n')
	smtpHost = strings.TrimSpace(smtpHost)

	fmt.Print("SMTP Port (e.g., 587 for TLS): ")
	smtpPort, _ := reader.ReadString('\n')
	smtpPort = strings.TrimSpace(smtpPort)
	if smtpPort == "" {
		smtpPort = "587"
	}

	fmt.Print("Your email address: ")
	emailUser, _ := reader.ReadString('\n')
	emailUser = strings.TrimSpace(emailUser)

	fmt.Print("Your password or App Password: ")
	emailPass, _ := reader.ReadString('\n')
	emailPass = strings.TrimSpace(emailPass)

	return EmailConfig{
		SMTPHost:     smtpHost,
		SMTPPort:     smtpPort,
		EmailUser:    emailUser,
		EmailPass:    emailPass,
		FromName:     "New Moon Psicología en Evolución S.A.S.",
		DelaySeconds: 2,
	}
}

func loadTemplate(path string) (string, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return "", fmt.Errorf("error reading template: %v", err)
	}
	return string(content), nil
}

func personalizeTemplate(templateStr string, colegio Colegio) string {
	personalized := templateStr

	// Replace placeholders
	personalized = strings.ReplaceAll(personalized, "[Nombre del Colegio]", colegio.Nombre)
	personalized = strings.ReplaceAll(personalized, "[Teléfono de Contacto]", colegio.Telefono)
	personalized = strings.ReplaceAll(personalized, "[Correo Electrónico]", colegio.Email)

	return personalized
}

func createSubject(subjectTemplate string, colegio Colegio) string {
	subject := subjectTemplate
	subject = strings.ReplaceAll(subject, "{{.Nombre}}", colegio.Nombre)
	return subject
}

func sendEmail(config EmailConfig, toEmail string, subject string, htmlBody string) error {
	// Configure authentication
	auth := smtp.PlainAuth("", config.EmailUser, config.EmailPass, config.SMTPHost)

	// Build message
	from := fmt.Sprintf("%s <%s>", config.FromName, config.EmailUser)
	headers := make(map[string]string)
	headers["From"] = from
	headers["To"] = toEmail
	headers["Subject"] = subject
	headers["MIME-Version"] = "1.0"
	headers["Content-Type"] = "text/html; charset=UTF-8"

	// Build complete message
	message := ""
	for k, v := range headers {
		message += fmt.Sprintf("%s: %s\r\n", k, v)
	}
	message += "\r\n" + htmlBody

	// Send email
	addr := fmt.Sprintf("%s:%s", config.SMTPHost, config.SMTPPort)
	err := smtp.SendMail(addr, auth, config.EmailUser, []string{toEmail}, []byte(message))

	return err
}

func processAndSend(csvPath, templatePath, subjectTemplate string, config EmailConfig) error {
	// Load template
	templateStr, err := loadTemplate(templatePath)
	if err != nil {
		return err
	}

	// Open CSV
	file, err := os.Open(csvPath)
	if err != nil {
		return fmt.Errorf("error opening CSV: %v", err)
	}
	defer file.Close()

	reader := csv.NewReader(file)
	reader.Comma = ','

	// Read header
	headers, err := reader.Read()
	if err != nil {
		return fmt.Errorf("error reading CSV headers: %v", err)
	}

	// Create column index map
	colIndex := make(map[string]int)
	for i, header := range headers {
		colIndex[strings.ToLower(strings.TrimSpace(header))] = i
	}

	// Counters
	sentCount := 0
	errorCount := 0
	skippedCount := 0

	fmt.Println("\nStarting email sending...")

	// Process each row
	for {
		record, err := reader.Read()
		if err != nil {
			if errors.Is(err, io.EOF) {
				break
			}
			log.Printf("Error reading row: %v", err)
			continue
		}

		// Extract school data
		colegio := Colegio{}

		if idx, ok := colIndex["nombre_colegio"]; ok && idx < len(record) {
			colegio.Nombre = strings.TrimSpace(record[idx])
		}

		if idx, ok := colIndex["email"]; ok && idx < len(record) {
			colegio.Email = strings.TrimSpace(record[idx])
		}

		if idx, ok := colIndex["telefono"]; ok && idx < len(record) {
			colegio.Telefono = strings.TrimSpace(record[idx])
		}

		if idx, ok := colIndex["localidad"]; ok && idx < len(record) {
			colegio.Localidad = strings.TrimSpace(record[idx])
		}

		// Validate email exists
		if colegio.Email == "" {
			fmt.Printf("⚠ Skipped (no email): %s\n", colegio.Nombre)
			skippedCount++
			continue
		}

		// Personalize template and subject
		htmlBody := personalizeTemplate(templateStr, colegio)
		subject := createSubject(subjectTemplate, colegio)

		// Send email
		if err := sendEmail(config, colegio.Email, subject, htmlBody); err != nil {
			fmt.Printf("✗ Error sending to %s (%s): %v\n", colegio.Email, colegio.Nombre, err)
			errorCount++
		} else {
			fmt.Printf("✓ Sent to: %s (%s)\n", colegio.Email, colegio.Nombre)
			sentCount++
		}

		// Delay between emails
		time.Sleep(time.Duration(config.DelaySeconds) * time.Second)
	}

	// Summary
	fmt.Printf("\n%s\n", strings.Repeat("=", 50))
	fmt.Printf("Summary:\n")
	fmt.Printf("  Sent: %d\n", sentCount)
	fmt.Printf("  Errors: %d\n", errorCount)
	fmt.Printf("  Skipped (no email): %d\n", skippedCount)
	fmt.Printf("%s\n", strings.Repeat("=", 50))

	return nil
}
