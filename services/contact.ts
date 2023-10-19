// packages
import axios from 'axios';

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
    return error;
  }
};

export { sendEmail };
