import { NextRequest, NextResponse } from 'next/server'
import { sendMeetingRequestEmail } from '../../../lib/email'
import type { MeetingRequestSource } from '../../../lib/email'

const VALID_SOURCES: MeetingRequestSource[] = ['colegios', 'empresas']

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { source, organizationName, name, position, email, phone, message } = body

    if (!VALID_SOURCES.includes(source)) {
      return NextResponse.json(
        { error: 'source must be "colegios" or "empresas"' },
        { status: 400 }
      )
    }

    if (!organizationName || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'organizationName, name, email, and phone are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'invalid email format' },
        { status: 400 }
      )
    }

    console.log('Meeting request:', {
      source,
      organizationName,
      name,
      timestamp: new Date().toISOString(),
    })

    try {
      await sendMeetingRequestEmail({
        source,
        organizationName,
        name,
        position: position || undefined,
        email,
        phone,
        message: message || undefined,
      })

      console.log('Meeting request email sent successfully')

      return NextResponse.json(
        { success: true, message: 'message sent successfully' },
        { status: 200 }
      )
    } catch (emailError: unknown) {
      console.error('Error sending meeting request email:', emailError)
      const err = emailError as { message?: string }
      if (err.message?.includes('SMTP configuration')) {
        return NextResponse.json(
          { error: 'email service not configured' },
          { status: 500 }
        )
      }
      return NextResponse.json(
        { error: 'failed to send email' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error processing meeting request form:', error)
    return NextResponse.json(
      { error: 'internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Meeting request API. Use POST with source (colegios|empresas).' },
    { status: 200 }
  )
}
