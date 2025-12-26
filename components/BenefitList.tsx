import { BenefitItem } from '../lib/types'
import { COLORS } from '../lib/constants'

interface BenefitListProps {
  benefits: BenefitItem[]
}

export default function BenefitList({ benefits }: BenefitListProps) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
      {benefits.map((benefit, index) => (
        <li key={index} style={{ marginBottom: '25px', paddingLeft: '35px', position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              left: 0,
              color: COLORS.secondary,
              fontSize: '24px',
              fontWeight: 'bold',
              top: 0,
            }}
          >
            ✓
          </span>
          <strong style={{ display: 'block', marginBottom: '5px' }}>{benefit.title}:</strong>
          <span style={{ display: 'block' }}>{benefit.description}</span>
        </li>
      ))}
    </ul>
  )
}

