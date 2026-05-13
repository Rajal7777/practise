import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";
import CartPage from "./pages/ItemPage";
import ItemPage from "./pages/ItemPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: ":url",
        element: <ItemPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
