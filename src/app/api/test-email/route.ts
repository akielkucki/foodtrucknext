import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = 'royalvending786@gmail.com';
const FROM_EMAIL = 'noreply@royalvendingcart.com';

export async function GET() {
  try {
    // Check environment variables
    const config = {
      hasApiKey: !!process.env.RESEND_API_KEY,
      apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...',
      contactEmail: CONTACT_EMAIL,
      fromEmail: FROM_EMAIL,
    };

    console.log('Email configuration:', config);

    if (!config.hasApiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'RESEND_API_KEY not configured',
          message: 'Please add RESEND_API_KEY to your .env file',
          config,
        },
        { status: 500 }
      );
    }

    // Try to send a test email
    console.log('Attempting to send test email...');

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: 'Test Email from Food Truck Parts',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: sans-serif; padding: 20px;">
          <h1 style="color: #6B1B2D;">Test Email Successful!</h1>
          <p>This is a test email from your Food Truck Parts website.</p>
          <p>If you're seeing this, your email configuration is working correctly.</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Configuration:</p>
          <ul style="color: #666; font-size: 12px;">
            <li>From: ${config.fromEmail}</li>
            <li>To: ${config.contactEmail}</li>
            <li>API Key: ${config.apiKeyPrefix}</li>
          </ul>
        </body>
        </html>
      `,
    });

    console.log('Test email sent successfully:', result);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      config,
      result,
    });
  } catch (error: any) {
    console.error('Test email failed:', error);
    console.error('Error details:', {
      message: error?.message,
      name: error?.name,
      statusCode: error?.statusCode,
      response: error?.response,
    });

    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Unknown error',
        details: {
          message: error?.message,
          name: error?.name,
          statusCode: error?.statusCode,
        },
        config: {
          hasApiKey: !!process.env.RESEND_API_KEY,
          apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...',
          contactEmail: CONTACT_EMAIL,
          fromEmail: FROM_EMAIL,
        },
      },
      { status: 500 }
    );
  }
}
