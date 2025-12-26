export interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface SubmitStatus {
  type: 'success' | 'error' | null
  message: string
}

export interface ServiceCard {
  title: string
  description: string
  icon: string
  color?: string
}

export interface BenefitItem {
  title: string
  description: string
}

export interface ContactInfo {
  type: 'address' | 'phone' | 'email' | 'schedule'
  label: string
  value: string
  link?: string
  icon: string
  smallText?: string
}

