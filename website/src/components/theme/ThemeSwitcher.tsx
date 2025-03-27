import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaPalette } from "react-icons/fa";
import { switchTheme } from "../../utils/ThemeSwitcher";

type Theme = "light" | "dark" | "gruvbox" | "pastel";

interface ThemeOption {
  name: Theme;
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  textColor: string;
}

const themes: ThemeOption[] = [
  {
    name: "light",
    icon: <FaSun className="text-yellow-500" />,
    label: "Light",
    bgColor: "bg-white",
    textColor: "text-gray-900",
  },
  {
    name: "dark",
    icon: <FaMoon className="text-blue-500" />,
    label: "Dark",
    bgColor: "bg-gray-900",
    textColor: "text-white",
  },
  {
    name: "gruvbox",
    icon: <FaPalette className="text-orange-500" />,
    label: "Gruvbox",
    bgColor: "bg-[#282828]",
    textColor: "text-[#ebdbb2]",
  },
  {
    name: "pastel",
    icon: <FaPalette className="text-pink-300" />,
    label: "Pastel",
    bgColor: "bg-pastel-primary",
    textColor: "text-pastel-fg-primary",
  },
];

interface ThemeSwitcherProps {
  onThemeChange: (theme: Theme) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem("selectedTheme") as Theme;
    if (savedTheme && themes.some((theme) => theme.name === savedTheme)) {
      setCurrentTheme(savedTheme);
      switchTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    switchTheme(theme);
    onThemeChange(theme);
    setIsOpen(false);
  };

  const currentThemeOption = themes.find(
    (theme) => theme.name === currentTheme,
  )!;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-opacity-80 transition-colors"
        aria-label="Theme switcher"
      >
        <span>{currentThemeOption.icon}</span>
        <span className="hidden md:inline">{currentThemeOption.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-navbar-primary text-fg-navbar-primary dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => handleThemeChange(theme.name)}
                className={`
                  w-full flex items-center px-4 py-2 text-sm
                  ${currentTheme === theme.name ? "bg-gray-100 dark:bg-gray-700" : ""}
                  hover:bg-gray-100 dark:hover:bg-gray-700
                  transition-colors
                `}
                role="menuitem"
              >
                <span className="mr-3">{theme.icon}</span>
                <span>{theme.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
