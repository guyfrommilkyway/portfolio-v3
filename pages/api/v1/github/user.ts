import { NextApiRequest, NextApiResponse } from 'next';

import { getUser } from '@/services/github';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // check if the request method is GET
    if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

    try {
        const response = await getUser();

        res.status(response?.status).json(response?.data);
    } catch (error: any) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
