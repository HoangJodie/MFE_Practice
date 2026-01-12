import axios from 'axios';
import { paramsSerializer } from '../utils/paramsSerializer.js';

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

  // Response interceptor
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return apiClient;
};
