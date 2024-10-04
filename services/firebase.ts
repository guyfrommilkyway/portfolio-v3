// packages
import axios from 'axios';

const options = {
  'baseURL': process.env.NEXT_PUBLIC_FIREBASE_API,
  'Content-Type': 'application/json',
};

const Firebase = axios.create(options);

const getFirebase = async (
  endpoint: string = '',
): Promise<IFirebaseResponse> => {
  try {
    const response = await Firebase.get(
      `${endpoint}.json?auth=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
    );

    return { status: response?.status, data: response?.data as IFirebase };
  } catch (error: any) {
    return error;
  }
};

export default getFirebase;
