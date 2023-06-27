import { useRoutes } from "react-router-dom";

import Navbar from "../layouts/navbar";
import Login from "../modules/auth/pages/login/Main";
import ErrorPage from "../modules/error-page/error";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import User from "../modules/dashboard/pages/user/User";
import Activity from "../modules/dashboard/pages/activite/Activity";
import Finances from "../modules/dashboard/pages/finance/Finances";
import Droit from "../modules/dashboard/pages/droit/Droit";
import Sanction from "../modules/dashboard/pages/sanction/Sanction";
import Traçability from "../modules/dashboard/pages/traçabilite/Traçability";
import Section from "../modules/dashboard/pages/section/Section";
import Goods from "../modules/goods/pages/Main";
import Details from "../modules/goods/pages/details.tsx";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/dashboard/",
          element: <Dashboard />,
          children: [
            {
              path: "/dashboard/users",
              element: <User />,
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
          ],
        },
        {
          path: "/goods",
          element: <Goods />,
        },
        {
          path: "/goods/details",
          element: <Details />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
