import { NextResponse } from 'next/server';

// This API route handles form submissions and sends to multiple destinations
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add timestamp
    const submissionData = {
      ...data,
      timestamp: new Date().toISOString(),
      source: 'MAFAR Homepage',
      ip: request.headers.get('x-forwarded-for') || 'unknown',
    };

    // 1. Send to Web3Forms (connected to mafarhealthtech@gmail.com)
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY || "YOUR_KEY_HERE",
        subject: `New ${data.type} Lead - ${data.name}`,
        from_name: "MAFAR System",
        ...submissionData,
      }),
    });

    // 2. Optional: Send to Google Sheets via Google Sheets API
    // This requires setting up Google Cloud credentials
    // Uncomment when credentials are ready:
    /*
    if (process.env.GOOGLE_SHEET_ID) {
      await appendToGoogleSheet(submissionData);
    }
    */

    // 3. Optional: Send WhatsApp notification
    // Requires WhatsApp Business API setup
    /*
    if (process.env.WHATSAPP_API_KEY) {
      await sendWhatsAppNotification(submissionData);
    }
    */

    // 4. Log to console for debugging
    console.log('New lead submission:', submissionData);

    if (!web3Response.ok) {
      throw new Error('Failed to submit form');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Terima kasih! Kami akan hubungi anda dalam masa 24 jam.' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Maaf, ada masalah. Sila cuba lagi.' },
      { status: 500 }
    );
  }
}

// Helper function for Google Sheets (to be implemented)
async function appendToGoogleSheet(data: any) {
  // Implementation with googleapis
  // const { google } = require('googleapis');
  // Setup authentication and append row
  console.log('Would append to Google Sheets:', data);
}

// Helper function for WhatsApp (to be implemented)
async function sendWhatsAppNotification(data: any) {
  // Implementation with WhatsApp Business API
  console.log('Would send WhatsApp notification:', data);
}
