# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality for the contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use the default EmailJS service
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Customer's name
   - `{{from_email}}` - Customer's email
   - `{{vehicle}}` - Vehicle information
   - `{{preferred_date}}` - Preferred service date
   - `{{message}}` - Customer's message
   - `{{to_email}}` - Owner's email (you can hardcode this in the template)

4. Example template:
   ```
   Subject: New Booking Request from {{from_name}}
   
   You have received a new booking request:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Vehicle: {{vehicle}}
   Preferred Date: {{preferred_date}}
   
   Message:
   {{message}}
   ```

5. Note down your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update the Contact Form

Open `src/pages/Contact.jsx` and replace the following values:

```javascript
const serviceId = "YOUR_SERVICE_ID";      // Replace with your Service ID
const templateId = "YOUR_TEMPLATE_ID";    // Replace with your Template ID
const publicKey = "YOUR_PUBLIC_KEY";      // Replace with your Public Key
```

Also update the owner's email address:
```javascript
to_email: "owner@unimax.com", // Replace with your actual email address
```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the booking request

## Troubleshooting

- Make sure all three IDs (Service ID, Template ID, Public Key) are correctly entered
- Verify your email service is properly connected in EmailJS dashboard
- Check the browser console for any error messages
- Ensure your EmailJS account is not over the free tier limit

## Alternative: Environment Variables (Recommended for Production)

For better security, you can use environment variables:

1. Create a `.env` file in the root directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update `Contact.jsx` to use environment variables:
   ```javascript
   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
   ```

3. Add `.env` to your `.gitignore` file to keep credentials secure
