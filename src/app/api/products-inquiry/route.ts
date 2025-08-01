import { NextRequest, NextResponse } from 'next/server';

// Google Apps Script Web App URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw4C_eZbKa3LKVnXqkjcv50-O-mV9i7UW85tTAgjV8UDw8Sx5HZLs3BZRW0SRtmiHHUWA/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, product, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !product) {
      return NextResponse.json(
        { error: 'Name, email, phone, and product are required' },
        { status: 400 }
      );
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
    formData.append('phone', phone);
    formData.append('company', company || 'N/A');
    formData.append('product', product);
    formData.append('message', message || 'N/A');
    formData.append('type', 'products');

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      console.error('Google Apps Script error:', await response.text());
      return NextResponse.json(
        { error: 'Failed to save data' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Product inquiry submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Products inquiry error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 