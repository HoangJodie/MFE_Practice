import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import MainLayout from '../layouts/MainLayout';

const ProductsApp = lazy(() => import('products/Module'));
const CartApp = lazy(() => import('cart/Module'));
const OrdersApp = lazy(() => import('orders/Module'));

const Loading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '400px',
    fontSize: '18px'
  }}>
    Loading...
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <ProductsApp />
              </Suspense>
            ),
          },
          {
            path: 'products',
            element: (
              <Suspense fallback={<Loading />}>
                <ProductsApp />
              </Suspense>
            ),
          },
          {
            path: 'cart',
            element: (
              <Suspense fallback={<Loading />}>
                <CartApp />
              </Suspense>
            ),
          },
          {
            path: 'orders',
            element: (
              <Suspense fallback={<Loading />}>
                <OrdersApp />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);