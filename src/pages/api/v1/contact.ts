import { createClient } from '@vercel/kv';
import { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';

import rateLimiter from '@/utils/rate-limiter';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!);

createClient({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const identifier = requestIp.getClientIp(req);
        const result = await rateLimiter(identifier!, 1, 60);

        if (!result.success) throw new Error('429');

        res.setHeader('X-RateLimit-Limit', result.limit!);
        res.setHeader('X-RateLimit-Remaining', result.remaining!);

        const { message, name, email } = req.body;

        await sgMail.send({
            to: process.env.NEXT_PUBLIC_SENDGRID_TO_EMAIL,
            from: process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL,
            subject: 'Re: Message from portfolio site',
            text: message.toString(),
            html: `<h1>Sender: ${name.toString()}</h1> <h2>Email: ${email.toString()}</h2> <p style='font-size: 20px;'>${message.toString()}</p>`,
        });

        res.status(200).json({ message: 'Your message has been sent!' });
    } catch (e: any) {
        if (e.message === '429') {
            res.status(429).json({
                message: "Looks like you've hit the rate limit. Try again later.",
            });

            return; // terminate
        }

        res.status(500).json({ message: 'Internal Server Error' });
    }
}
