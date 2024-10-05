import axios from 'axios';

import { ContactForm } from '@/components/routes/home/components/Contact';

const options = {
    'baseURL': '/api/v1/',
    'Content-Type': 'application/json',
};

const SendGrid = axios.create(options);

const sendEmail = async (data: ContactForm) => {
    try {
        const response = await SendGrid.post('contact', data);

        return response;
    } catch (error: any) {
        return error.response;
    }
};

export { sendEmail };
