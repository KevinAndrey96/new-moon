import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'
import GoogleMap from '../../components/GoogleMap'
import ContactInfoCard from '../../components/ContactInfoCard'
import Hero from '../../components/Hero'
import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO, ROUTES, COLORS } from '../../lib/constants'
import { ContactInfo } from '../../lib/types'

export const metadata: Metadata = {
  title: 'Contacto - New Moon Psicología en Evolución',
  description: 'Contacta con New Moon Psicología en Evolución. Ubicados en Bogotá, ofrecemos servicios presenciales y virtuales a nivel nacional.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <Hero
        title="Contacto"
        breadcrumbs={[
          { label: 'Inicio', href: ROUTES.home },
          { label: 'Contacto', href: ROUTES.contact },
        ]}
      />

      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-10 text-center heading-section ftco-animate">
              <h2 className="mb-4">¡Estamos aquí para ti! 💙</h2>
              <p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Tu bienestar es nuestra prioridad. No dudes en contactarnos, estamos listos para acompañarte en tu proceso de evolución personal. 🌙✨
              </p>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
                Respondemos a todos los mensajes en un plazo máximo de 24 horas. Tu consulta es importante para nosotros. 😊
              </p>
            </div>
          </div>
          
          <div className="row mb-5">
            <div className="col-md-4 mb-4">
              <div className="bg-white p-4 text-center" style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', height: '100%' }}>
                <div className="mb-3">
                  <span style={{ fontSize: '48px' }}>🎯</span>
                </div>
                <h4 style={{ color: '#1e3a5f', marginBottom: '1rem' }}>Misión</h4>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  Brindar servicios de salud mental de alta calidad que promuevan el bienestar integral de nuestros pacientes, utilizando estrategias terapéuticas innovadoras.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="bg-white p-4 text-center" style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', height: '100%' }}>
                <div className="mb-3">
                  <span style={{ fontSize: '48px' }}>💡</span>
                </div>
                <h4 style={{ color: '#1e3a5f', marginBottom: '1rem' }}>Enfoque</h4>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  Evaluación, diagnóstico e intervención personalizada para niños, adolescentes, adultos, familias e instituciones educativas.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="bg-white p-4 text-center" style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', height: '100%' }}>
                <div className="mb-3">
                  <span style={{ fontSize: '48px' }}>🤝</span>
                </div>
                <h4 style={{ color: '#1e3a5f', marginBottom: '1rem' }}>Compromiso</h4>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  Acompañamiento cercano y profesional en cada paso de tu proceso de crecimiento y bienestar emocional.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex mb-5 contact-info">
            <ContactInfoCard
              contact={{
                type: 'address',
                label: 'Dirección',
                value: CONTACT_INFO.addressFull,
                link: CONTACT_INFO.mapsLink,
                icon: '📍',
                smallText: '¡Visítanos cuando quieras! 🏢',
              }}
            />
            <ContactInfoCard
              contact={{
                type: 'phone',
                label: 'Teléfono',
                value: CONTACT_INFO.phone,
                link: CONTACT_INFO.phoneLink,
                icon: '📞',
                smallText: 'Llamadas y WhatsApp disponibles 📱',
              }}
            />
            <ContactInfoCard
              contact={{
                type: 'email',
                label: 'Email',
                value: CONTACT_INFO.email,
                link: CONTACT_INFO.emailLink,
                icon: '✉️',
                smallText: 'Escríbenos cuando gustes 📧',
              }}
            />
            <ContactInfoCard
              contact={{
                type: 'schedule',
                label: 'Horario',
                value: CONTACT_INFO.schedule,
                icon: '🕐',
                smallText: 'Flexibilidad en modalidades 🌐',
              }}
            />
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
        <div className="container">
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <div className="mb-4">
                <h2 className="mb-3">Envíanos un mensaje 💬</h2>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  Completa el formulario y cuéntanos cómo podemos ayudarte. Ya sea para agendar una cita, resolver dudas sobre nuestros servicios, o simplemente conocernos mejor, estamos aquí para escucharte. 🌟
                </p>
                <p style={{ color: '#666', fontSize: '0.95rem', fontStyle: 'italic' }}>
                  Todos los campos marcados con * son obligatorios.
                </p>
              </div>
              <ContactForm />
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

