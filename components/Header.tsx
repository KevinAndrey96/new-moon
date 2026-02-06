'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { CONTACT_INFO, ROUTES } from '../lib/constants'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(path)
  }

  const navLinks = [
    { href: ROUTES.home, label: 'Inicio', pl0: true },
    { href: ROUTES.nosotros, label: 'Nosotros', pl0: false },
    { href: ROUTES.colegios, label: 'Para Colegios', pl0: false },
    { href: ROUTES.empresas, label: 'Para Empresas', pl0: false },
    { href: ROUTES.contact, label: 'Contacto', pl0: false },
  ]

  return (
    <>
      <div className="py-2 bg-primary">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md-5 pr-4 d-flex topper align-items-center">
                  <div className="icon bg-fifth mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-map"></span>
                  </div>
                  <span className="text">
                    <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.7)' }}>
                      {CONTACT_INFO.address}
                    </a>
                  </span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon bg-secondary mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <span className="text">
                    <a href={CONTACT_INFO.emailLink} style={{ color: 'rgba(255,255,255,.7)' }}>
                      {CONTACT_INFO.email}
                    </a>
                  </span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon bg-tertiary mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-phone2"></span>
                  </div>
                  <span className="text">
                    <a href={CONTACT_INFO.phoneLink} style={{ color: 'rgba(255,255,255,.7)' }}>
                      {CONTACT_INFO.phone}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
        <div className="container d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <Image 
              src="/images/logo.png" 
              alt="New Moon Psicología en Evolución" 
              width={200} 
              height={80}
              style={{ height: '80px', maxWidth: '200px' }}
            />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#ftco-nav" 
            aria-controls="ftco-nav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              {navLinks.map(({ href, label, pl0 }) => (
                <li key={href} className={`nav-item ${isActive(href) ? 'active' : ''}`}>
                  <a href={href} className={`nav-link ${pl0 ? 'pl-0' : ''}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

