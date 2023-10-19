// packages
import { NextApiRequest, NextApiResponse } from 'next';

// utils
import fetchFirebase from '@/services/firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await fetchFirebase('experience');

    res.status(response.status).json(response.data);
  } catch (error: any) {
    res.status(error.code).json(error);
  }
}
