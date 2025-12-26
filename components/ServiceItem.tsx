import { COLORS } from '../lib/constants'

interface ServiceItemProps {
  icon: string
  iconColor?: string
  title: string
  description: string
}

export default function ServiceItem({
  icon,
  iconColor = COLORS.primary,
  title,
  description,
}: ServiceItemProps) {
  return (
    <div className="services-2 d-flex mb-4">
      <div
        className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"
        style={{
          width: '50px',
          height: '50px',
          background: iconColor,
          borderRadius: '50%',
          flexShrink: 0,
        }}
      >
        <span className={icon} style={{ color: COLORS.white, fontSize: '24px' }}></span>
      </div>
      <div className="text">
        <h4 style={{ marginBottom: '10px' }}>{title}</h4>
        <p style={{ textAlign: 'justify', marginBottom: 0 }}>{description}</p>
      </div>
    </div>
  )
}

