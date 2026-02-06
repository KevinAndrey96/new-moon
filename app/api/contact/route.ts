import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '../../../lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'name, email, and message are required' },
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

    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      timestamp: new Date().toISOString(),
    })

    try {
      await sendContactEmail({
        name,
        email,
        phone,
        subject,
        message,
      })

      console.log('Email sent successfully to info@nmpsicologiaenevolucion.com')

      return NextResponse.json(
        {
          success: true,
          message: 'message sent successfully',
        },
        { status: 200 }
      )
    } catch (emailError: any) {
      console.error('Error sending email:', emailError)
      
      if (emailError.message?.includes('SMTP configuration')) {
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
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'internal server error' },
      { status: 500 }
    )
  }
}

// You can also handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST to submit forms.' },
    { status: 200 }
  )
}

