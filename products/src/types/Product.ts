export interface Product {
    id: string;
    name: string;
    image: string;
    rating: {
        stars: number;
        count: number;
    };
    priceCents: number;
    keywords: string[];
}

export type ProductsProps = {
    products: Product[];
};