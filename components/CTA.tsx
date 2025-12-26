import Link from 'next/link'
import { COLORS, SHADOWS } from '../lib/constants'

interface CTAProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  backgroundImage?: string
  variant?: 'gradient' | 'image'
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonHref,
  backgroundImage = "url('/images/bg_3.jpg')",
  variant = 'image',
}: CTAProps) {
  const sectionStyle: React.CSSProperties =
    variant === 'image'
      ? { backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }
      : { background: COLORS.primary }

  return (
    <section className="ftco-intro" style={sectionStyle} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 style={{ color: COLORS.white, textShadow: SHADOWS.text }}>{title}</h2>
            <p
              className="mb-0"
              style={{
                color: COLORS.white,
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                fontSize: '18px',
              }}
            >
              {description}
            </p>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <p className="mb-0">
              <Link href={buttonHref} className="btn btn-secondary px-5 py-4" style={{ fontSize: '18px' }}>
                {buttonText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

