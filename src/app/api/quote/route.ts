import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = 'royalvending786@gmail.com';
const FROM_EMAIL = 'noreply@royalvendingcart.com';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  truckType: string;
  budget: string;
  timeline: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: QuoteFormData = await request.json();
    const { name, email, phone, company, projectType, truckType, budget, timeline, message } = body;

    console.log('Quote form submission received:', { name, email, projectType, budget });

    // Validate required fields
    if (!name || !email || !message || !budget || budget === 'Select budget range') {
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

    console.log('Sending quote notification to business...');
    // Send notification email to the business
    const businessEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: `New Quote Request: ${projectType} - ${name}`,
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
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Quote Request</h1>
                <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Budget: ${budget}</p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 30px;">
                <!-- Contact Info Section -->
                <h2 style="color: #6B1B2D; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #6B1B2D; padding-bottom: 10px;">Contact Information</h2>
                <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 25px;">
                  <tr>
                    <td style="padding: 8px 0; width: 140px;"><strong style="color: #666;">Name:</strong></td>
                    <td style="padding: 8px 0; color: #333;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;"><strong style="color: #666;">Email:</strong></td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6B1B2D;">${email}</a></td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="padding: 8px 0;"><strong style="color: #666;">Phone:</strong></td>
                    <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #6B1B2D;">${phone}</a></td>
                  </tr>
                  ` : ''}
                  ${company ? `
                  <tr>
                    <td style="padding: 8px 0;"><strong style="color: #666;">Company:</strong></td>
                    <td style="padding: 8px 0; color: #333;">${company}</td>
                  </tr>
                  ` : ''}
                </table>

                <!-- Project Details Section -->
                <h2 style="color: #6B1B2D; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #6B1B2D; padding-bottom: 10px;">Project Details</h2>
                <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 25px;">
                  <tr>
                    <td style="padding: 8px 0; width: 140px;"><strong style="color: #666;">Project Type:</strong></td>
                    <td style="padding: 8px 0; color: #333;">${projectType}</td>
                  </tr>
                  ${truckType ? `
                  <tr>
                    <td style="padding: 8px 0;"><strong style="color: #666;">Truck Type:</strong></td>
                    <td style="padding: 8px 0; color: #333;">${truckType}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 8px 0;"><strong style="color: #666;">Budget:</strong></td>
                    <td style="padding: 8px 0; color: #333; font-weight: bold;">${budget}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;"><strong style="color: #666;">Timeline:</strong></td>
                    <td style="padding: 8px 0; color: #333;">${timeline !== 'Select timeline' ? timeline : 'Not specified'}</td>
                  </tr>
                </table>

                <!-- Message Section -->
                <h2 style="color: #6B1B2D; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #6B1B2D; padding-bottom: 10px;">Project Description</h2>
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
                  <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #f5f5f5; padding: 20px; text-align: center;">
                <p style="margin: 0; color: #666; font-size: 12px;">
                  This quote request was submitted from the Food Truck Parts website.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log('Business notification sent:', businessEmail);
    console.log('Sending quote confirmation to user...');

    // Send confirmation email to the user
    const userEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Your Quote Request Has Been Received - Food Truck Parts",
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
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Quote Request Received!</h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 30px;">
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Hi ${name},
                </p>
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Thank you for your interest in Food Truck Parts! We've received your quote request and our team is already reviewing your project details.
                </p>

                <!-- Quote Summary Box -->
                <div style="background-color: #f9f9f9; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px; margin: 20px 0;">
                  <h3 style="color: #6B1B2D; margin: 0 0 15px 0; font-size: 16px;">Your Request Summary:</h3>
                  <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="padding: 5px 0; color: #666; width: 120px;">Project Type:</td>
                      <td style="padding: 5px 0; color: #333;">${projectType}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0; color: #666;">Budget Range:</td>
                      <td style="padding: 5px 0; color: #333;">${budget}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0; color: #666;">Timeline:</td>
                      <td style="padding: 5px 0; color: #333;">${timeline !== 'Select timeline' ? timeline : 'Not specified'}</td>
                    </tr>
                  </table>
                </div>

                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  <strong>What happens next?</strong>
                </p>
                <ol style="color: #333; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0; padding-left: 20px;">
                  <li>Our engineering team will review your project requirements</li>
                  <li>We'll prepare a detailed, customized quote for your project</li>
                  <li>A project specialist will contact you within 24-48 hours</li>
                  <li>We'll schedule a consultation to discuss your vision</li>
                </ol>

                <div style="background-color: #6B1B2D; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
                  <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px;">
                    Need to speak with someone right away?
                  </p>
                  <a href="tel:+12679686618" style="color: #ffffff; font-size: 18px; font-weight: bold; text-decoration: none;">
                    (267) 968-6618
                  </a>
                </div>

                <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                  Thank you for considering Food Truck Parts for your project. We're excited to help bring your mobile kitchen vision to life!
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
