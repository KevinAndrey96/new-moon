import Link from 'next/link'
import { COLORS, SHADOWS } from '../lib/constants'

interface HeroProps {
  title: string
  titleHighlight?: string
  subtitle?: string
  breadcrumbs?: Array<{ label: string; href: string }>
  backgroundImage?: string
  showBreadcrumbs?: boolean
}

export default function Hero({
  title,
  titleHighlight,
  subtitle,
  breadcrumbs,
  backgroundImage = "url('/images/bg_2.jpg')",
  showBreadcrumbs = true,
}: HeroProps) {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{
        backgroundImage,
        minHeight: '300px',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)' }} />
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <h1 className="mb-2 bread" style={{ textShadow: SHADOWS.text }}>
              {titleHighlight ? (
                <>
                  {title} <span style={{ color: COLORS.secondary }}>{titleHighlight}</span>
                </>
              ) : (
                title
              )}
            </h1>
            {subtitle && (
              <p className="mb-4" style={{ color: '#ffffff', textShadow: SHADOWS.textStrong, fontSize: '18px' }}>
                {subtitle}
              </p>
            )}
            {showBreadcrumbs && breadcrumbs && (
              <p className="breadcrumbs">
                {breadcrumbs.map((crumb, index) => (
                  <span key={index} className={index > 0 ? '' : 'mr-2'}>
                    {index > 0 && ' '}
                    <Link href={crumb.href}>
                      {crumb.label} {index < breadcrumbs.length - 1 && <i className="ion-ios-arrow-forward"></i>}
                    </Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

