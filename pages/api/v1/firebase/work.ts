// packages
import { NextApiRequest, NextApiResponse } from 'next';

// utils
import fetchFirebase from '@/services/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		// Set the necessary CORS headers
		res.setHeader('Access-Control-Allow-Origin', 'https://almertampus.xyz');
		res.setHeader('Access-Control-Allow-Methods', 'GET');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

		const response = await fetchFirebase('work');

		res.status(200).json(response);
	} catch (error) {
		res.status(400);
	}
}
