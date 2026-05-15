import Layout from "./layout/layout";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartProvider from "./context/CartContext";

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/:url',
        element: <ProductPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      }
    ]
  }

];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}