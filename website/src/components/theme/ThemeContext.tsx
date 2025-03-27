import React, { createContext, useContext, useState, useEffect } from "react";
import { switchTheme } from "../../utils/ThemeSwitcher";

// Define the shape of the theme context
interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => {
    // Load the initial theme from localStorage or default to 'light'
    return localStorage.getItem("theme") || "light";
  });

  // Apply the theme when it changes
  useEffect(() => {
    // Save the theme to localStorage
    localStorage.setItem("theme", theme);

    // Apply the theme using the existing switchTheme function
    switchTheme(theme);

    // Also set the data-theme attribute for Tailwind
    document.documentElement.setAttribute("data-theme", theme);

    console.log("Theme set to:", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
