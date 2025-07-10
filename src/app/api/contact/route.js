import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    const emailUser = "contact@hinediunlimited.com" ;
    const emailPass =  "sklb oniz crmi nswd";

    console.log('EMAIL_USER:', emailUser);
    console.log('EMAIL_PASS:', emailPass ? '***' : 'NOT SET');

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: emailUser, // Send to yourself
      replyTo: email, // Reply to the person who filled the form
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%); border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          <div style="text-align: center; margin-bottom: 25px;">
            <h2 style="color: #2d3748; font-size: 24px; font-weight: 600; margin-bottom: 10px; letter-spacing: -0.5px;">New Contact Form Submission</h2>
            <div style="height: 3px; width: 80px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); margin: 0 auto;"></div>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
            <h3 style="color: #4a5568; font-size: 18px; margin-bottom: 15px; display: flex; align-items: center;">
              <span style="display: inline-block; width: 6px; height: 6px; background: #667eea; border-radius: 50%; margin-right: 8px;"></span>
              Contact Details
            </h3>
            
            <div style="display: grid; grid-template-columns: 120px 1fr; gap: 12px; align-items: center; padding: 15px 0;">
              <span style="color: #4a5568; font-weight: 600; font-size: 15px; letter-spacing: 0.5px;">Name:</span>
              <span style="color: #2d3748; font-weight: 500; font-size: 15px; padding: 8px 12px; background: #f8f9fa; border-radius: 6px;">${name}</span>
              
              <span style="color: #4a5568; font-weight: 600; font-size: 15px; letter-spacing: 0.5px;">Email:</span>
              <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: 500; font-size: 15px; padding: 8px 12px; background: #f8f9fa; border-radius: 6px;">${email}</a>
              
              <span style="color: #4a5568; font-weight: 600; font-size: 15px; letter-spacing: 0.5px;">Subject:</span>
              <span style="color: #2d3748; font-weight: 500; font-size: 15px; padding: 8px 12px; background: #f8f9fa; border-radius: 6px;">${subject}</span>
            </div>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
            <h3 style="color: #4a5568; font-size: 18px; margin-bottom: 15px; display: flex; align-items: center;">
              <span style="display: inline-block; width: 6px; height: 6px; background: #667eea; border-radius: 50%; margin-right: 8px;"></span>
              Message
            </h3>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea;">
              <p style="margin: 0; color: #4a5568; line-height: 1.6; font-size: 15px;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <p style="text-align: center; margin-top: 30px; color: #a0aec0; font-size: 13px;">
            This message was sent via your website contact form • <span style="color: #667eea;">${new Date().toLocaleDateString()}</span>
          </p>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}