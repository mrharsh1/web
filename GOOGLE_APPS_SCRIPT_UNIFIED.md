# Updated Google Apps Script Code

Replace your current Google Apps Script code with this unified version that handles both contact and quote forms:

```javascript
function doPost(e) {
  try {
    // Get the spreadsheet
    var spreadsheet = SpreadsheetApp.openById('1EzlZg2zXpj8WwakMDC8vYH6_S7eX-NredISwZIy6LJM');
    var sheet = spreadsheet.getSheetByName('Contact Form Responses');
    
    // Get form data
    var formData = e.parameter;
    
    // Log all received parameters for debugging
    Logger.log('=== RECEIVED PARAMETERS ===');
    for (var key in formData) {
      Logger.log(key + ': ' + formData[key]);
    }
    
    // Extract data with explicit phone handling
    var timestamp = formData.timestamp || new Date().toISOString();
    var name = formData.name || '';
    var email = formData.email || '';
    var phone = formData.phone_number || formData.phone || 'NO_PHONE';
    var message = formData.message || '';
    var service = formData.service || '';
    var type = formData.type || 'contact';
    
    // Log extracted data
    Logger.log('=== EXTRACTED DATA ===');
    Logger.log('Timestamp: ' + timestamp);
    Logger.log('Name: ' + name);
    Logger.log('Email: ' + email);
    Logger.log('Phone: ' + phone);
    Logger.log('Message: ' + message);
    Logger.log('Service: ' + service);
    Logger.log('Type: ' + type);
    
    // Prepare row data based on type
    var rowData;
    if (type === 'quote') {
      // For quote requests: Timestamp, Name, Email, Phone, Service, Message, Type
      rowData = [
        timestamp,  // Column A
        name,       // Column B
        email,      // Column C
        phone,      // Column D
        service,    // Column E
        message,    // Column F
        type        // Column G
      ];
    } else {
      // For contact requests: Timestamp, Name, Email, Phone, Message, Type
      rowData = [
        timestamp,  // Column A
        name,       // Column B
        email,      // Column C
        phone,      // Column D
        message,    // Column E
        type        // Column F
      ];
    }
    
    // Log the row data being appended
    Logger.log('=== ROW DATA TO APPEND ===');
    Logger.log('Row data: ' + JSON.stringify(rowData));
    Logger.log('Row data length: ' + rowData.length);
    
    // Append to sheet
    sheet.appendRow(rowData);
    
    Logger.log('=== SUCCESS: Data appended to sheet ===');
    Logger.log('Form type: ' + type);
    
    // Return success response
    return ContentService
      .createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    // Log error
    Logger.log('=== ERROR ===');
    Logger.log('Error: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
    
    // Return error response
    return ContentService
      .createTextOutput('error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Unified Form API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## 📋 **Sheet Structure**

Your Google Sheet should have these headers in row 1:

**For Contact Forms:**
- Column A: Timestamp
- Column B: Name
- Column C: Email
- Column D: Phone
- Column E: Message
- Column F: Type

**For Quote Forms:**
- Column A: Timestamp
- Column B: Name
- Column C: Email
- Column D: Phone
- Column E: Service
- Column F: Message
- Column G: Type

## 🔧 **Features**

✅ **Unified API**: Both contact and quote forms use the same endpoint
✅ **Type Detection**: Automatically detects if it's a contact or quote request
✅ **Phone Number Fix**: Uses `phone_number` parameter for better compatibility
✅ **Detailed Logging**: Comprehensive logging for debugging
✅ **Flexible Data Structure**: Handles different data for contact vs quote

## 🚀 **Testing**

1. **Update your Google Apps Script** with the code above
2. **Deploy the updated script**
3. **Test Contact Form**: Go to `/contact` and submit
4. **Test Quote Form**: Go to `/quote` and submit
5. **Check your Google Sheet** for both types of submissions

Both forms will now send data to the same Google Apps Script with different `type` values! 