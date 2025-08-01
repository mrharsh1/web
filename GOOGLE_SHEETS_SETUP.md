# Google Sheets Integration Setup

This guide will help you set up the contact form to send data to Google Sheets.

## 🚀 Quick Setup

### 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name the first sheet "Contact Form Responses"
4. Add these headers in row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Message`

### 2. Get Your Spreadsheet ID
- Copy the ID from your Google Sheets URL
- Example: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
- Spreadsheet ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### 3. Enable Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the "Google Sheets API"
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy your API key

### 4. Set Environment Variables
Create a `.env.local` file in your project root:

```env
# Google Sheets API Configuration
GOOGLE_SHEETS_API_KEY=your_api_key_here
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
```

### 5. Configure Sheet Permissions
1. In your Google Sheet, click "Share" (top right)
2. Click "Change to anyone with the link"
3. Set permission to "Editor"
4. Copy the link

## 📋 Data Structure

The form will automatically add new rows with:
- **Column A**: Timestamp (ISO format)
- **Column B**: Name
- **Column C**: Email
- **Column D**: Phone
- **Column E**: Message

## 🔧 Testing

1. Start your development server: `npm run dev`
2. Go to `/contact`
3. Fill out and submit the form
4. Check your Google Sheet for the new entry

## 🛠️ Troubleshooting

### Common Issues:

1. **"Failed to save to Google Sheets"**
   - Check your API key is correct
   - Verify spreadsheet ID is correct
   - Ensure Google Sheets API is enabled

2. **"Invalid email format"**
   - Make sure email follows standard format (user@domain.com)

3. **"All fields are required"**
   - Ensure all form fields are filled

### Debug Steps:
1. Check browser console for errors
2. Verify environment variables are loaded
3. Test API endpoint directly: `POST /api/contact`

## 🔒 Security Notes

- Keep your API key secure
- Don't commit `.env.local` to version control
- Consider rate limiting for production use
- Monitor API usage in Google Cloud Console

## 📈 Production Deployment

For production deployment:
1. Set environment variables in your hosting platform
2. Consider using a more secure authentication method
3. Implement rate limiting
4. Add error monitoring

## 🎯 Features

✅ **Real-time data capture**
✅ **Automatic timestamping**
✅ **Email validation**
✅ **Error handling**
✅ **Success feedback**
✅ **Form reset after submission** 