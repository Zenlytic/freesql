# FreeSQL Landing Page

A landing page for FreeSQL with Google Sheets integration for email collection.

## Setup Instructions

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Google Sheets Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Google Sheets API
4. Create a Service Account:
   - Go to "IAM & Admin" > "Service Accounts"
   - Click "Create Service Account"
   - Fill in the details and grant necessary permissions
   - Create a key (JSON type) and download it
5. Create a Google Sheet:
   - Create a new spreadsheet in Google Sheets
   - Add these column headers to the first row: Email, Timestamp, Source
   - Share the spreadsheet with the service account email (with Editor permissions)
   - Copy the spreadsheet ID from the URL (the long string in the middle of the URL)

### Netlify Environment Setup

1. Deploy the site to Netlify
2. In the Netlify dashboard, go to Site settings > Environment variables
3. Add the following environment variables:
   - `GOOGLE_SHEET_ID`: Your Google Sheet ID
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Email from your service account
   - `GOOGLE_PRIVATE_KEY`: The entire private key from your service account JSON file

## Testing Locally with Netlify Functions

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Create a `.env` file in the root with your Google credentials:
   ```
   GOOGLE_SHEET_ID=your_sheet_id
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email
   GOOGLE_PRIVATE_KEY="your_private_key"
   ```

3. Run the development server with Netlify Functions:
   ```bash
   netlify dev
   ```

## Features

- Eye-catching design with the iconic all-seeing eye
- Email collection form that saves to Google Sheets
- Responsive design for all device sizes
- Easy to deploy on Netlify

## Customization

- Update the eye image in `public/freesql.png`
- Modify the copy in the React components
- Adjust the color scheme in `src/index.css`