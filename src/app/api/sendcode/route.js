import sendMail from '../../../components/sendmail/SendMail';
import { NextResponse } from "next/server";

export async function POST(req) {
  const { subject, toEmail, otpText } = await req.json();
  // console.log(subject, toEmail, otpText);
  // console.log('I am here');
  try {

    const result = await sendMail(subject, toEmail, otpText);
    // console.log(result);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    // console.error("Error sending email:", error.message);
    return NextResponse.json({ success: false, error });
  }
}