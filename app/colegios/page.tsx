import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alianza Estratégica para Colegios - New Moon Psicología en Evolución',
  description: 'Alianza estratégica exclusiva de neuropsicología de referencia para colegios. Costo operacional cero. Soporte especializado para su institución educativa.',
}

export default function ColegiosPage() {
  return (
    <>
      <Header />
      
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Alianza Estratégica para Colegios
              </h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="/">Inicio <i className="ion-ios-arrow-forward"></i></Link>
                </span>
                <span>Para Colegios <i className="ion-ios-arrow-forward"></i></span>
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
                Neuropsicología de Referencia: <span style={{ color: '#ff6b35' }}>Costo Operacional Cero</span>
              </h2>
              <p style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
                Su institución enfrenta diariamente el reto de los trastornos de neurodesarrollo como{' '}
                <strong>discapacidad intelectual, autismo, problemas de atención, dificultades de aprendizaje, dificultades de lenguaje</strong>{' '}
                y el impacto del comportamiento en el aula. Estos casos detienen el avance académico y agotan a su equipo docente.
              </p>
              
              <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #ff6b35 100%)', padding: '40px', borderRadius: '15px', color: 'white', marginBottom: 0 }}>
                <h3 className="mb-4" style={{ color: 'white', textAlign: 'center' }}>
                  New Moon ofrece una <span style={{ fontSize: '1.2em' }}>Alianza Estratégica INMEDIATA</span> para resolver esta complejidad
                </h3>
                <p style={{ textAlign: 'center', color: 'white', fontSize: '18px', marginBottom: 0 }}>
                  Como Especialistas en Neuropsicología, garantizamos a su colegio una solución de alto valor a cambio de una referencia exclusiva.
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
              <h2 className="mb-4">Su Nuevo <span>Activo Sin Costo de Nómina</span></h2>
              <p style={{ fontSize: '18px' }}>Beneficios concretos que transformarán la gestión de su institución educativa</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#1e3a5f', borderRadius: '50%' }}>
                  <span className="flaticon-teacher" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', minHeight: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Estrategias Educativas Concretas
                  </h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Soporte directo a sus docentes para generar estrategias semi-personalizadas y saber cómo abordar las necesidades de{' '}
                    <strong>CADA ESTUDIANTE</strong>. Capacitación práctica que mejora el rendimiento académico y reduce la frustración del equipo docente.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#ff6b35', borderRadius: '50%' }}>
                  <span className="flaticon-reading" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', minHeight: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Profesionales de Referencia
                  </h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Su comunidad obtiene acceso rápido y especializado a{' '}
                    <strong>evaluación neuropsicológica e intervención terapéutica</strong> (costo asumido por las familias), eliminando la frustración de la EPS. Diagnósticos precisos y herramientas claras para docentes y familias.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ height: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '80px', height: '80px', background: '#2ecc71', borderRadius: '50%' }}>
                  <span className="flaticon-diploma" style={{ fontSize: '40px', color: 'white' }}></span>
                </div>
                <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-3" style={{ textAlign: 'center', minHeight: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Obsequio Premium
                  </h3>
                  <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>
                    Una <strong>Escuela de Padres GRATUITA</strong> sobre Funciones Ejecutivas, un beneficio que fideliza a su comunidad. Talleres especializados que fortalecen el rol de las familias y mejoran el acompañamiento en casa.
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
              <h2 className="mb-4">¿Qué Incluye la <span>Alianza?</span></h2>
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="services-2 d-flex mb-4">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', background: '#1e3a5f', borderRadius: '50%', flexShrink: 0 }}>
                      <span className="flaticon-reading" style={{ color: 'white', fontSize: '24px' }}></span>
                    </div>
                    <div className="text">
                      <h4 style={{ marginBottom: '10px' }}>Evaluación Neuropsicológica Integral</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Identificación temprana del origen de las dificultades académicas o conductuales de sus estudiantes, facilitando un abordaje educativo más preciso y personalizado.
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
                      <h4 style={{ marginBottom: '10px' }}>Capacitación a Docentes</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Talleres especializados que brindan estrategias prácticas y efectivas para el manejo en el aula de estudiantes con necesidades especiales, mejorando el rendimiento escolar y el bienestar emocional de los alumnos.
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
                      <h4 style={{ marginBottom: '10px' }}>Escuela de Padres Sin Costo</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Talleres gratuitos sobre Funciones Ejecutivas, neurodesarrollo, manejo de emociones y estrategias para fomentar la atención y concentración. Logística flexible: virtual o presencial, adaptándose al horario del colegio.
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
                      <h4 style={{ marginBottom: '10px' }}>Acceso Preferencial para Familias</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Los padres de los estudiantes del colegio tendrán acceso directo y preferencial a nuestros servicios de evaluación neuropsicológica y rehabilitación, con descuentos por la exclusividad del colegio referente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-last wrap-about py-5 wrap-about bg-light">
              <div className="text px-4 ftco-animate">
                <h2 className="mb-4">Beneficios para <span>Su Colegio</span></h2>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Diagnósticos Precisos:</strong>
                    <span style={{ display: 'block' }}>Identificación temprana de dificultades de aprendizaje y atención mediante evaluaciones especializadas.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Herramientas para Docentes:</strong>
                    <span style={{ display: 'block' }}>Socialización de informes y estrategias personalizadas para cada estudiante.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Apoyo para Familias:</strong>
                    <span style={{ display: 'block' }}>Orientación y acompañamiento que mejora el rendimiento académico de los estudiantes.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Mejora de Resultados:</strong>
                    <span style={{ display: 'block' }}>Mejoras significativas en el rendimiento escolar y el bienestar emocional de los alumnos.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Alcance Nacional:</strong>
                    <span style={{ display: 'block' }}>Gracias a la tecnología, continuidad del servicio incluso con cambios en las condiciones (virtualidad, vacaciones, etc.).</span>
                  </li>
                </ul>
                <div className="mt-4" style={{ textAlign: 'center', paddingTop: '20px' }}>
                  <p style={{ fontSize: '18px', color: '#1e3a5f', fontWeight: 'bold', marginBottom: 0 }}>
                    Su única inversión es la <span style={{ color: '#ff6b35' }}>referencia exclusiva</span>
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
                ¿Listo para transformar el apoyo a sus estudiantes?
              </h2>
              <p className="mb-0" style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', fontSize: '18px' }}>
                Si desea que su institución tenga acceso a este soporte especializado y avance en el rendimiento académico de sus estudiantes desde ahora, solicitamos una reunión de 15 minutos para concretar la alianza.
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

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-10 text-center heading-section ftco-animate">
              <h2 className="mb-4">Temas de la <span>Escuela de Padres</span></h2>
              <p style={{ fontSize: '18px' }}>Talleres especializados sin costo para su comunidad educativa</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #1e3a5f 0%, #3498db 100%)', borderRadius: '50%', fontSize: '35px' }}>
                  🔍
                </div>
                <h4 style={{ color: '#1e3a5f', marginBottom: '15px', textAlign: 'center' }}>Identificación Temprana</h4>
                <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>Dificultades de aprendizaje y atención: cómo reconocerlas y abordarlas desde casa y en el aula.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)', borderRadius: '50%', fontSize: '35px' }}>
                  ❤️
                </div>
                <h4 style={{ color: '#1e3a5f', marginBottom: '15px', textAlign: 'center' }}>Manejo de Emociones</h4>
                <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>Estrategias para manejar emociones y comportamientos desafiantes tanto en casa como en el aula.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)', borderRadius: '50%', fontSize: '35px' }}>
                  🎯
                </div>
                <h4 style={{ color: '#1e3a5f', marginBottom: '15px', textAlign: 'center' }}>Atención y Concentración</h4>
                <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>Estrategias prácticas para fomentar la atención y la concentración en niños y adolescentes.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #1e3a5f 0%, #5b7fa8 100%)', borderRadius: '50%', fontSize: '35px' }}>
                  🧠
                </div>
                <h4 style={{ color: '#1e3a5f', marginBottom: '15px', textAlign: 'center' }}>El Cerebro en el Aprendizaje</h4>
                <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>La importancia del cerebro en el aprendizaje: cómo apoyar a nuestros hijos desde la ciencia.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)', borderRadius: '50%', fontSize: '35px' }}>
                  📈
                </div>
                <h4 style={{ color: '#1e3a5f', marginBottom: '15px', textAlign: 'center' }}>Neurodesarrollo</h4>
                <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>Neurodesarrollo y sus etapas: lo que cada padre y docente debe saber para un acompañamiento efectivo.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate mb-4">
              <div className="bg-white p-4" style={{ borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="icon mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)', borderRadius: '50%', fontSize: '35px' }}>
                  📱
                </div>
                <h4 style={{ color: '#1e3a5f', marginBottom: '15px', textAlign: 'center' }}>Inmediatez Digital</h4>
                <p style={{ textAlign: 'justify', marginBottom: 0, flex: 1 }}>Cómo manejar el impacto de la tecnología y la inmediatez digital en el desarrollo de los niños.</p>
              </div>
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
                <p>Complete el formulario y nos pondremos en contacto con usted para agendar una reunión personalizada donde explicaremos todos los detalles de la alianza estratégica.</p>
              </div>
              <form action="#" className="appointment-form ftco-animate">
                <div className="d-md-flex">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre del Colegio" required />
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

