// FIX: Fix the background(behind) the navbar to not be white
// TODO: Testing the dimming functionality in  leader + u + D
// TODO: Check out more shadcn
// TODO: Fix the rest of the styling around the navbar
import React from "react";
import { Navbar as MTNavbar, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { useTheme } from "../theme/ThemeContext";
import "../../index.css";

const Navbar = () => {
  const { theme } = useTheme();

  // Choose navbar styling based on theme
  const getNavbarStyle = () => {
    switch (theme) {
      case "light":
        return "bg-gray-100 text-gray-900";
      case "dark":
        return "bg-[#343a40] text-[#f8f9fa]"; // Using exact dark theme colors from CSS variables
      case "gruvbox":
        return "bg-gruvbox-bg-secondary text-gruvbox-fg-primary";
      case "pastel":
        return "bg-pastel-bg-secondary text-pastel-fg-primary";
      default:
        return "bg-gray-100 text-gray-900";
    }
  };

  return (
    <MTNavbar className={`mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 ${getNavbarStyle()} border-2 border-blue-400`} onPointerEnterCapture={() => {}} placeholder={undefined} onPointerLeaveCapture={undefined}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">ALEKSEJUNAS.NO</h1>
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <Link to="/" className="text-fg-primary hover:text-fg-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/welcome" className="text-fg-primary hover:text-fg-secondary">
                Welcome
              </Link>
            </li>
            <li>
              <Link to="/fileserver" className="text-fg-primary hover:text-fg-secondary">
                File Server
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-fg-primary hover:text-fg-secondary">
                Login
              </Link>
            </li>
            <li>
              <Link to="/landingpage" className="text-fg-primary hover:text-fg-secondary">
                Landing Page
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 bg-primary">
          <ThemeSwitcher />
          <Button variant="gradient" size="sm" className="hidden lg:inline-block" onClick={() => alert("Contact Us clicked")} onPointerLeaveCapture={() => {}} placeholder={undefined} onPointerEnterCapture={undefined}>
            <span>Contact Us</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            placeholder={undefined}
            onClick={() => alert("Menu clicked")}
            onPointerLeaveCapture={() => {}}
            onPointerEnterCapture={undefined}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </IconButton>
        </div>
      </div>
    </MTNavbar>
  );
};

export default Navbar;
