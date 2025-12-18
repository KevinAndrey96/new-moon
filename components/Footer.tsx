import Link from 'next/link'

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
                      <a href="https://maps.app.goo.gl/Sd3o52KcQo84pDrb6" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.7)' }}>
                        Calle 103 # 14a-53, Of. 303, Bogotá
                      </a>
                    </span>
                  </li>
                  <li>
                    <a href="tel:+573112940918">
                      <span className="icon icon-phone"></span>
                      <span className="text">+57 311 294 0918</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@nmpsicologiaenevolucion.com">
                      <span className="icon icon-envelope"></span>
                      <span className="text">info@nmpsicologiaenevolucion.com</span>
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
                  <Link href="/">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/colegios">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Para Colegios
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
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

