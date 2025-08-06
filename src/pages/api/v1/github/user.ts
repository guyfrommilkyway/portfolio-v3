import { NextApiRequest, NextApiResponse } from 'next';

import { getUser } from '@/services/github';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  try {
    const response = await getUser();
    res.status(response?.status).json(response?.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
