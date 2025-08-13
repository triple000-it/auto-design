import { NextRequest, NextResponse } from 'next/server'

// Direct Resend API integration using fetch
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_A2fRo6U5_71yNLv6qmdSc5KXAhZxxaFsu'
const RESEND_API_URL = 'https://api.resend.com/emails'

async function sendEmailViaResend(to: string, subject: string, html: string, from: string = 'info@auto-websites.nl') {
  try {
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
      }),
    })

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.status} ${response.statusText}`)
    }

    const result = await response.json()
    return { success: true, id: result.id }
  } catch (error) {
    console.error('Error sending email via Resend:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      company,
      selectedServices,
      projectDescription,
      budget,
      timeline,
      additionalInfo
    } = body

    // Send email to info@auto-websites.nl
    const adminEmail = await sendEmailViaResend(
      'info@auto-websites.nl',
      `Nieuwe offerteaanvraag van ${name}`,
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3c2774;">Nieuwe Offerteaanvraag</h2>
          
          <h3 style="color: #2c5765;">Klantgegevens</h3>
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone || 'Niet opgegeven'}</p>
          <p><strong>Bedrijf:</strong> ${company || 'Niet opgegeven'}</p>
          
          <h3 style="color: #2c5765;">Gewenste Services</h3>
          <ul>
            ${selectedServices.map((service: string) => `<li>${service}</li>`).join('')}
          </ul>
          
          <h3 style="color: #2c5765;">Projectdetails</h3>
          <p><strong>Projectbeschrijving:</strong></p>
          <p>${projectDescription || 'Niet opgegeven'}</p>
          
          <p><strong>Budget:</strong> ${budget || 'Niet opgegeven'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Niet opgegeven'}</p>
          
          <p><strong>Aanvullende informatie:</strong></p>
          <p>${additionalInfo || 'Geen extra informatie'}</p>
          
          <hr style="margin: 20px 0; border: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            Deze offerteaanvraag is verzonden via het contactformulier op auto-websites.nl
          </p>
        </div>
      `
    )

    // Send confirmation email to client
    const clientEmail = await sendEmailViaResend(
      email,
      'Bedankt voor uw offerteaanvraag - Auto Websites',
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: linear-gradient(135deg, #3c2774 0%, #2c5765 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Auto Websites</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Professionele weboplossingen</p>
          </div>
          
          <div style="padding: 30px; background: #fff;">
            <h2 style="color: #3c2774; margin-top: 0;">Bedankt voor uw offerteaanvraag!</h2>
            
            <p>Beste ${name},</p>
            
            <p>Hartelijk dank voor uw offerteaanvraag bij Auto Websites. We hebben uw aanvraag goed ontvangen en nemen deze serieus in behandeling.</p>
            
            <h3 style="color: #2c5765;">Wat gebeurt er nu?</h3>
            <ul style="line-height: 1.6;">
              <li>Ons team beoordeelt uw aanvraag binnen 24 uur</li>
              <li>We nemen telefonisch of per e-mail contact met u op</li>
              <li>We bespreken uw wensen en doelstellingen</li>
              <li>U ontvangt een gedetailleerde offerte op maat</li>
            </ul>
            
            <h3 style="color: #2c5765;">Uw aanvraag samenvatting:</h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Gewenste services:</strong></p>
              <ul style="margin: 10px 0;">
                ${selectedServices.map((service: string) => `<li>${service}</li>`).join('')}
              </ul>
              
              ${projectDescription ? `<p><strong>Projectbeschrijving:</strong><br>${projectDescription}</p>` : ''}
              ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
              ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
            </div>
            
            <h3 style="color: #2c5765;">Heeft u vragen?</h3>
            <p>Neem gerust contact met ons op via:</p>
            <ul style="line-height: 1.6;">
              <li><strong>E-mail:</strong> info@auto-websites.nl</li>
              <li><strong>Website:</strong> <a href="https://auto-websites.nl" style="color: #3c5774;">auto-websites.nl</a></li>
            </ul>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; font-weight: bold; color: #3c2774;">
                We kijken ernaar uit om samen te werken aan uw project!
              </p>
            </div>
            
            <p>Met vriendelijke groet,<br>
            <strong>Team Auto Websites</strong></p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666;">
            <p style="margin: 0;">
              © 2025 Auto Websites. Alle rechten voorbehouden.<br>
              Deze e-mail is verzonden naar ${email}
            </p>
          </div>
        </div>
      `
    )

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request sent successfully',
      adminEmailId: adminEmail.id,
      clientEmailId: clientEmail.id
    })

  } catch (error) {
    console.error('Error sending quote request:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send quote request',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
