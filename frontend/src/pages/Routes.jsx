import React from "react";
import App from "../App";
import ErrorPage from "./ErrorPage";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import RaisePrivilege from "./RaisePrivilege"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import CreateEmployeeReview from "./CreateEmployeeReview";

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
  },
  {
        path: "/raise-privilege",
        element: <RaisePrivilege />,
  },
  {
        path: "/create-employee-review",
        element: <CreateEmployeeReview />,
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
