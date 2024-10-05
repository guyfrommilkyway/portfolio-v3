import axios from 'axios';

export interface IEducation {
    duration: string;
    program: string;
    university: string;
}

export interface IExperience {
    company: string;
    duration: string;
    link: string;
    location: string;
    setup: string;
    title: string;
    website: string;
}

export interface IHero {
    description: string;
    headline: string;
    location: string;
    title: string;
}

export interface IFirebase {
    education?: {
        [key: string]: IEducation;
    };
    experience?: {
        [key: string]: IExperience;
    };
    hero?: IHero;
}

export interface IFirebaseResponse {
    status: number;
    data: IFirebase;
}

const options = {
    'baseURL': process.env.NEXT_PUBLIC_FIREBASE_API,
    'Content-Type': 'application/json',
};

const Firebase = axios.create(options);

const getFirebase = async (endpoint: string = ''): Promise<IFirebaseResponse> => {
    try {
        const response = await Firebase.get(`${endpoint}.json?auth=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`);

        return { status: response?.status, data: response?.data as IFirebase };
    } catch (error: any) {
        return error;
    }
};

export default getFirebase;
