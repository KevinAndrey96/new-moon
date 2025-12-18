'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

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
      // Send data to our API route
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
          message: 'Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.',
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
          message: data.error || 'Error al enviar el mensaje. Por favor intenta de nuevo.',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor intenta de nuevo más tarde.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="phone"
          className="form-control"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="subject"
          className="form-control"
          placeholder="Asunto"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          cols={30}
          rows={7}
          className="form-control"
          placeholder="Mensaje"
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
        >
          {submitStatus.message}
        </div>
      )}
      <div className="form-group">
        <input
          type="submit"
          value={isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          className="btn btn-primary py-3 px-5"
          disabled={isSubmitting}
        />
      </div>
    </form>
  )
}

