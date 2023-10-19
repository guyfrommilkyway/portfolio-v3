// packages
import { NextApiRequest, NextApiResponse } from 'next';
import Redis from 'ioredis';
import requestIp from 'request-ip';
const sgMail = require('@sendgrid/mail');

// utils
import rateLimiter from '@/utils/rate-limiter';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

const client = new Redis({
  host: process.env.NEXT_PUBLIC_REDIS_URL!,
  password: process.env.NEXT_PUBLIC_REDIS_TOKEN!,
  port: +process.env.NEXT_PUBLIC_REDIS_PORT!,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const identifier = requestIp.getClientIp(req);
    const result = await rateLimiter(client, identifier!, 1, 60);
    res.setHeader('X-RateLimit-Limit', result.limit);
    res.setHeader('X-RateLimit-Remaining', result.remaining);

    if (!result.success) {
      res.status(429).json({
        status: 429,
        message: 'Too many requests in 1 minute. Please try again later.',
      });
      return;
    }

    const cleanSubject = req.body.subject.toString();
    const cleanMessage = req.body.message.toString();
    const cleanName = req.body.name.toString();
    const cleanEmail = req.body.email.toString();

    const response = await sgMail.send({
      to: process.env.NEXT_PUBLIC_SENDGRID_TO_EMAIL,
      from: process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL,
      subject: cleanSubject,
      text: cleanMessage,
      html: `<h2>Sender: ${cleanName}</h2> <h3>Email: ${cleanEmail}</h3> <p style='font-size: 20px;'>${cleanMessage}</p>`,
    });

    res.status(200).json(response);
  } catch (error: any) {
    res.status(error.code).json(error.response);
  }
}
