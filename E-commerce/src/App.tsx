import Layout from "./layout/layout";
import NotFoundPage from "./pages/NotFoundPage";
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";


const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
  }
];


const router = createBrowserRouter(routes);

export default function App() {

  return <RouterProvider router={router} />;

} 