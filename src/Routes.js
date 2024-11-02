import React from "react";
import { useRoutes } from "react-router-dom";
import TopNavigationBar from "./Pages/TopNavigationBar";
import LandingScreen from "./Pages/LandingScreen/LandingScreen";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <TopNavigationBar />,
      children: [{ path: "/", element: <LandingScreen /> }],
    },
  ]);

  return routes;
};

export default Routes;
