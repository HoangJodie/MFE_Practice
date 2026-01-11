export interface DeliveryOption {
    id: number;
    deliveryDays: number;
    priceCents: number;
    createdAt: string;
    updatedAt: string;
    estimatedDeliveryTimeMs: number;
}