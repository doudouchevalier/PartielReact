import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Focus from "../pages/focus";
import ErrorPage from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/focus/:id",
    element: <Focus />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
