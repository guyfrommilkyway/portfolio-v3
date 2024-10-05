import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { IFirebase } from './firebase';

class Services {
    protected client: AxiosInstance;

    constructor() {
        const Axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_URL,
            headers: { 'Content-Type': 'application/json' },
        });

        Axios.interceptors.request.use(
            async config => config,
            error => {
                console.log('AXIOS_INTERCEPTOR_REQUEST_ERROR', error);
                Promise.reject(error);
            },
        );

        Axios.interceptors.response.use(
            async response => response,
            async error => {
                console.log('AXIOS_INTERCEPTOR_RESPONSE_ERROR', error);

                Promise.reject(error);
            },
        );

        this.client = Axios;
    }

    async sendByGet(url: string) {
        try {
            const response = await this.client.get(url);

            return response.data;
        } catch (error: any) {
            return error;
        }
    }

    async sendByPost(url: string, data: any, config: any) {
        try {
            const response = await this.client.post(url, data, config);

            return response.data;
        } catch (error: any) {
            return error;
        }
    }

    async getFirebase(): Promise<AxiosResponse<IFirebase>> {
        return await this.sendByGet('/v1/firebase');
    }

    async getUser(): Promise<AxiosResponse<any>> {
        return await this.sendByGet('/v1/github/user');
    }

    async getRepo(): Promise<AxiosResponse<any>> {
        return await this.sendByGet('/v1/github/repositories');
    }
}

export default Services;
