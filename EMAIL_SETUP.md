# Email Setup for Quote Request Form

## Overview
The quote request form now sends emails using Resend.com to both the admin (info@auto-design.nl) and the client.

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in your project root with:
```
RESEND_API_KEY=re_FengiFhH_6WA8r1jZDiVePTH5DmiS1w4K
```

### 2. Resend.com Configuration
- **Account**: info@auto-design.nl
- **API Key**: re_FengiFhH_6WA8r1jZDiVePTH5DmiS1w4K
- **Domain**: auto-design.nl (needs to be verified in Resend dashboard)

### 3. Email Flow
1. **Client submits quote form** → Form data is sent to `/api/send-quote`
2. **Admin notification** → Email sent to info@auto-design.nl with full quote details
3. **Client confirmation** → Professional thank you email sent to client's email address

### 4. Email Templates
- **Admin Email**: Contains all form data in a structured format
- **Client Email**: Professional thank you message with:
  - Confirmation of receipt
  - Next steps explanation
  - Summary of their request
  - Contact information
  - Branded with Auto Design styling

### 5. Features
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Automatic form reset on success
- ✅ Modal auto-close after 3 seconds
- ✅ Professional email templates in Dutch
- ✅ Responsive email design

### 6. Testing
To test the email functionality:
1. Fill out the quote form on any design service page
2. Submit the form
3. Check info@auto-design.nl for admin notification
4. Check the email address used in the form for client confirmation

### 7. Troubleshooting
- Ensure `.env.local` file exists with correct API key
- Check Resend dashboard for email delivery status
- Verify domain verification in Resend dashboard
- Check browser console for any API errors

## Security Notes
- API key is stored in environment variables
- Form includes validation and rate limiting
- Emails are sent from verified domain
- No sensitive data is logged
