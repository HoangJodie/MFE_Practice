import { createApiClient } from '@org/shared';

export const api = createApiClient({
  baseURL: process.env.VITE_API_BASE_URL || 'http://localhost:3000',
});

export const getProducts = async () => {
  const response = await api.get('/api/products');
  return response.data;
}