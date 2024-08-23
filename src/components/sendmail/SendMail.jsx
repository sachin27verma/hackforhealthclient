// Import required modules
import Nodemailer from 'nodemailer';

// Define the function to send an email
export default async function sendMail(subject, toEmail, otpText) {

  const transporter = Nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    secure: true,
  });

  

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL, 
    to: toEmail,
    subject: subject,
    text: otpText,
  };


  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}