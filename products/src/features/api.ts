import { createApiClient} from '@shared/api';
export const api = createApiClient({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
