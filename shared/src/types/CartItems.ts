import { Product } from "./Product";

export type CartItems = {
  id: number;
  productId: string;
  quantity: number;
  deliveryOptionId: number;
  createdAt: string;
  updatedAt: string;
};

export type CartItemDetail = CartItems & {
  product: Product;
};

export type CartItemDetailsProps = {
  cartItems: CartItemDetail[];
  loadCart: () => void;
};

export type CartItemsProps = {
    cartItems: CartItems[];
};

export interface PaymentSummary {
  totalItems: number;
  productCostCents: number;
  shippingCostCents: number;
  totalCostBeforeTaxCents: number;
  taxCents: number;
  totalCostCents: number;
}
