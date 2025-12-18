import { NextRequest, NextResponse } from 'next/server'

// This is a Next.js API Route
// It handles POST requests to /api/contact
export async function POST(request: NextRequest) {
  try {
    // Get the form data from the request body
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM system
    // 4. etc.

    // Example: Log the data (in production, save to database)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Example: Send email (you would use a service like SendGrid, Resend, etc.)
    // await sendEmail({
    //   to: 'info@nmpsicologiaenevolucion.com',
    //   subject: `Contact Form: ${subject || 'No Subject'}`,
    //   body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    // })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'message sent successfully',
      },
      { status: 200 }
    )
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

