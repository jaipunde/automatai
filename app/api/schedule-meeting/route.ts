import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const {
            name,
            email,
            phone,
            company,
            message,
            date,
            time,
            timezone
        } = data;

        // Validate required fields
        if (!name || !email || !date || !time) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Here you can integrate with your email service
        // For now, we'll log the meeting details
        console.log('New meeting scheduled:', {
            name,
            email,
            phone,
            company,
            message,
            date,
            time,
            timezone
        });

        // Example: Send email notification using a service like Resend, SendGrid, etc.
        // await sendEmail({
        //     to: email,
        //     subject: 'Meeting Confirmation - AutomatAI',
        //     html: `
        //         <h2>Meeting Confirmed!</h2>
        //         <p>Hi ${name},</p>
        //         <p>Your meeting has been scheduled for:</p>
        //         <p><strong>${date} at ${time}</strong></p>
        //         <p>Timezone: ${timezone}</p>
        //         <p>We look forward to speaking with you!</p>
        //     `
        // });

        // Also send notification to your team
        // await sendEmail({
        //     to: 'your-team@automatai.com',
        //     subject: 'New Meeting Scheduled',
        //     html: `
        //         <h2>New Meeting Request</h2>
        //         <p><strong>Name:</strong> ${name}</p>
        //         <p><strong>Email:</strong> ${email}</p>
        //         <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        //         <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        //         <p><strong>Date:</strong> ${date}</p>
        //         <p><strong>Time:</strong> ${time}</p>
        //         <p><strong>Timezone:</strong> ${timezone}</p>
        //         <p><strong>Message:</strong> ${message || 'No message'}</p>
        //     `
        // });

        return NextResponse.json(
            {
                success: true,
                message: 'Meeting scheduled successfully'
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error scheduling meeting:', error);
        return NextResponse.json(
            { error: 'Failed to schedule meeting' },
            { status: 500 }
        );
    }
}
