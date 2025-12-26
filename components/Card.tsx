import { ReactNode } from 'react'
import { COLORS, BORDER_RADIUS, SHADOWS } from '../lib/constants'

interface CardProps {
  children: ReactNode
  title?: string
  icon?: ReactNode
  iconColor?: string
  className?: string
  style?: React.CSSProperties
  fullHeight?: boolean
}

export default function Card({
  children,
  title,
  icon,
  iconColor = COLORS.primary,
  className = '',
  style,
  fullHeight = true,
}: CardProps) {
  const cardStyle: React.CSSProperties = {
    height: fullHeight ? '100%' : 'auto',
    borderRadius: BORDER_RADIUS.medium,
    boxShadow: SHADOWS.medium,
    display: 'flex',
    flexDirection: 'column',
    ...style,
  }

  return (
    <div className={`bg-white p-4 ${className}`} style={cardStyle}>
      {icon && (
        <div
          className="icon mb-3 d-flex justify-content-center align-items-center mx-auto"
          style={{
            width: '80px',
            height: '80px',
            background: iconColor,
            borderRadius: BORDER_RADIUS.round,
          }}
        >
          {icon}
        </div>
      )}
      {title && (
        <h3
          className="mb-3"
          style={{
            textAlign: 'center',
            minHeight: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: COLORS.primary,
          }}
        >
          {title}
        </h3>
      )}
      <div className="text" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  )
}

