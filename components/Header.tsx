import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
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
                    <a href="https://maps.app.goo.gl/Sd3o52KcQo84pDrb6" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.7)' }}>
                      Calle 103 # 14a-53, Of. 303, Bogotá
                    </a>
                  </span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon bg-secondary mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <span className="text">
                    <a href="mailto:info@nmpsicologiaenevolucion.com" style={{ color: 'rgba(255,255,255,.7)' }}>
                      info@nmpsicologiaenevolucion.com
                    </a>
                  </span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon bg-tertiary mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-phone2"></span>
                  </div>
                  <span className="text">
                    <a href="tel:+573112940918" style={{ color: 'rgba(255,255,255,.7)' }}>
                      +57 311 294 0918
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
          <Link className="navbar-brand" href="/">
            <Image 
              src="/images/logo.png" 
              alt="New Moon Psicología en Evolución" 
              width={200} 
              height={80}
              style={{ height: '80px', maxWidth: '200px' }}
            />
          </Link>
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
              <li className="nav-item active">
                <Link href="/" className="nav-link pl-0">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link href="/colegios" className="nav-link">Para Colegios</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

