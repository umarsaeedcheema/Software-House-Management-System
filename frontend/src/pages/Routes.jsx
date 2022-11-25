import React from "react";
import App from "../App";
import ErrorPage from "./ErrorPage";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
        path: "/login",
        element: <LogIn />,
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
