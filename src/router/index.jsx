import { useRoutes } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Login from "../modules/auth/pages/login/Main";
import ErrorPage from "../modules/error-page/error";
import User from "../modules/dashboard/pages/user/User";
import Activity from "../modules/dashboard/pages/activite/Activity";
import Finances from "../modules/dashboard/pages/finance/Finances";
import Traçability from "../modules/dashboard/pages/traçabilite/Traçability";
import Section from "../modules/dashboard/pages/section/Section";
import Goods from "../modules/goods/pages/Main";
import Details from "../modules/goods/pages/details.tsx";
import Profile from "../modules/dashboard/pages/profile/Profile";
import ProtectedRoute from "../navigation/GuardedRoute";
import AuthRoute from "../navigation/AuthRoute";
import EditProfile from "../modules/dashboard/pages/profile/EditProfile";
import Home from '../modules/home/pages/Main'
import ShowActivity from "../components/showActivity/ShowActivity";
function Router() {
  const routes = [
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/dashboard/users",
          element: <ProtectedRoute><User /></ProtectedRoute>,
        },
        {
          path: "/dashboard/profile",
          element: <ProtectedRoute><Profile /></ProtectedRoute>,
        },
        {
          path: "/dashboard/edit-profile",
          element: <ProtectedRoute><EditProfile /></ProtectedRoute>,
        },
        {
          path: "/dashboard/finances",
          element: <ProtectedRoute><Finances /></ProtectedRoute>,
        },
        {
          path: "/dashboard/activites",
          element: <ProtectedRoute><Activity /></ProtectedRoute>,
        },
        {
          path: "/dashboard/sections",
          element: <ProtectedRoute><Section /></ProtectedRoute>,
        },
        {
          path: "/dashboard/traçabilites",
          element: <ProtectedRoute><Traçability /></ProtectedRoute>,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/biens",
          element: <Goods />,
        },
        {
          path: "/activites",
          element: <ShowActivity />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthRoute redirectPath="/dashboard/users"><Login /></AuthRoute>,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
