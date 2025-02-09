import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Focus from "../pages/focus";
import ErrorPage from "../pages/404";
import Layout from "../components/Layout";
import Movies from "../pages/movies";
import Series from "../pages/series";
import Popular from "../pages/popular";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,  // Applique le Layout à toutes les pages
      children: [
          { path: "/", element: <Home /> },
          { path: "/focus/:id", element: <Focus /> },
          { path: "/focus/:id", element: <Focus /> },
          { path: "/data/type:movie", element: <Movies /> },
          { path: "/data/type:tv", element: <Series /> },
          { path: "/data/type:all", element: <Popular /> },
          { path: "*", element: <ErrorPage /> }
      ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
