"use server";

import nodemailer from "nodemailer";

// send emails function
export const sendEmails = async ({
  to,
  subject,
  body,
  replyTo,
}: {
  to: string;
  subject: string;
  body: string;
  replyTo?: string;
}) => {
  // get email credentials from env
  const { SMTP_HOST, SMTP_PORT, SMTP_EMAIL, SMTP_USERNAME, SMTP_PASSWORD } =
    process.env;

  // create transporter
  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: SMTP_HOST,
    // port: SMTP_PORT || 2525,
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    // verify transporter
    const transportResult = await transporter.verify();
    if (!transportResult) {
      return false;
    }
    // send email
    const sendEmail = await transporter.sendMail({
      from: `Webease <${SMTP_EMAIL}>`,
      sender: SMTP_EMAIL,
      replyTo: replyTo || SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    // if email sent
    if (sendEmail) {
      return true;
    }
    return false;
  } catch (e) {
    // if error
    return false;
  }
};
