import { ReactNode } from 'react'
import { GRADIENTS, COLORS, BORDER_RADIUS } from '../lib/constants'

interface HighlightBoxProps {
  children: ReactNode
  title?: string
  titleHighlight?: string
  variant?: 'gradient' | 'light'
  className?: string
}

export default function HighlightBox({
  children,
  title,
  titleHighlight,
  variant = 'gradient',
  className = '',
}: HighlightBoxProps) {
  const boxStyle: React.CSSProperties =
    variant === 'gradient'
      ? {
          background: GRADIENTS.primary,
          padding: '40px',
          borderRadius: BORDER_RADIUS.large,
          color: COLORS.white,
          marginBottom: '30px',
        }
      : {
          background: COLORS.light,
          padding: '30px',
          borderRadius: BORDER_RADIUS.large,
          marginBottom: 0,
        }

  return (
    <div style={boxStyle} className={className}>
      {title && (
        <h3
          className="mb-4"
          style={{
            color: variant === 'gradient' ? COLORS.white : COLORS.primary,
            textAlign: 'center',
          }}
        >
          {titleHighlight ? (
            <>
              {title} <span style={{ fontSize: '1.2em' }}>{titleHighlight}</span>
            </>
          ) : (
            title
          )}
        </h3>
      )}
      <div style={{ color: variant === 'gradient' ? COLORS.white : 'inherit', textAlign: 'center', fontSize: '18px' }}>
        {children}
      </div>
    </div>
  )
}

