import axios, { InternalAxiosRequestConfig } from 'axios';
import { paramsSerializer } from '../utils/paramsSerializer';

export interface ApiClientOptions {
  baseURL: string;
  timeout?: number;
}

export const createApiClient = (options: ApiClientOptions) => {
  const apiClient = axios.create({
    baseURL: options.baseURL,
    timeout: options.timeout ?? 5000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    paramsSerializer,
  });

  // Request interceptor
  apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token =
        localStorage.getItem('accessToken') ||
        sessionStorage.getItem('accessToken');

      if (token && !config.headers?.has('Authorization')) {
        config.headers.set('Authorization', `${token}`);
      }

      return config;
    },
  );

  // Response interceptor
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return apiClient;
};
