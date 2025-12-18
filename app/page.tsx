import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      
      <section className="home-slider owl-carousel">
        <div className="slider-item" style={{ backgroundImage: 'url(/images/bg_1.jpg)' }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 text-center ftco-animate">
                <h1 className="mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
                  Evolucionamos contigo hacia tu <span>Bienestar Integral</span>
                </h1>
                <p className="mb-4" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)', fontSize: '18px' }}>
                  Servicios de salud mental de alta calidad: Neuropsicología, Psicología y Sueroterapia
                </p>
                <p><Link href="/contact" className="btn btn-secondary px-4 py-3 mt-3">Agenda tu Cita</Link></p>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item" style={{ backgroundImage: 'url(/images/bg_2.jpg)' }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 text-center ftco-animate">
                <h1 className="mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
                  Salud Mental <span>Integral</span>
                </h1>
                <p className="mb-4" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)', fontSize: '18px' }}>
                  Evaluación, diagnóstico e intervención personalizada para niños, adolescentes, adultos y empresas
                </p>
                <p><Link href="/colegios" className="btn btn-secondary px-4 py-3 mt-3">Conoce Nuestros Servicios</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-services ftco-no-pb">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-reading"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">NEUROPSICOLOGÍA</h3>
                  <p>Evaluación y rehabilitación neuropsicológica integral para identificar y mejorar funciones cognitivas, atención, memoria y funciones ejecutivas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-tertiary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-teacher"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">PSICOLOGÍA</h3>
                  <p>Acompañamiento psicológico personalizado para el bienestar emocional y mental, orientación individual y familiar.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-fifth">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-books"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">SUEROTERAPIA</h3>
                  <p>Terapia complementaria para el equilibrio mente-cuerpo, integrando enfoques holísticos en el proceso de bienestar integral.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-quarternary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-diploma"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">INTERVENCIÓN TERAPÉUTICA</h3>
                  <p>Enfoque integral para el bienestar de niños, adolescentes, familias e instituciones educativas con estrategias personalizadas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftc-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
              <div className="text px-4 ftco-animate">
                <h2 className="mb-4">¿QUIENES SOMOS?</h2>
                <p style={{ textAlign: 'justify' }}>
                  Somos un equipo de profesionales de la salud mental, apasionados por el funcionamiento y comportamiento humano. Ofrecemos soluciones integrales e innovadoras en neuropsicología, psicología y rehabilitación.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Nuestro enfoque se centra en la evaluación, diagnóstico e intervención personalizada, utilizando estrategias y métodos terapéuticos de vanguardia para promover el bienestar integral de nuestros pacientes, mejorando sus habilidades de aprendizaje y comportamiento.
                </p>
                <div className="mt-4 mb-4" style={{ textAlign: 'center' }}>
                  <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #ff6b35 100%)', padding: '30px', borderRadius: '15px', color: 'white' }}>
                    <h4 style={{ color: 'white', marginBottom: '15px', textAlign: 'center' }}>Nuestro Alcance</h4>
                    <p style={{ textAlign: 'center', color: 'white', marginBottom: 0 }}>
                      New Moon se encuentra en Bogotá con servicio presencial y virtual, dando alcance a nivel nacional mediante herramientas tecnológicas, prestando servicios a la comunidad, colegios, universidades y empresas.
                    </p>
                  </div>
                </div>
                <p style={{ textAlign: 'center' }}>
                  <Link href="/contact" className="btn btn-secondary px-4 py-3">Conoce Más</Link>
                </p>
              </div>
            </div>
            <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
              <h2 className="mb-4">NUESTROS SERVICIOS</h2>
              <p>Ofrecemos un enfoque integral para el bienestar, dirigido a niños y adolescentes, familias e instituciones educativas. Nuestros servicios incluyen:</p>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-reading"></span>
                    </div>
                    <div className="text">
                      <h3>Evaluación Neuropsicológica</h3>
                      <p>Identificación temprana de dificultades de aprendizaje, atención y funciones cognitivas mediante baterías especializadas.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-teacher"></span>
                    </div>
                    <div className="text">
                      <h3>Intervención Terapéutica</h3>
                      <p>Estrategias personalizadas que actúan desde la estructuración hasta la reestructuración de la mente.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-diploma"></span>
                    </div>
                    <div className="text">
                      <h3>Rehabilitación Cognitiva</h3>
                      <p>Mejora de funciones cognitivas afectadas mediante ejercicios y estrategias especializadas.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-education"></span>
                    </div>
                    <div className="text">
                      <h3>Orientación Psicológica</h3>
                      <p>Acompañamiento individual y familiar para el desarrollo de habilidades emocionales y sociales.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-jigsaw"></span>
                    </div>
                    <div className="text">
                      <h3>Escuela de Padres</h3>
                      <p>Talleres y capacitación para docentes y familias con estrategias prácticas y efectivas.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-kids"></span>
                    </div>
                    <div className="text">
                      <h3>Consultorías</h3>
                      <p>Servicios especializados para colegios, universidades y empresas con enfoque en bienestar organizacional.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-intro" style={{ backgroundImage: 'url(/images/bg_3.jpg)' }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2>Evolucionamos contigo hacia tu bienestar integral</h2>
              <p className="mb-0">
                En New Moon ofrecemos servicios de salud mental de alta calidad que promueven el bienestar integral. Accede a nuestros servicios presenciales en Bogotá o virtuales a nivel nacional. Utilizamos herramientas terapéuticas innovadoras y una plataforma virtual para facilitar el acceso a nuestros servicios.
              </p>
            </div>
            <div className="col-md-3 d-flex align-items-center">
              <p className="mb-0">
                <Link href="/contact" className="btn btn-secondary px-4 py-3">Agenda tu Cita</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">Áreas de <span>Intervención</span></h2>
              <p>Servicios especializados para diferentes necesidades en salud mental y desarrollo cognitivo</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 course d-lg-flex ftco-animate">
              <div className="img" style={{ backgroundImage: 'url(/images/course-1.jpg)' }}></div>
              <div className="text bg-light p-4">
                <h3><Link href="/colegios">Neurodesarrollo</Link></h3>
                <p className="subheading"><span>Especialidades:</span> Discapacidad intelectual, TDAH, Autismo</p>
                <p>Evaluación y diagnóstico especializado para identificar tempranamente dificultades en el desarrollo neurológico, facilitando un abordaje educativo más preciso y personalizado.</p>
              </div>
            </div>
            <div className="col-md-6 course d-lg-flex ftco-animate">
              <div className="img" style={{ backgroundImage: 'url(/images/course-2.jpg)' }}></div>
              <div className="text bg-light p-4">
                <h3><Link href="/colegios">Aprendizaje</Link></h3>
                <p className="subheading"><span>Especialidades:</span> Dificultades de aprendizaje, Dislexia, Discalculia</p>
                <p>Identificación y abordaje de dificultades específicas de aprendizaje mediante evaluaciones especializadas y estrategias de intervención personalizadas.</p>
              </div>
            </div>
            <div className="col-md-6 course d-lg-flex ftco-animate">
              <div className="img" style={{ backgroundImage: 'url(/images/course-3.jpg)' }}></div>
              <div className="text bg-light p-4">
                <h3><Link href="/colegios">Lenguaje y Habla</Link></h3>
                <p className="subheading"><span>Especialidades:</span> Trastornos del lenguaje, Disfasia, Tartamudez</p>
                <p>Evaluación y tratamiento de dificultades en el desarrollo del lenguaje y la comunicación, mejorando las habilidades comunicativas y sociales.</p>
              </div>
            </div>
            <div className="col-md-6 course d-lg-flex ftco-animate">
              <div className="img" style={{ backgroundImage: 'url(/images/course-4.jpg)' }}></div>
              <div className="text bg-light p-4">
                <h3><Link href="/colegios">Bienestar Emocional</Link></h3>
                <p className="subheading"><span>Especialidades:</span> Ansiedad, Depresión, Manejo emocional</p>
                <p>Acompañamiento psicológico para el desarrollo de habilidades emocionales, manejo del estrés y promoción del bienestar integral.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: 'url(/images/bg_4.jpg)' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section heading-section-white ftco-animate">
              <h2 className="mb-4" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Nuestra Experiencia</h2>
            </div>
          </div>
          <div className="row d-md-flex align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="500" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>500</strong>
                      <span style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Pacientes Atendidos</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="50" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>50</strong>
                      <span style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Instituciones Aliadas</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="100" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>100</strong>
                      <span style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Talleres Realizados</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="95" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>95</strong>
                      <span style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>% Satisfacción</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/>
          <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/>
        </svg>
      </div>

      <Footer />
    </>
  )
}

