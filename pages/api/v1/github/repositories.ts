import { NextApiRequest, NextApiResponse } from 'next';

import { getRepo } from '@/services/github';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await getRepo();

        res.status(response?.status).json(response?.data);
    } catch (error: any) {
        res.status(500).json(error);
    }
}
