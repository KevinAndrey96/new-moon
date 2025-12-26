import type { Metadata } from 'next'
import Script from 'next/script'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'New Moon - Psicología en Evolución | Salud Mental Integral',
  description: 'New Moon Psicología en Evolución - Servicios de neuropsicología, psicología y sueroterapia. Evaluación, diagnóstico e intervención terapéutica para niños, adolescentes, adultos y empresas.',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-S7VK71NQKC'

  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/ionicons.min.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/icomoon.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
        
        {/* Scripts */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-migrate-3.0.1.min.js" strategy="afterInteractive" />
        <Script src="/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.easing.1.3.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.stellar.min.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/aos.js" strategy="afterInteractive" />
        <Script src="/js/jquery.animateNumber.min.js" strategy="afterInteractive" />
        <Script src="/js/scrollax.min.js" strategy="afterInteractive" />
        {/* Google Maps is loaded dynamically by GoogleMap component */}
        {/* <Script src="/js/google-map.js" strategy="afterInteractive" /> */}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

