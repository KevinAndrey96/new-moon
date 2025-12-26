import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros - Modelo Integral de Servicios en Bienestar, Neuropsicología y Salud Mental | New Moon',
  description: 'New Moon Psicología en Evolución S.A.S. - Organización dedicada al diseño y prestación de servicios integrales en bienestar, neuropsicología y salud mental, orientados al desarrollo humano.',
}

export default function NosotrosPage() {
  return (
    <>
      <Header />
      
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Nosotros
              </h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="/">Inicio <i className="ion-ios-arrow-forward"></i></Link>
                </span>
                <span>Nosotros <i className="ion-ios-arrow-forward"></i></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftc-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
              <div className="text px-4 ftco-animate">
                <h2 className="mb-4">Quiénes <span>Somos</span></h2>
                <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                  <strong>New Moon Psicología en Evolución S.A.S.</strong> es una organización dedicada al diseño y prestación de servicios integrales en bienestar, neuropsicología y salud mental, orientados al desarrollo humano, la prevención, la intervención especializada y el acompañamiento interdisciplinar a lo largo del ciclo vital.
                </p>
                <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                  Nuestro modelo de atención se basa en una comprensión integral del ser humano, integrando dimensiones cognitivas, emocionales, sociales y contextuales, promoviendo procesos de mejora continua y bienestar sostenible.
                </p>
                <p style={{ marginTop: '2rem' }}>
                  <Link href="/contact" className="btn btn-secondary px-4 py-3">Contáctanos</Link>
                </p>
              </div>
            </div>
            <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
              <h2 className="mb-4">Propuesta de <span>Valor</span></h2>
              <p style={{ textAlign: 'justify', lineHeight: '1.8', marginBottom: '2rem' }}>
                New Moon ofrece un modelo integral de atención que articula evaluación especializada, intervención terapéutica y programas institucionales, fundamentados en buenas prácticas profesionales, enfoques basados en evidencia y criterios éticos, con el fin de generar impactos positivos y sostenibles en el bienestar cognitivo, emocional, conductual y funcional de individuos, familias, instituciones educativas y empresas.
              </p>
              
              <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #ff6b35 100%)', padding: '30px', borderRadius: '15px', color: 'white', marginTop: '2rem' }}>
                <h3 className="mb-3" style={{ color: 'white' }}>Modelo de Atención Integral</h3>
                <p style={{ color: 'white', lineHeight: '1.8', marginBottom: 0 }}>
                  El modelo de atención de New Moon prioriza la evaluación rigurosa, la intervención personalizada, el seguimiento continuo y la articulación con los entornos familiares, educativos y organizacionales, promoviendo procesos de mejora continua y bienestar sostenible.
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
              <p style={{ fontSize: '18px' }}>Servicios especializados fundamentados en buenas prácticas profesionales y enfoques basados en evidencia</p>
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
                    Servicios orientados a la identificación integral de fortalezas, dificultades y necesidades cognitivas, emocionales y conductuales, mediante la aplicación de baterías neuropsicológicas e instrumentos clínicos validados.
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
                    Intervenciones terapéuticas y programas de rehabilitación diseñados de manera personalizada, orientados a la estimulación y recuperación de funciones cognitivas, el fortalecimiento emocional y la regulación conductual.
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
                    Programas dirigidos a colegios, universidades y empresas, enfocados en promoción del bienestar, prevención de riesgos psicosociales y cumplimiento de lineamientos normativos.
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
                    Servicios complementarios orientados al bienestar integral, concebidos como apoyo a los procesos terapéuticos y preventivos, desarrollados bajo criterios de responsabilidad profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-10 text-center heading-section ftco-animate">
              <h2 className="mb-4">Enfoque por <span>Públicos</span></h2>
              <p style={{ fontSize: '18px' }}>Servicios especializados adaptados a las necesidades de cada público</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#1e3a5f', borderRadius: '50%' }}>
                  <span className="flaticon-kids" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', color: '#1e3a5f' }}>Familias</h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Acompañamiento integral orientado al fortalecimiento de las dinámicas familiares, el desarrollo emocional y cognitivo de niños, adolescentes y adultos, y la promoción de entornos saludables de convivencia y aprendizaje.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#ff6b35', borderRadius: '50%' }}>
                  <span className="flaticon-education" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', color: '#1e3a5f' }}>Colegios y Universidades</h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Servicios de apoyo psicoeducativo, evaluación, intervención y capacitación, orientados a favorecer la inclusión, el desempeño académico, la convivencia escolar y la implementación de estrategias de acompañamiento pedagógico.
                  </p>
                  <p style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <Link href="/colegios" className="btn btn-primary btn-sm">Conoce más</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#2ecc71', borderRadius: '50%' }}>
                  <span className="flaticon-jigsaw" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', color: '#1e3a5f' }}>Empresas</h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Programas de bienestar laboral, evaluación e intervención en factores de riesgo psicosocial, fortalecimiento del desempeño cognitivo y emocional, y acompañamiento en el cumplimiento de lineamientos de seguridad y salud en el trabajo.
                  </p>
                  <p style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <Link href="/empresas" className="btn btn-primary btn-sm">Conoce más</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 wrap-about py-5 pr-md-4 ftco-animate">
              <h2 className="mb-4">Resultados Esperados e <span>Impacto</span></h2>
              <p style={{ textAlign: 'justify', lineHeight: '1.8', marginBottom: '2rem' }}>
                Los servicios de New Moon están orientados a generar impactos medibles y sostenibles en el bienestar integral de las personas y las organizaciones.
              </p>
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="services-2 d-flex mb-4">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', background: '#1e3a5f', borderRadius: '50%', flexShrink: 0 }}>
                      <span className="flaticon-reading" style={{ color: 'white', fontSize: '24px' }}></span>
                    </div>
                    <div className="text">
                      <h4 style={{ marginBottom: '10px' }}>Mejoras en el Desempeño Cognitivo y Emocional</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Fortalecimiento de habilidades cognitivas, regulación emocional y desarrollo de competencias socioemocionales.
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
                      <h4 style={{ marginBottom: '10px' }}>Adaptación Escolar y Laboral</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Mejora en la adaptación a contextos escolares y laborales, promoviendo entornos inclusivos y saludables.
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
                      <h4 style={{ marginBottom: '10px' }}>Reducción de Factores de Riesgo Psicosocial</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Prevención e intervención temprana en factores de riesgo que afectan el bienestar y la salud mental.
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
                      <h4 style={{ marginBottom: '10px' }}>Promoción del Bienestar Integral</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Desarrollo de estrategias que promueven el bienestar integral en los diferentes contextos de intervención.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-last wrap-about py-5 wrap-about bg-light">
              <div className="text px-4 ftco-animate">
                <h2 className="mb-4">Marco Ético, Profesional y <span>Normativo</span></h2>
                <p style={{ textAlign: 'justify', lineHeight: '1.8', marginBottom: '2rem' }}>
                  New Moon desarrolla sus servicios bajo principios éticos, responsabilidad profesional y respeto por la dignidad humana.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Buenas Prácticas Profesionales:</strong>
                    <span style={{ display: 'block' }}>Nuestro modelo de atención se alinea con buenas prácticas en salud mental, criterios de calidad en educación y lineamientos de seguridad y salud en el trabajo.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Procesos Responsables:</strong>
                    <span style={{ display: 'block' }}>Garantizamos procesos responsables, confidenciales y orientados al bienestar en todas nuestras intervenciones.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Enfoque Basado en Evidencia:</strong>
                    <span style={{ display: 'block' }}>Todas nuestras intervenciones están fundamentadas en evidencia científica y criterios éticos profesionales.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Respeto por la Dignidad Humana:</strong>
                    <span style={{ display: 'block' }}>Cada intervención se desarrolla con respeto, confidencialidad y compromiso con el bienestar de las personas.</span>
                  </li>
                </ul>
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
                Construyamos juntos procesos de bienestar integral
              </h2>
              <p className="mb-0" style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', fontSize: '18px' }}>
                New Moon Psicología en Evolución S.A.S. invita a familias, instituciones educativas, empresas y aliados estratégicos a construir conjuntamente procesos de bienestar integral, desarrollo humano y salud mental sostenible, a través de un modelo de atención profesional, cercano y comprometido con la transformación positiva de los entornos.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <p className="mb-0">
                <Link href="/contact" className="btn btn-secondary px-5 py-4" style={{ fontSize: '18px' }}>
                  Contáctanos
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

