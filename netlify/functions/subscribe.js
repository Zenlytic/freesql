const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async function(event, context) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    const { email } = data;

    // Basic validation
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Valid email is required" })
      };
    }

    console.log('Initializing Google Spreadsheet with ID:', process.env.GOOGLE_SHEET_ID);
    // Initialize the Google Sheet
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    
    console.log('Authenticating with service account');
    // Authenticate with service account
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    
    // Load document properties and worksheets
    await doc.loadInfo();

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];

    // Add a new row with the email and timestamp
    await sheet.addRow({
      Email: email,
      Timestamp: new Date().toISOString(),
      Source: event.headers.referer || 'direct'
    });

    // Return success
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email subscribed successfully" })
    };
  } catch (error) {
    console.error("Subscription error:", error.message);
    console.error("Error stack:", error.stack);
    console.error("Error details:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to subscribe. Please try again." })
    };
  }
}; 