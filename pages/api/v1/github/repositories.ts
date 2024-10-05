import { NextApiRequest, NextApiResponse } from 'next';

import { octokit } from '@/services/github';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await octokit.request('GET /users/guyfrommilkyway/repos', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });

        res.status(response?.status).json(response?.data);
    } catch (error: any) {
        res.status(500).json(error);
    }
}
