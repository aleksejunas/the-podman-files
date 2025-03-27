import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "../components/navbar/Navbar";
import HomePage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";
import FileServerPage from "../pages/FileServerPage";
import ContactPage from "../pages/ContactPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import { useTheme } from "../components/theme/ThemeContext";

// Routes where we don't want to show the navbar
const routesWithoutNavbar = ["/login"];

const AppContent: React.FC = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const showNavbar = !routesWithoutNavbar.includes(location.pathname);

  return (
    <div key={theme} className="app-content">
      {showNavbar && <Navbar />}
      <Routes>
        {routes.map((route, index) => {
          // Render the route component dynamically
          const Component = route.component;
          return <Route key={index} path={route.path} element={<Component />} />;
        })}
        {/* Default and additional routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/fileserver" element={<FileServerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default AppNavigator;
