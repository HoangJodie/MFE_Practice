import { Product, formatMoney } from '@org/shared';

export default function ProductCard(product : Product) {
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img 
          className="product-image"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div className="product-rating-container">
        <img 
          className="product-rating-stars"
          src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
          alt={`${product.rating.stars} stars`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">
        {formatMoney(product.priceCents)}
      </div>
    </div>
  );
}