import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, country, interest, duration, message, source } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1410;">
      <div style="background: #2C2016; padding: 32px 40px; border-bottom: 2px solid #C9A96E;">
        <h2 style="color: #C9A96E; margin: 0; font-size: 24px;">New Enquiry — River View Villas</h2>
      </div>
      <div style="padding: 32px 40px; background: #f9f6f1;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; width: 160px; color: #5C4F3A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; font-size: 15px;">${name}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; color: #5C4F3A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; font-size: 15px;"><a href="mailto:${email}" style="color: #C9A96E;">${email}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; color: #5C4F3A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; font-size: 15px;">${phone || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; color: #5C4F3A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Country</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; font-size: 15px;">${country || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; color: #5C4F3A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Interest</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; font-size: 15px;">${interest || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; color: #5C4F3A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Duration</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; font-size: 15px;">${duration || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; color: #5C4F3A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Source</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ddd0; font-size: 15px;">${source || '—'}</td></tr>
        </table>
        ${message ? `<div style="margin-top: 24px; padding: 20px; background: #fff; border-left: 3px solid #C9A96E; border-radius: 2px;"><p style="color: #5C4F3A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px;">Message</p><p style="font-size: 15px; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br/>')}</p></div>` : ''}
      </div>
      <div style="padding: 20px 40px; background: #2C2016; text-align: center;">
        <p style="color: rgba(247,243,238,0.45); font-size: 12px; margin: 0; letter-spacing: 0.1em; text-transform: uppercase;">River View Villas · Bentota · Sri Lanka</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"River View Villas Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? 'Riverviewvillas23@gmail.com',
      cc: process.env.CONTACT_CC || undefined,
      replyTo: email,
      subject: `New Enquiry from ${name} — River View Villas`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Mail error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
