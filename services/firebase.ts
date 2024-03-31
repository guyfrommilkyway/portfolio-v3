// packages
import axios from 'axios';

// env
const API = process.env.NEXT_PUBLIC_FIREBASE_API;
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const options = {
  'baseURL': API,
  'Content-Type': 'application/json',
};

const Firebase = axios.create(options);

const fetchFirebase = async (
  endpoint: string = '',
): Promise<IFirebaseResponse> => {
  try {
    const response = await Firebase.get(`${endpoint}.json?auth=${API_KEY}`);

    return { status: response?.status, data: response?.data as IFirebase };
  } catch (error: any) {
    return error;
  }
};

export default fetchFirebase;
