import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ROUTES } from '../../lib/constants'

export const metadata: Metadata = {
  title: 'Email Marketing - New Moon',
  description: 'Previsualizador online de plantillas de correo para comunicaciones de marketing.',
}

const EMAIL_TEMPLATES = [
  {
    slug: 'email_schools',
    name: 'Marketing colegios',
    file: 'email_schools.html',
    description: 'Plantilla HTML para envío de marketing a colegios.',
  },
] as const

export default function EmailsIndexPage() {
  return (
    <>
      <Header />
      <Hero
        title="Email Marketing"
        breadcrumbs={[
          { label: 'Inicio', href: ROUTES.home },
          { label: 'Email Marketing', href: '/emails' },
        ]}
      />
      <section className="ftco-section">
        <div className="container">
          <p className="mb-4 text-muted">
            Previsualizador online de las plantillas de correo usadas en comunicaciones y campañas de marketing.
          </p>
          <ul className="list-unstyled">
            {EMAIL_TEMPLATES.map((tpl) => (
              <li key={tpl.slug} className="mb-3 p-3 border rounded">
                <strong>{tpl.name}</strong>
                <p className="mb-2 small text-muted">{tpl.description}</p>
                <Link
                  href={`/emails/${tpl.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Ver previsualización →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  )
}
