import { useRoutes } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Login from "../modules/auth/pages/login/Main";
import ErrorPage from "../modules/error-page/error";
import User from "../modules/dashboard/pages/user/User";
import Activity from "../modules/dashboard/pages/activite/Activity";
import Finances from "../modules/dashboard/pages/finance/Finances";
import Droit from "../modules/dashboard/pages/droit/Droit";
import Sanction from "../modules/dashboard/pages/sanction/Sanction";
import Traçability from "../modules/dashboard/pages/traçabilite/Traçability";
import Section from "../modules/dashboard/pages/section/Section";
import Goods from "../modules/goods/pages/Main";
import Details from "../modules/goods/pages/details.tsx";
import Profile from "../modules/dashboard/pages/profile/Profile";
import ProtectedRoute from "../navigation/GuardedRoute";
import AuthRoute from "../navigation/AuthRoute";
import EditProfile from "../modules/dashboard/pages/profile/EditProfile";
import Home from '../modules/home/pages/Main'
function Router() {
  const routes = [
    {
      path: "/",
      element: <ProtectedRoute><Navbar /></ProtectedRoute>,
      children: [
        {
          path: "/dashboard/users",
          element: <User />,
        },
        {
          path: "/dashboard/profile",
          element: <Profile />,
        },
        {
          path: "/dashboard/edit-profile",
          element: <EditProfile />,
        },
        {
          path: "/dashboard/droits",
          element: <Droit />,
        },
        {
          path: "/dashboard/finances",
          element: <Finances />,
        },
        {
          path: "/dashboard/activites",
          element: <Activity />,
        },
        {
          path: "/dashboard/sanctions",
          element: <Sanction />,
        },
        {
          path: "/dashboard/sections",
          element: <Section />,
        },
        {
          path: "/dashboard/traçabilites",
          element: <Traçability />,
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
          path: "/biens/details",
          element: <Details />,
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
