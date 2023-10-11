// packages
import { NextApiRequest, NextApiResponse } from 'next';

// utils
import fetchFirebase from '@/services/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		// Set the necessary CORS headers
		res.setHeader('Access-Control-Allow-Credentials', 'true');
		res.setHeader('Access-Control-Allow-Origin', 'https://almertampus.xyz, https://*.vercel.app');
		res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, PATCH, POST, PUT, OPTIONS');
		res.setHeader(
			'Access-Control-Allow-Headers',
			'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
		);

		// specific logic for the preflight request
		if (req.method === 'OPTIONS') {
			res.status(200).end();
			return;
		}

		const response = await fetchFirebase('');

		res.status(200).json(response);
	} catch (error) {
		res.status(400);
	}
}
