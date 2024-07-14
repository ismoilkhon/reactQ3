/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import ErrorPage from "./pages/error";
import { ProductDetail } from "./pages/product-detail";

import { Products } from "./pages/products";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products />,
      errorElement: <ErrorPage />,
    },
    {
      path: ":id",
      element: <ProductDetail />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
