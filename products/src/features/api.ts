import { createApiClient } from '@shared/api';
export const api = createApiClient({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
});

export const addCartItem = (data: { productId: string; quantity: number }) =>
  api.post('/cart', data);

export const removeCartItem = (productId: string) =>
  api.delete(`/cart/${productId}`);

export const updateCartItemDelivery = (
  productId: string,
  deliveryOptionId: number
) => api.patch(`/cart/${productId}`, { deliveryOptionId });

export const getProducts = () => api.get('/products').then((res) => res.data);
