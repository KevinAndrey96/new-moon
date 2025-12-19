import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - New Moon Psicología en Evolución',
  description: 'Contacta con New Moon Psicología en Evolución. Ubicados en Bogotá, ofrecemos servicios presenciales y virtuales a nivel nacional.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread">Contacto</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="/">Inicio <i className="ion-ios-arrow-forward"></i></Link>
                </span>
                <span>Contacto <i className="ion-ios-arrow-forward"></i></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Dirección</h3>
                <p>
                  <a href="https://maps.app.goo.gl/Sd3o52KcQo84pDrb6" target="_blank" rel="noopener noreferrer">
                    Calle 103 # 14a-53, Of. 303<br />
                    Edificio Bogotá Business Center<br />
                    Bogotá
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Teléfono</h3>
                <p><a href="tel:+573112940918">+57 311 294 0918</a></p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Email</h3>
                <p><a href="mailto:info@nmpsicologiaenevolucion.com">info@nmpsicologiaenevolucion.com</a></p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Horario</h3>
                <p>Lunes - Viernes<br />9:00 AM - 6:00 PM<br />Presencial y Virtual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
        <div className="container">
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <ContactForm />
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

