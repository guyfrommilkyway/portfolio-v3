// packages
import { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await sgMail.send({
      to: process.env.NEXT_PUBLIC_SENDGRID_TO_EMAIL,
      from: process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL,
      subject: req.body.subject,
      text: req.body.message,
      html: `<h1>Sender: ${req.body.name}</h1> <h2>Email: ${req.body.email}</h2> <p>${req.body.message}</p>`,
    });

    res.status(200).json(response);
  } catch (error: any) {
    res.status(error.code).json(error);
  }
}
