import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelo Integral de Bienestar y Salud Mental Laboral - New Moon Psicología en Evolución',
  description: 'Programas orientados a la promoción del bienestar laboral, prevención del riesgo psicosocial y fortalecimiento del desempeño cognitivo y emocional de los colaboradores.',
}

export default function EmpresasPage() {
  return (
    <>
      <Header />
      
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Modelo Integral de Bienestar y Salud Mental Laboral
              </h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="/">Inicio <i className="ion-ios-arrow-forward"></i></Link>
                </span>
                <span>Para Empresas <i className="ion-ios-arrow-forward"></i></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftc-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wrap-about py-5 pr-md-4 ftco-animate">
              <h2 className="mb-4" style={{ textAlign: 'center' }}>
                Modelo Integral de Atención en <span style={{ color: '#ff6b35' }}>Bienestar y Salud Mental</span>
              </h2>
              <p style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
                <strong>New Moon Psicología en Evolución S.A.S.</strong> ofrece un modelo integral de atención en bienestar, neuropsicología y salud mental, orientado al acompañamiento institucional y al desarrollo humano de su organización.
              </p>
              
              <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #ff6b35 100%)', padding: '40px', borderRadius: '15px', color: 'white', marginBottom: '30px' }}>
                <h3 className="mb-4" style={{ color: 'white', textAlign: 'center' }}>
                  Enfoque del <span style={{ fontSize: '1.2em' }}>Servicio</span>
                </h3>
                <p style={{ textAlign: 'center', color: 'white', fontSize: '18px', marginBottom: 0 }}>
                  Programas orientados a la promoción del bienestar laboral, la prevención del riesgo psicosocial y el fortalecimiento del desempeño cognitivo y emocional de los colaboradores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-10 text-center heading-section ftco-animate">
              <h2 className="mb-4">Líneas de <span>Servicio</span></h2>
              <p style={{ fontSize: '18px' }}>Servicios especializados para el bienestar integral de su organización</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#1e3a5f', borderRadius: '50%' }}>
                  <span className="flaticon-reading" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', minHeight: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Evaluación y Diagnóstico Especializado
                  </h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Identificación temprana de factores de riesgo psicosocial, evaluación del desempeño cognitivo y diagnóstico especializado para el bienestar de sus colaboradores.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#ff6b35', borderRadius: '50%' }}>
                  <span className="flaticon-teacher" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', minHeight: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Intervención y Rehabilitación
                  </h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Programas de intervención terapéutica y rehabilitación cognitiva personalizados para mejorar el bienestar emocional y el desempeño laboral de su equipo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#2ecc71', borderRadius: '50%' }}>
                  <span className="flaticon-diploma" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', minHeight: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Programas Institucionales
                  </h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Talleres, capacitaciones y programas diseñados específicamente para fortalecer el clima organizacional y promover el bienestar integral de su empresa.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#3498db', borderRadius: '50%' }}>
                  <span className="flaticon-education" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', minHeight: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Servicios Complementarios de Bienestar
                  </h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Consultorías, asesorías y servicios complementarios para el desarrollo de estrategias de bienestar organizacional y salud mental laboral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 wrap-about py-5 pr-md-4 ftco-animate">
              <h2 className="mb-4">Beneficios e <span>Impacto</span></h2>
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="services-2 d-flex mb-4">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', background: '#1e3a5f', borderRadius: '50%', flexShrink: 0 }}>
                      <span className="flaticon-reading" style={{ color: 'white', fontSize: '24px' }}></span>
                    </div>
                    <div className="text">
                      <h4 style={{ marginBottom: '10px' }}>Reducción de Factores de Riesgo Psicosocial</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Identificación y abordaje temprano de factores de riesgo que afectan la salud mental y el bienestar de sus colaboradores, cumpliendo con normativas de SST.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="services-2 d-flex mb-4">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', background: '#ff6b35', borderRadius: '50%', flexShrink: 0 }}>
                      <span className="flaticon-teacher" style={{ color: 'white', fontSize: '24px' }}></span>
                    </div>
                    <div className="text">
                      <h4 style={{ marginBottom: '10px' }}>Mejora del Bienestar Emocional y la Productividad</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Programas que fortalecen el bienestar emocional de los colaboradores, mejorando su desempeño, productividad y satisfacción laboral.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="services-2 d-flex mb-4">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', background: '#2ecc71', borderRadius: '50%', flexShrink: 0 }}>
                      <span className="flaticon-jigsaw" style={{ color: 'white', fontSize: '24px' }}></span>
                    </div>
                    <div className="text">
                      <h4 style={{ marginBottom: '10px' }}>Apoyo al Cumplimiento Normativo en SST</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Acompañamiento para el cumplimiento de normativas de Seguridad y Salud en el Trabajo relacionadas con factores de riesgo psicosocial y bienestar laboral.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="services-2 d-flex mb-4">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', background: '#3498db', borderRadius: '50%', flexShrink: 0 }}>
                      <span className="flaticon-education" style={{ color: 'white', fontSize: '24px' }}></span>
                    </div>
                    <div className="text">
                      <h4 style={{ marginBottom: '10px' }}>Fortalecimiento del Clima Organizacional</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Estrategias que mejoran la comunicación, el trabajo en equipo y el ambiente laboral, creando organizaciones más saludables y productivas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-last wrap-about py-5 wrap-about bg-light">
              <div className="text px-4 ftco-animate">
                <h2 className="mb-4">Marco Ético y <span>Normativo</span></h2>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Intervenciones Responsables:</strong>
                    <span style={{ display: 'block' }}>Todas nuestras intervenciones están basadas en buenas prácticas profesionales y evidencia científica.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Alineación Normativa:</strong>
                    <span style={{ display: 'block' }}>Nuestros servicios están alineados con lineamientos de salud mental, educación y bienestar institucional vigentes.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Confidencialidad y Respeto:</strong>
                    <span style={{ display: 'block' }}>Garantizamos la confidencialidad, el respeto y un acompañamiento profesional en todos nuestros procesos.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Enfoque Integral:</strong>
                    <span style={{ display: 'block' }}>Abordamos el bienestar desde una perspectiva integral que considera aspectos cognitivos, emocionales y organizacionales.</span>
                  </li>
                </ul>
                <div className="mt-4" style={{ textAlign: 'center', paddingTop: '20px' }}>
                  <p style={{ fontSize: '18px', color: '#1e3a5f', fontWeight: 'bold', marginBottom: 0 }}>
                    Comprometidos con el <span style={{ color: '#ff6b35' }}>bienestar integral</span> de su organización
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-intro" style={{ backgroundImage: "url('/images/bg_3.jpg')" }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                ¿Listo para construir una organización saludable y productiva?
              </h2>
              <p className="mb-0" style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', fontSize: '18px' }}>
                Acompañamos a las empresas en la construcción de organizaciones saludables, productivas y comprometidas con el bienestar de su talento humano. Solicitamos una reunión de 15 minutos para conocer sus necesidades y diseñar un programa personalizado.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <p className="mb-0">
                <Link href="/contact" className="btn btn-secondary px-5 py-4" style={{ fontSize: '18px' }}>
                  Agendar Reunión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-consult ftco-no-pt ftco-no-pb" style={{ backgroundImage: "url('/images/bg_5.jpg')" }} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6 py-5 px-md-5 bg-primary">
              <div className="heading-section heading-section-white ftco-animate mb-5">
                <h2 className="mb-4">Solicite su Reunión de 15 Minutos</h2>
                <p>Complete el formulario y nos pondremos en contacto con usted para agendar una reunión personalizada donde explicaremos todos los detalles de nuestro modelo integral de bienestar y salud mental laboral.</p>
              </div>
              <form action="#" className="appointment-form ftco-animate">
                <div className="d-md-flex">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre de la Empresa" required />
                  </div>
                  <div className="form-group ml-md-4">
                    <input type="text" className="form-control" placeholder="Su Nombre" />
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Cargo" />
                  </div>
                  <div className="form-group ml-md-4">
                    <input type="text" className="form-control" placeholder="Teléfono" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <textarea name="" id="" cols={30} rows={3} className="form-control" placeholder="Mensaje (opcional)"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Solicitar Reunión" className="btn btn-secondary py-3 px-5" style={{ width: '100%' }} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

