import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MeetingRequestForm from '../../components/MeetingRequestForm'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelo Integral de Acompañamiento Psicoeducativo y Bienestar Escolar - New Moon',
  description: 'Modelo integral de atención en bienestar, neuropsicología y salud mental para colegios y universidades. Acompañamiento psicoeducativo orientado a la inclusión, bienestar emocional y convivencia escolar.',
}

export default function ColegiosPage() {
  return (
    <>
      <Header />
      
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_2.jpg')", minHeight: '300px', position: 'relative', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)' }}></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Modelo Integral de Acompañamiento Psicoeducativo y Bienestar Escolar
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
                Modelo Integral de Atención en <span style={{ color: '#ff6b35' }}>Bienestar y Salud Mental</span>
              </h2>
              <p style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
                <strong>New Moon Psicología en Evolución S.A.S.</strong> ofrece un modelo integral de atención en bienestar, neuropsicología y salud mental, orientado al acompañamiento institucional y al desarrollo humano de su institución educativa.
              </p>
              
              <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #ff6b35 100%)', padding: '40px', borderRadius: '15px', color: 'white', marginBottom: '30px' }}>
                <h3 className="mb-4" style={{ color: 'white', textAlign: 'center' }}>
                  Enfoque del <span style={{ fontSize: '1.2em' }}>Servicio</span>
                </h3>
                <p style={{ textAlign: 'center', color: 'white', fontSize: '18px', marginBottom: 0 }}>
                  Acompañamiento psicoeducativo orientado a la inclusión, el bienestar emocional, el desempeño académico y la convivencia escolar, articulado con familias y docentes.
                </p>
              </div>

              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', marginBottom: 0 }}>
                <h3 className="mb-3" style={{ color: '#1e3a5f', textAlign: 'center' }}>
                  Neuropsicología de Referencia: <span style={{ color: '#ff6b35' }}>Costo Operacional Cero</span>
                </h3>
                <p style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.8', marginBottom: 0 }}>
                  Su institución enfrenta diariamente el reto de los trastornos de neurodesarrollo como{' '}
                  <strong>discapacidad intelectual, autismo, problemas de atención, dificultades de aprendizaje, dificultades de lenguaje</strong>{' '}
                  y el impacto del comportamiento en el aula. New Moon ofrece una <strong>Alianza Estratégica INMEDIATA</strong> para resolver esta complejidad, garantizando a su colegio una solución de alto valor a cambio de una referencia exclusiva.
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
                      <h4 style={{ marginBottom: '10px' }}>Servicios Complementarios de Bienestar</h4>
                      <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                        Consultorías, asesorías y servicios complementarios para el desarrollo de estrategias de bienestar escolar, inclusión educativa y salud mental institucional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-first wrap-about py-5 wrap-about bg-light" style={{ marginTop: '2rem' }}>
              <div className="text px-4 ftco-animate">
                <h2 className="mb-4">Beneficios e <span>Impacto</span></h2>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Mejora del Clima Escolar y la Convivencia:</strong>
                    <span style={{ display: 'block' }}>Estrategias que fortalecen las relaciones interpersonales, mejoran la comunicación y crean un ambiente escolar positivo y seguro.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Apoyo a Procesos de Inclusión (PIAR, DUA):</strong>
                    <span style={{ display: 'block' }}>Acompañamiento especializado en la implementación de Planes Individuales de Ajustes Razonables (PIAR) y Diseño Universal para el Aprendizaje (DUA).</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Fortalecimiento Socioemocional de Estudiantes:</strong>
                    <span style={{ display: 'block' }}>Programas que desarrollan habilidades emocionales, sociales y de convivencia, mejorando el bienestar integral de los estudiantes.</span>
                  </li>
                  <li style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '24px', fontWeight: 'bold', top: 0 }}>✓</span>
                    <strong style={{ display: 'block', marginBottom: '5px' }}>Orientación y Capacitación a Docentes y Familias:</strong>
                    <span style={{ display: 'block' }}>Talleres, capacitaciones y acompañamiento continuo que fortalece las competencias de docentes y familias en el apoyo a los estudiantes.</span>
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
          <div className="row">
            <div className="col-12 py-5 bg-light">
              <div className="text ftco-animate" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                <h2 className="mb-4">Marco Ético y <span>Normativo</span></h2>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
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
                ¿Listo para construir entornos de aprendizaje saludables e inclusivos?
              </h2>
              <p className="mb-0" style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', fontSize: '18px' }}>
                Invitamos a las instituciones educativas a construir conjuntamente entornos de aprendizaje saludables, inclusivos y emocionalmente seguros. Solicitamos una reunión de 15 minutos para conocer sus necesidades y diseñar un programa personalizado.
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
              <MeetingRequestForm source="colegios" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

