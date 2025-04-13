import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { DonorFormData } from '@/types/donor';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const donorData: DonorFormData = await request.json();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Blood Donor Registration',
      html: `
        <h2>New Blood Donor Registration</h2>
        <p><strong>Name:</strong> ${donorData.name}</p>
        <p><strong>Email:</strong> ${donorData.email}</p>
        <p><strong>Contact Number:</strong> ${donorData.contactNumber}</p>
        <p><strong>Blood Group:</strong> ${donorData.bloodGroup}</p>
        <p><strong>Last Donation Date:</strong> ${new Date(donorData.lastDonationDate).toLocaleDateString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 