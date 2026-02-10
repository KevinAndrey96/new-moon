package main

import (
	"bufio"
	"crypto/rand"
	"encoding/base64"
	"encoding/csv"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"log"
	"net/smtp"
	"os"
	"regexp"
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
	if err := loadEnvFile(".env.local"); err != nil {
		log.Fatalf("loading .env.local: %v", err)
	}

	fmt.Println("==================================================")
	fmt.Println("Bulk Email Sending System")
	fmt.Println("New Moon Psicología en Evolución S.A.S.")
	fmt.Println("==================================================")
	fmt.Println()

	// File paths: template at public/emails/colegios-febrero/index.html
	// Use colegios_bogota-test.csv for testing, colegios_bogota.csv for production
	csvPath := "colegios_bogota-test.csv"
	templatePath := "public/emails/colegios-febrero/index.html"

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

	config, err := getSMTPConfigFromEnv()
	if err != nil {
		log.Fatalf("SMTP config: %v", err)
	}

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

func loadEnvFile(path string) error {
	data, err := os.ReadFile(path)
	if err != nil {
		return err
	}

	lines := strings.Split(string(data), "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}

		idx := strings.Index(line, "=")
		if idx <= 0 {
			continue
		}

		key := strings.TrimSpace(line[:idx])
		val := strings.TrimSpace(line[idx+1:])
		if key == "" {
			continue
		}

		os.Setenv(key, val)
	}

	return nil
}

func getSMTPConfigFromEnv() (EmailConfig, error) {
	host := strings.TrimSpace(os.Getenv("SMTP_HOST"))
	port := strings.TrimSpace(os.Getenv("SMTP_PORT"))
	user := strings.TrimSpace(os.Getenv("SMTP_USER"))
	pass := os.Getenv("SMTP_PASSWORD")

	if host == "" {
		return EmailConfig{}, fmt.Errorf("SMTP_HOST not set in .env.local")
	}

	if port == "" {
		port = "587"
	}

	if user == "" {
		return EmailConfig{}, fmt.Errorf("SMTP_USER not set in .env.local")
	}

	if pass == "" {
		return EmailConfig{}, fmt.Errorf("SMTP_PASSWORD not set in .env.local")
	}

	return EmailConfig{
		SMTPHost:     host,
		SMTPPort:     port,
		EmailUser:    user,
		EmailPass:    pass,
		FromName:     "New Moon Psicología en Evolución S.A.S.",
		DelaySeconds: 2,
	}, nil
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

var (
	htmlTagRe    = regexp.MustCompile(`<[^>]*>`)
	whitespaceRe = regexp.MustCompile(`\s+`)
)

func htmlToPlainText(html string) string {
	s := htmlTagRe.ReplaceAllString(html, " ")
	s = whitespaceRe.ReplaceAllString(s, " ")

	return strings.TrimSpace(s)
}

func base64Wrap(s string) string {
	const lineLen = 76
	var b strings.Builder
	for i := 0; i < len(s); i += lineLen {
		end := i + lineLen
		if end > len(s) {
			end = len(s)
		}
		b.WriteString(s[i:end])
		if end < len(s) {
			b.WriteString("\r\n")
		}
	}

	return b.String()
}

func generateMessageID(host string) string {
	b := make([]byte, 8)
	if _, err := rand.Read(b); err != nil {
		return fmt.Sprintf("<%d@%s>", time.Now().UnixNano(), host)
	}

	return fmt.Sprintf("<%d.%s@%s>", time.Now().UnixNano(), hex.EncodeToString(b), host)
}

func buildMessage(from, to, subject, htmlBody string) []byte {
	plainBody := htmlToPlainText(htmlBody)
	boundaryBytes := make([]byte, 16)
	if _, err := rand.Read(boundaryBytes); err != nil {
		boundaryBytes = []byte(fmt.Sprintf("%d", time.Now().UnixNano()))
	}

	boundary := "bound_" + hex.EncodeToString(boundaryBytes)
	date := time.Now().Format(time.RFC1123Z)
	messageID := generateMessageID("nmpsicologiaenevolucion.com")
	unsubscribeMailto := "mailto:info@nmpsicologiaenevolucion.com?subject=Baja%20env%C3%ADos%20colegios"

	plainB64 := base64.StdEncoding.EncodeToString([]byte(plainBody))
	htmlB64 := base64.StdEncoding.EncodeToString([]byte(htmlBody))

	var b strings.Builder
	b.WriteString("From: " + from + "\r\n")
	b.WriteString("To: " + to + "\r\n")
	b.WriteString("Subject: " + subject + "\r\n")
	b.WriteString("Date: " + date + "\r\n")
	b.WriteString("Message-ID: " + messageID + "\r\n")
	b.WriteString("Reply-To: " + from + "\r\n")
	b.WriteString("List-Unsubscribe: <" + unsubscribeMailto + ">\r\n")
	b.WriteString("MIME-Version: 1.0\r\n")
	b.WriteString("Content-Type: multipart/alternative; boundary=\"" + boundary + "\"\r\n")
	b.WriteString("\r\n--" + boundary + "\r\n")
	b.WriteString("Content-Type: text/plain; charset=UTF-8\r\n")
	b.WriteString("Content-Transfer-Encoding: base64\r\n")
	b.WriteString("\r\n" + base64Wrap(plainB64) + "\r\n")
	b.WriteString("--" + boundary + "\r\n")
	b.WriteString("Content-Type: text/html; charset=UTF-8\r\n")
	b.WriteString("Content-Transfer-Encoding: base64\r\n")
	b.WriteString("\r\n" + base64Wrap(htmlB64) + "\r\n")
	b.WriteString("--" + boundary + "--\r\n")

	return []byte(b.String())
}

func sendEmail(config EmailConfig, toEmail string, subject string, htmlBody string) error {
	auth := smtp.PlainAuth("", config.EmailUser, config.EmailPass, config.SMTPHost)
	from := fmt.Sprintf("%s <%s>", config.FromName, config.EmailUser)
	message := buildMessage(from, toEmail, subject, htmlBody)
	addr := fmt.Sprintf("%s:%s", config.SMTPHost, config.SMTPPort)

	return smtp.SendMail(addr, auth, config.EmailUser, []string{toEmail}, message)
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
