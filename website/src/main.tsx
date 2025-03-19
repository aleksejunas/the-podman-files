import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeSwitcher from "./components/ThemeSwitcher";
// import Navbar from "./components/navbar/Navbar";
// import { BrowserRouter as Router } from "react-router-dom";
import "typeface-roboto";

// FIXME: Get the global navbar working

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Router> */}
    <App />
    {/* <Navbar /> */}
    <ThemeSwitcher />
    {/* </Router> */}
  </StrictMode>,
);
