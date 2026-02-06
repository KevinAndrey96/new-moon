import nodemailer from 'nodemailer'
import { CONTACT_INFO } from './constants'

interface EmailConfig {
  smtpHost: string
  smtpPort: number
  smtpUser: string
  smtpPassword: string
  smtpSecure?: boolean
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export type MeetingRequestSource = 'colegios' | 'empresas'

export interface MeetingRequestData {
  source: MeetingRequestSource
  organizationName: string
  name: string
  position?: string
  email: string
  phone: string
  message?: string
}

const MEETING_SOURCE_LABELS: Record<MeetingRequestSource, { section: string; organizationLabel: string }> = {
  colegios: { section: 'Para Colegios', organizationLabel: 'Nombre del Colegio' },
  empresas: { section: 'Para Empresas', organizationLabel: 'Nombre de la Empresa' },
}

function getEmailConfig(): EmailConfig {
  const smtpHost = process.env.SMTP_HOST || ''
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
  const smtpUser = process.env.SMTP_USER || ''
  const smtpPassword = process.env.SMTP_PASSWORD || ''
  // Port 465 = implicit TLS (secure from start). Port 587/25 = STARTTLS (plain then upgrade).
  // Using secure: true on 587 causes "wrong version number" SSL error.
  const smtpSecure = smtpPort === 465

  if (!smtpHost || !smtpUser || !smtpPassword) {
    throw new Error('SMTP configuration is missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD environment variables.')
  }

  return {
    smtpHost,
    smtpPort,
    smtpUser,
    smtpPassword,
    smtpSecure,
  }
}

function createEmailHTML(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Mensaje de Contacto</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
    <p style="margin: 10px 0 0 0; font-size: 14px;">New Moon Psicología en Evolución S.A.S.</p>
  </div>
  
  <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #dee2e6; border-top: none;">
    <h2 style="color: #1e3a5f; margin-top: 0;">Información del Contacto</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 150px;">Nombre:</td>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6; font-weight: bold;">Email:</td>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6;">
          <a href="mailto:${data.email}" style="color: #1e3a5f; text-decoration: none;">${data.email}</a>
        </td>
      </tr>
      ${data.phone ? `
      <tr>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6; font-weight: bold;">Teléfono:</td>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6;">
          <a href="tel:${data.phone}" style="color: #1e3a5f; text-decoration: none;">${data.phone}</a>
        </td>
      </tr>
      ` : ''}
      ${data.subject ? `
      <tr>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6; font-weight: bold;">Asunto:</td>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6;">${data.subject}</td>
      </tr>
      ` : ''}
    </table>
    
    <h3 style="color: #1e3a5f; margin-top: 30px;">Mensaje:</h3>
    <div style="background-color: white; padding: 20px; border-left: 4px solid #ff6b35; border-radius: 4px; white-space: pre-wrap; line-height: 1.8;">
${data.message}
    </div>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #dee2e6; font-size: 12px; color: #666; text-align: center;">
      <p style="margin: 5px 0;">Este mensaje fue enviado desde el formulario de contacto del sitio web.</p>
      <p style="margin: 5px 0;">Fecha: ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

function createEmailText(data: ContactFormData): string {
  return `
Nuevo Mensaje de Contacto
New Moon Psicología en Evolución S.A.S.

Información del Contacto:
- Nombre: ${data.name}
- Email: ${data.email}
${data.phone ? `- Teléfono: ${data.phone}` : ''}
${data.subject ? `- Asunto: ${data.subject}` : ''}

Mensaje:
${data.message}

---
Este mensaje fue enviado desde el formulario de contacto del sitio web.
Fecha: ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}
  `.trim()
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const config = getEmailConfig()
  
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpSecure,
    requireTLS: config.smtpPort === 587,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const emailSubject = data.subject 
    ? `Formulario de Contacto: ${data.subject}`
    : 'Nuevo Mensaje del Formulario de Contacto'

  const mailOptions = {
    from: `"${data.name}" <${config.smtpUser}>`,
    replyTo: data.email,
    to: CONTACT_INFO.email,
    subject: emailSubject,
    text: createEmailText(data),
    html: createEmailHTML(data),
  }

  await transporter.sendMail(mailOptions)
}

function createMeetingRequestHTML(data: MeetingRequestData): string {
  const labels = MEETING_SOURCE_LABELS[data.source]
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Solicitud de Reunión - ${labels.section}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">Solicitud de Reunión de 15 Minutos</h1>
    <p style="margin: 10px 0 0 0; font-size: 14px;">Sección ${labels.section} - New Moon Psicología en Evolución S.A.S.</p>
  </div>
  
  <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #dee2e6; border-top: none;">
    <h2 style="color: #1e3a5f; margin-top: 0;">Datos de la organización y contacto</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 180px;">${labels.organizationLabel}:</td>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6;">${data.organizationName}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6; font-weight: bold;">Nombre del contacto:</td>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6;">${data.name}</td>
      </tr>
      ${data.position ? `
      <tr>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6; font-weight: bold;">Cargo:</td>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6;">${data.position}</td>
      </tr>
      ` : ''}
      <tr>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6; font-weight: bold;">Email:</td>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6;">
          <a href="mailto:${data.email}" style="color: #1e3a5f; text-decoration: none;">${data.email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6; font-weight: bold;">Teléfono:</td>
        <td style="padding: 10px; background-color: white; border-bottom: 1px solid #dee2e6;">
          <a href="tel:${data.phone}" style="color: #1e3a5f; text-decoration: none;">${data.phone}</a>
        </td>
      </tr>
    </table>
    ${data.message ? `
    <h3 style="color: #1e3a5f; margin-top: 20px;">Mensaje:</h3>
    <div style="background-color: white; padding: 20px; border-left: 4px solid #ff6b35; border-radius: 4px; white-space: pre-wrap; line-height: 1.8;">
${data.message}
    </div>
    ` : ''}
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #dee2e6; font-size: 12px; color: #666; text-align: center;">
      <p style="margin: 5px 0;">Enviado desde el formulario "Solicite su Reunión de 15 Minutos" (sección ${labels.section}).</p>
      <p style="margin: 5px 0;">Fecha: ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

function createMeetingRequestText(data: MeetingRequestData): string {
  const labels = MEETING_SOURCE_LABELS[data.source]
  return `
Solicitud de Reunión de 15 Minutos - ${labels.section}
New Moon Psicología en Evolución S.A.S.

${labels.organizationLabel}: ${data.organizationName}
Nombre del contacto: ${data.name}
${data.position ? `Cargo: ${data.position}\n` : ''}Email: ${data.email}
Teléfono: ${data.phone}
${data.message ? `\nMensaje:\n${data.message}\n` : ''}
---
Enviado desde el formulario ${labels.section}.
Fecha: ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}
  `.trim()
}

export async function sendMeetingRequestEmail(data: MeetingRequestData): Promise<void> {
  const config = getEmailConfig()
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpSecure,
    requireTLS: config.smtpPort === 587,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const mailOptions = {
    from: `"${data.name} (${data.organizationName})" <${config.smtpUser}>`,
    replyTo: data.email,
    to: CONTACT_INFO.email,
    subject: `Solicitud de Reunión - ${data.organizationName}`,
    text: createMeetingRequestText(data),
    html: createMeetingRequestHTML(data),
  }

  await transporter.sendMail(mailOptions)
}
