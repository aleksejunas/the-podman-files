// src/navigation/routes.js
// import { Component } from "react";
import FileServerPage from "../pages/FileServerPage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import WelcomePage from "../pages/WelcomePage";
import LoginPage from "../pages/LoginPage";

type RouteType = {
  path: string;
  component: React.ComponentType;
};

export const routes: RouteType[] = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/welcome",
    component: WelcomePage,
  },
  {
    path: "/fileserver",
    component: FileServerPage,
  },
  {
    path: "/landingpage",
    component: LandingPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];

export default routes;
