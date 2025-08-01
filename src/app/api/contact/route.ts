import { NextRequest, NextResponse } from 'next/server';

// Google Apps Script Web App URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw4C_eZbKa3LKVnXqkjcv50-O-mV9i7UW85tTAgjV8UDw8Sx5HZLs3BZRW0SRtmiHHUWA/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service, type = 'contact' } = body;

    // Debug: Log the received data
    console.log('Received form data:', { name, email, phone, message, service, type });

    // Validate required fields based on type
    if (type === 'contact') {
      if (!name || !email || !phone || !message) {
        console.log('Missing fields:', { name: !!name, email: !!email, phone: !!phone, message: !!message });
        return NextResponse.json(
          { error: 'All fields are required' },
          { status: 400 }
        );
      }
    } else if (type === 'quote') {
      if (!name || !email || !phone || !service) {
        console.log('Missing fields:', { name: !!name, email: !!email, phone: !!phone, service: !!service });
        return NextResponse.json(
          { error: 'Name, email, phone, and service are required' },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare data for Google Apps Script
    const formData = new URLSearchParams();
    formData.append('timestamp', new Date().toISOString());
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone_number', phone);
    formData.append('message', message || '');
    formData.append('service', service || '');
    formData.append('type', type);

    // Debug: Log the data being sent to Google Apps Script
    console.log('Sending to Google Apps Script:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      message: message || '',
      service: service || '',
      type
    });

    // Debug: Log the actual form data string being sent
    console.log('Form data string:', formData.toString());

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Apps Script error:', errorText);
      return NextResponse.json(
        { error: 'Failed to save data' },
        { status: 500 }
      );
    }

    // Debug: Log successful response
    const responseText = await response.text();
    console.log('Google Apps Script response:', responseText);

    return NextResponse.json(
      { 
        success: true, 
        message: type === 'contact' ? 'Contact form submitted successfully' : 'Quote request submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 