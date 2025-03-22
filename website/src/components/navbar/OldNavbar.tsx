// TODO: Alter the Navbar to the one in the provided in the following link: https://www.material-tailwind.com/docs/react/navbar

import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import "../../index.css";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  //
  // const handleMenuToggle = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className="navbar bg-[orange] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">ALEKSEJUNAS.NO</h1>
        <div className="flex items-center">
          <div className="flex space-x-6 mr-6">
            <Link
              className="text-fg-primary hover:text-fg-secondary transition-colors"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-fg-primary hover:text-fg-secondary transition-colors"
              to="/welcome"
            >
              Welcome
            </Link>
            <Link
              className="text-fg-primary hover:text-fg-secondary transition-colors"
              to="/fileserver"
            >
              File Server
            </Link>
            <Link
              className="text-fg-primary hover:text-fg-secondary transition-colors"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-fg-primary hover:text-fg-secondary transition-colors"
              to="/landingpage"
            >
              Landing Page
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
