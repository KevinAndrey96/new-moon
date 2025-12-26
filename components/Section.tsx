import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
  titleHighlight?: string
  subtitle?: string
  className?: string
  bgLight?: boolean
  noPadding?: boolean
}

export default function Section({
  children,
  title,
  titleHighlight,
  subtitle,
  className = '',
  bgLight = false,
  noPadding = false,
}: SectionProps) {
  const sectionClass = `ftco-section ${noPadding ? 'ftco-no-pt ftc-no-pb' : ''} ${bgLight ? 'bg-light' : ''} ${className}`

  return (
    <section className={sectionClass}>
      <div className="container">
        {(title || subtitle) && (
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-10 text-center heading-section ftco-animate">
              {title && (
                <h2 className="mb-4">
                  {titleHighlight ? (
                    <>
                      {title} <span>{titleHighlight}</span>
                    </>
                  ) : (
                    title
                  )}
                </h2>
              )}
              {subtitle && <p style={{ fontSize: '18px' }}>{subtitle}</p>}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

