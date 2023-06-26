import { useRoutes } from "react-router-dom";
import NavMenu from "../layouts/nav";

import Home from "../modules/home/pages/Main";

import Login from "../modules/auth/pages/login/Main";
import Register from "../modules/auth/pages/register/Main";
import ErrorPage from "../modules/error-page/error";
//
import ForgotPassword from '../modules/auth/pages/forgot-password/Main';
import ResetPassword from '../modules/auth/pages/reset-password/Main';
import Goods from "../modules/goods/pages/Main";

function Router() {
  const routes = [
    {
      path: "/",
      element: <NavMenu />,
      children: [
        {
          path: "/",
          element:<Home />
        },
        {
          path: "/goods",
          element: <Goods />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "forgot-password" ,
      element: <ForgotPassword />,
    },
    {
      path: "reset-password/:my_email" ,
      element: <ResetPassword />,
    },
    // {
    //   path: "reseting" ,
    //   element: <Reseting />,
    // },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
