import { Product } from '@org/shared';
import ProductCard from '../features/components/ProductCard';
import { useProducts } from '../features/hooks/useProducts';
import './ProductsPage.css';

export default function ProductsPage() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <div className="loading-container">
        <div>Loading products...</div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="error-container">
        <div>Error loading products. Please try again later.</div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="products-grid">
        {data.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}