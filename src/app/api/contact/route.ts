import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = 'royalvending786@gmail.com';
const FROM_EMAIL = 'noreply@royalvendingcart.com';

interface ContactFormData {
  name: string;
  email: string;
  helpType: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, helpType, message } = body;

    console.log('Contact form submission received:', { name, email, helpType });

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('Sending notification email to business...');
    // Send notification email to the business
    const businessEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: `New Contact Form: ${helpType} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <tr>
              <td style="background-color: #6B1B2D; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 30px;">
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">
                      <strong style="color: #6B1B2D;">Inquiry Type:</strong>
                      <p style="margin: 5px 0 0 0; color: #333;">${helpType}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">
                      <strong style="color: #6B1B2D;">Name:</strong>
                      <p style="margin: 5px 0 0 0; color: #333;">${name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">
                      <strong style="color: #6B1B2D;">Email:</strong>
                      <p style="margin: 5px 0 0 0; color: #333;"><a href="mailto:${email}" style="color: #6B1B2D;">${email}</a></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <strong style="color: #6B1B2D;">Message:</strong>
                      <p style="margin: 5px 0 0 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #f5f5f5; padding: 20px; text-align: center;">
                <p style="margin: 0; color: #666; font-size: 12px;">
                  This email was sent from the Food Truck Parts contact form.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log('Business notification sent:', businessEmail);
    console.log('Sending confirmation email to user...');

    // Send confirmation email to the user
    const userEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We've received your message - Food Truck Parts",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <tr>
              <td style="background-color: #6B1B2D; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 30px;">
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Hi ${name},
                </p>
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Thank you for contacting Food Truck Parts! We've received your message and our team will review it shortly.
                </p>
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  <strong>What happens next?</strong>
                </p>
                <ul style="color: #333; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0; padding-left: 20px;">
                  <li>Our team will review your inquiry within 24 hours</li>
                  <li>A specialist will reach out to discuss your needs</li>
                  <li>We'll provide detailed information or a custom quote</li>
                </ul>

                <div style="background-color: #f9f9f9; border-left: 4px solid #6B1B2D; padding: 15px; margin: 20px 0;">
                  <p style="margin: 0; color: #666; font-size: 14px;">
                    <strong>Your message:</strong><br>
                    <em style="white-space: pre-wrap;">${message}</em>
                  </p>
                </div>

                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
                  Need immediate assistance? Call us at <a href="tel:+12679686618" style="color: #6B1B2D; text-decoration: none;">(267) 968-6618</a>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #1a1a1a; padding: 30px; text-align: center;">
                <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px;">
                  Food Truck Parts
                </p>
                <p style="margin: 0; color: #999; font-size: 12px;">
                  2777 Emerald Street, Philadelphia PA
                </p>
                <p style="margin: 10px 0 0 0; color: #999; font-size: 12px;">
                  Mon-Fri: 8:30am - 5pm EST
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log('User confirmation sent:', userEmail);
    console.log('Both emails sent successfully');

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error?.message,
      name: error?.name,
      statusCode: error?.statusCode,
      response: error?.response,
    });
    return NextResponse.json(
      { error: 'Failed to send email', details: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
