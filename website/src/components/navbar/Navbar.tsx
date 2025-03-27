// FIX: Fix the background(behind) the navbar to not be white
// TODO: Testing the dimming functionality in  leader + u + D
// TODO: Check out more shadcn
// TODO: Fix the rest of the styling around the navbar
import React from "react";
import {
  Navbar as MTNavbar,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import "../../index.css";

const Navbar = () => {
  React.useEffect(() => {
    const root = document.documentElement;

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "default";
    root.classList.add(`theme-${savedTheme}`);

    // Set the initial background based on the saved theme
    root.style.backgroundColor =
      savedTheme === "gruvbox"
        ? "#282828" // Gruvbox background color
        : savedTheme === "pastel"
          ? "#f8f1f1" // Pastel background color
          : "#ffffff"; // Default background color
  }, []);

  const handleThemeChange = (newTheme: string) => {
    const root = document.documentElement;
    // Remove existing theme classes
    root.classList.remove("theme-gruvbox", "theme-pastel", "theme-default");
    // Add the new theme class
    root.classList.add(`theme-${newTheme}`);
    // Save the new theme to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <MTNavbar
      // TODO: Find out why bg-navbar-primary is not working
      className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 dark:bg-navbar-primary"
      onPointerEnterCapture={() => {}}
      placeholder={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-medium text-lg text-fg-primary"
        >
          ALEKSEJUNAS.NO
        </Link>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/" className="text-fg-primary hover:text-fg-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/welcome"
                className="text-fg-primary hover:text-fg-secondary"
              >
                Welcome
              </Link>
            </li>
            <li>
              <Link
                to="/fileserver"
                className="text-fg-primary hover:text-fg-secondary"
              >
                File Server
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-fg-primary hover:text-fg-secondary"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/landingpage"
                className="text-fg-primary hover:text-fg-secondary"
              >
                Landing Page
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 bg-primary">
          <ThemeSwitcher onThemeChange={handleThemeChange} />
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            onClick={() => alert("Contact Us clicked")}
            onPointerLeaveCapture={() => {}}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
          >
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </MTNavbar>
  );
};

export default Navbar;
