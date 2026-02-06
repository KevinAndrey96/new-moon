'use client'

import { useState, FormEvent } from 'react'
import { FormData, SubmitStatus } from '../lib/types'
import { COLORS, BORDER_RADIUS } from '../lib/constants'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Send data to Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado exitosamente! 🎉 Nos pondremos en contacto contigo en un plazo máximo de 24 horas. ¡Gracias por confiar en nosotros! 💙',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Oops, hubo un problema al enviar tu mensaje. Por favor intenta de nuevo o contáctanos directamente por teléfono. 😊',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor verifica tu internet e intenta de nuevo, o contáctanos directamente por teléfono. 📞',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>
          Tu nombre <span style={{ color: COLORS.danger }}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="¿Cómo te gusta que te llamemos? 👋"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>
          Tu email <span style={{ color: COLORS.danger }}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="tu@email.com 📧"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>
          Teléfono (opcional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-control"
          placeholder="+57 300 000 0000 📱"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>
          Asunto (opcional)
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="form-control"
          placeholder="Ej: Consulta sobre servicios, Agendar cita, etc. 💭"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>
          Tu mensaje <span style={{ color: COLORS.danger }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          cols={30}
          rows={7}
          className="form-control"
          placeholder="Cuéntanos en qué podemos ayudarte. Estamos aquí para escucharte... 💙"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {submitStatus.type && (
        <div
          className={`alert ${
            submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'
          }`}
          role="alert"
          style={{ borderRadius: BORDER_RADIUS.small, marginBottom: '1rem' }}
        >
          {submitStatus.type === 'success' && '✅ '}
          {submitStatus.type === 'error' && '⚠️ '}
          {submitStatus.message}
        </div>
      )}
      <div className="form-group">
        <input
          type="submit"
          value={isSubmitting ? 'Enviando... ⏳' : 'Enviar Mensaje ✉️'}
          className="btn btn-primary py-3 px-5"
          disabled={isSubmitting}
          style={{ borderRadius: BORDER_RADIUS.small, fontWeight: '600', fontSize: '1rem' }}
        />
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: COLORS.text, textAlign: 'center' }}>
        🔒 Tu información está segura con nosotros. Respetamos tu privacidad.
      </p>
    </form>
  )
}

