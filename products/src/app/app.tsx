import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductsPage from "../pages/ProductsPage";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ProductsPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
