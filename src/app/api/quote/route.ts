import { NextResponse } from 'next/server';
import { QuoteRequestPayload } from '@/types/product';

export async function POST(request: Request) {
  try {
    const payload: QuoteRequestPayload = await request.json();

    if (!payload.name || !payload.email) {
      return NextResponse.json(
        { success: false, message: 'Name and Email are required fields.' },
        { status: 400 }
      );
    }

    // In a production environment, plug in SMTP, Resend, Telegram bot, CRM webhook or database
    console.log('[CENLARO B2B QUOTE INQUIRY RECEIVED]:', {
      timestamp: new Date().toISOString(),
      name: payload.name,
      company: payload.company || 'N/A',
      email: payload.email,
      phone: payload.phone || 'N/A',
      product: payload.productName || payload.productSlug || 'General Wholesale',
      volume: payload.volumeNeeded || 'Unspecified',
      packaging: payload.packagingPreference || 'Unspecified',
      destination: payload.destinationCountry || 'Not Specified',
      message: payload.message || '',
    });

    // Architecture ready for external adapters (e.g. process.env.TELEGRAM_BOT_TOKEN or process.env.RESEND_API_KEY)
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        const text = `☕ *NEW CENLARO QUOTE REQUEST*\n\n` +
          `*Name:* ${payload.name}\n` +
          `*Company:* ${payload.company || 'N/A'}\n` +
          `*Email:* ${payload.email}\n` +
          `*Phone:* ${payload.phone || 'N/A'}\n` +
          `*Product:* ${payload.productName || 'General Inquiry'}\n` +
          `*Volume:* ${payload.volumeNeeded}\n` +
          `*Destination:* ${payload.destinationCountry || 'N/A'}\n` +
          `*Message:* ${payload.message || 'N/A'}`;

        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'Markdown',
          }),
        });
      } catch (tgErr) {
        console.error('Telegram notification error:', tgErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Quote inquiry successfully logged and forwarded to CENLARO export directors.',
    });
  } catch (error) {
    console.error('Error in /api/quote:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing quote.' },
      { status: 500 }
    );
  }
}
