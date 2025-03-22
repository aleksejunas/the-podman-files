import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import "../../index.css";

const Navbar = () => {
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          ALEKSEJUNAS.NO
        </Typography>
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
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Contact Us</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
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
    </Navbar>
  );
};

export default Navbar;
