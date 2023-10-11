// packages
import { NextApiRequest, NextApiResponse } from 'next';

// utils
import fetchFirebase from '@/services/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await fetchFirebase('experience');

		res.status(200).json(response);
	} catch (error) {
		res.status(400);
	}
}
