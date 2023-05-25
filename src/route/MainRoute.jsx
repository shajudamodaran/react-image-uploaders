import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ImageEditor1 from "../pages/ImageEditor1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/image-editor1",
    element: <ImageEditor1 />,
  },
]);

function MainRoute() {
  return <RouterProvider router={router} />;
}

export default MainRoute;
