import React from "react";
import App from "../App";
import ErrorPage from "./ErrorPage";
import SignUp from "./SignUp";
import RaisePrivilege from "./RaisePrivilege";
import LoginPopUp from "../components/LoginPopUp";
import Login from "./Login";
import HRHomepage from "./HRHomepage";
import NoMatch from "./NoMatch";
import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import CreateEmployeeReview from "./CreateEmployeeReview";
import UpdatePassword from '../components/UpdatePassword';

const routes = [
  {
    path: "*",
    element: <NoMatch />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/loginpopup",
    element: <LoginPopUp></LoginPopUp>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/updatepassword",
    element: <UpdatePassword />,
    errorElement: <ErrorPage />
  },
  {
    path: "hrHome",
    element: <HRHomepage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "addEmployee",
        element: <AddEmployee />,
        errorElement: <ErrorPage />,
      },
      {
        path: "viewEmployee",
        element: <ViewEmployee />,
        errorElement: <ErrorPage />,
      },
      {
        path: "raise-privilege",
        element: <RaisePrivilege/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "create-employee-review",
        element: <CreateEmployeeReview/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "view-employees-review",
        element: <ViewEmployee/>,
        errorElement: <ErrorPage />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
