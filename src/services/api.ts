import axios, { AxiosInstance, AxiosResponse } from 'axios';

import API from '@/constants/api';

import { IFirebase } from '@/services/firebase';
import { IRepo, IUser } from '@/services/github';

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

  async sendByGet(url: string): Promise<AxiosResponse<any>> {
    try {
      const response = await this.client.get(url);

      return response;
    } catch (error: any) {
      return error;
    }
  }

  async sendByPost(url: string, data: any, config: any) {
    try {
      const response = await this.client.post(url, data, config);

      return response;
    } catch (error: any) {
      return error;
    }
  }

  async getFirebase(): Promise<AxiosResponse<IFirebase>> {
    return await this.sendByGet(API.FIREBASE);
  }

  async getUser(): Promise<AxiosResponse<IUser>> {
    return await this.sendByGet(API.GITHUB_USER);
  }

  async getRepositories(): Promise<AxiosResponse<IRepo>> {
    return await this.sendByGet(API.GITHUB_REPO);
  }
}

export default Services;
