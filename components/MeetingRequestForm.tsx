'use client'

import { useState, FormEvent } from 'react'
import type { MeetingRequestSource } from '../lib/email'

const ORGANIZATION_PLACEHOLDERS: Record<MeetingRequestSource, string> = {
  colegios: 'Nombre del Colegio',
  empresas: 'Nombre de la Empresa',
}

interface FormData {
  organizationName: string
  name: string
  position: string
  email: string
  phone: string
  message: string
}

interface MeetingRequestFormProps {
  source: MeetingRequestSource
}

export default function MeetingRequestForm({ source }: MeetingRequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    name: '',
    position: '',
    email: '',
    phone: '',
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
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/meeting-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          organizationName: formData.organizationName,
          name: formData.name,
          position: formData.position || undefined,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || undefined,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Solicitud enviada correctamente. Nos pondremos en contacto con usted para agendar la reunión.',
        })
        setFormData({
          organizationName: '',
          name: '',
          position: '',
          email: '',
          phone: '',
          message: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Error al enviar. Por favor intente de nuevo.',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor intente de nuevo.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const organizationPlaceholder = ORGANIZATION_PLACEHOLDERS[source]

  return (
    <form onSubmit={handleSubmit} className="appointment-form ftco-animate">
      <div className="d-md-flex">
        <div className="form-group">
          <input
            type="text"
            name="organizationName"
            className="form-control"
            placeholder={organizationPlaceholder}
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group ml-md-4">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Su Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="d-md-flex">
        <div className="form-group">
          <input
            type="text"
            name="position"
            className="form-control"
            placeholder="Cargo"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <div className="form-group ml-md-4">
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
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
        <textarea
          name="message"
          cols={30}
          rows={3}
          className="form-control"
          placeholder="Mensaje (opcional)"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      {submitStatus.type && (
        <div
          className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}
          role="alert"
          style={{ borderRadius: 8, marginBottom: '1rem' }}
        >
          {submitStatus.message}
        </div>
      )}
      <div className="form-group">
        <input
          type="submit"
          value={isSubmitting ? 'Enviando...' : 'Solicitar Reunión'}
          className="btn btn-secondary py-3 px-5"
          style={{ width: '100%' }}
          disabled={isSubmitting}
        />
      </div>
    </form>
  )
}
