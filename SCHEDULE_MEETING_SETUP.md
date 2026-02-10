# Schedule Meeting Component - Email Integration Guide

## Overview
The custom Schedule Meeting component is now fully functional with a beautiful UI. To enable email notifications, you can integrate with any email service provider.

## Recommended Email Services

### Option 1: Resend (Recommended - Simple & Modern)
```bash
npm install resend
```

Create `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
YOUR_EMAIL=your-email@automatai.com
```

Update `app/api/schedule-meeting/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST function, replace the comment with:
await resend.emails.send({
    from: 'Grosonic <noreply@yourdomain.com>',
    to: email,
    subject: 'Meeting Confirmation - Grosonic',
    html: `
        <h2>Meeting Confirmed!</h2>
        <p>Hi ${name},</p>
        <p>Your meeting has been scheduled for:</p>
        <p><strong>${date} at ${time}</strong></p>
        <p>Timezone: ${timezone}</p>
        <p>We look forward to speaking with you!</p>
    `
});

// Send to your team
await resend.emails.send({
    from: 'Grosonic <noreply@yourdomain.com>',
    to: process.env.YOUR_EMAIL!,
    subject: 'New Meeting Scheduled',
    html: `
        <h2>New Meeting Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Timezone:</strong> ${timezone}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
    `
});
```

### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

Create `.env.local`:
```env
SENDGRID_API_KEY=your_api_key_here
YOUR_EMAIL=your-email@automatai.com
```

Update `app/api/schedule-meeting/route.ts`:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In the POST function:
await sgMail.send({
    to: email,
    from: 'noreply@yourdomain.com',
    subject: 'Meeting Confirmation - Grosonic',
    html: `...`
});
```

### Option 3: Nodemailer (Use your own SMTP)
```bash
npm install nodemailer
```

Create `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
YOUR_EMAIL=your-email@automatai.com
```

Update `app/api/schedule-meeting/route.ts`:
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT!),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// In the POST function:
await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Meeting Confirmation - AutomatAI',
    html: `...`
});
```

## Database Integration (Optional)

To store meeting requests in a database:

### Using Supabase
```bash
npm install @supabase/supabase-js
```

Create a `meetings` table in Supabase with columns:
- id (uuid, primary key)
- name (text)
- email (text)
- phone (text)
- company (text)
- message (text)
- date (text)
- time (text)
- timezone (text)
- created_at (timestamp)

Update `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

Update `app/api/schedule-meeting/route.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// In the POST function, before sending emails:
const { data, error } = await supabase
    .from('meetings')
    .insert([
        {
            name,
            email,
            phone,
            company,
            message,
            date,
            time,
            timezone
        }
    ]);

if (error) {
    console.error('Database error:', error);
}
```

## Features Included

✅ **Interactive Calendar** - Select dates with visual feedback
✅ **Time Slot Selection** - Choose from available time slots
✅ **Contact Form** - Collect user information
✅ **Timezone Detection** - Automatically detects user's timezone
✅ **Validation** - Prevents weekend and past date selection
✅ **Responsive Design** - Works on all devices
✅ **Theme Support** - Adapts to dark/light mode
✅ **Smooth Animations** - Modern UI transitions
✅ **Success/Error Messages** - User feedback

## Customization

### Change Available Hours
Edit the `timeSlots` array in `components/ScheduleMeet.tsx`:
```typescript
const timeSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    // Add or remove slots as needed
];
```

### Disable Specific Dates
Modify the `isDateDisabled` function to add custom logic:
```typescript
const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    // Your custom logic here
    // Example: Disable specific holidays
    const holidays = ['2024-12-25', '2024-01-01'];
    const dateString = date.toISOString().split('T')[0];
    if (holidays.includes(dateString)) return true;
    
    // ... rest of the logic
};
```

### Style Customization
All styles are in `components/ScheduleMeet.module.css`. The component uses CSS variables for theming, so it automatically adapts to your site's theme.

## Testing

The component works immediately without email integration. Meeting requests will be logged to the console. Add email integration when you're ready to go live.

## Support

For issues or questions, refer to the documentation of your chosen email service provider.
