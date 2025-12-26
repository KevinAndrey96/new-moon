import { ContactInfo } from '../lib/types'
import { COLORS } from '../lib/constants'

interface ContactInfoCardProps {
  contact: ContactInfo
}

export default function ContactInfoCard({ contact }: ContactInfoCardProps) {
  const content = contact.link ? (
    <a
      href={contact.link}
      target={contact.type === 'address' ? '_blank' : undefined}
      rel={contact.type === 'address' ? 'noopener noreferrer' : undefined}
      style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
    >
      {contact.value.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < contact.value.split('\n').length - 1 && <br />}
        </span>
      ))}
    </a>
  ) : (
    <span style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      {contact.value.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < contact.value.split('\n').length - 1 && <br />}
        </span>
      ))}
    </span>
  )

  return (
    <div className="col-md-3 d-flex">
      <div
        className="bg-light align-self-stretch box p-4 text-center"
        style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
      >
        <h3 className="mb-4">{contact.icon} {contact.label}</h3>
        <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{content}</p>
        {contact.smallText && (
          <p className="mt-3" style={{ fontSize: '1rem', color: COLORS.text }}>
            {contact.smallText}
          </p>
        )}
      </div>
    </div>
  )
}

