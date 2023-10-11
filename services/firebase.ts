// packages
import axios from 'axios';

// env
const API = process.env.NEXT_PUBLIC_FIREBASE_API;
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const options = {
	baseURL: API,
	'Content-Type': 'application/json',
};

const Firebase = axios.create(options);

export const getAll = async () => {
	try {
		const response = await Firebase.get(`.json?auth=${API_KEY}`);

		return response.data;
	} catch (error) {
		return error;
	}
};
