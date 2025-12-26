import Link from 'next/link'
import { CONTACT_INFO, ROUTES } from '../lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">¿Tienes Preguntas?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">
                      <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.7)' }}>
                        {CONTACT_INFO.address}
                      </a>
                    </span>
                  </li>
                  <li>
                    <a href={CONTACT_INFO.phoneLink}>
                      <span className="icon icon-phone"></span>
                      <span className="text">{CONTACT_INFO.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT_INFO.emailLink}>
                      <span className="icon icon-envelope"></span>
                      <span className="text">{CONTACT_INFO.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Enlaces</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href={ROUTES.home}>
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Inicio
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.nosotros}>
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Nosotros
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.colegios}>
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Para Colegios
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.empresas}>
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Para Empresas
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.contact}>
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate">
                  <a href="https://www.facebook.com/nmpsicologiaenevolucion" target="_blank" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.instagram.com/nmpsicologiaenevolucion" target="_blank" rel="noopener noreferrer">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="mailto:info@nmpsicologiaenevolucion.com">
                    <span className="icon-paper-plane"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{currentYear} New Moon Psicología en Evolución S.A.S. | Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

