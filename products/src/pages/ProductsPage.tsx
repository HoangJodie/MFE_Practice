import './ProductPage.css';
import ProductCard from '../features/components/ProductCard';
import { Product } from '../types/Product';
import { useProducts } from '../features/hooks/useProducts';

export default function ProductsPage() {
    const { data, isLoading, isError } = useProducts();
    if (isLoading) return <div>Loading...</div>;
    if (isError || !data) return <div>Error loading products.</div>;

    return (
        <>
            <div className="home-page">
                <div className="products-grid">
                    {data.map((product: Product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
}
