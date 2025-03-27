import React, { useState } from "react";
import { FaSun, FaMoon, FaPalette } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

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
    bgColor: "bg-gray-100",
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
    bgColor: "bg-[#f8f1f1]",
    textColor: "text-[#5c4741]",
  },
];

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    setIsOpen(false);
  };

  const currentThemeOption = themes.find((t) => t.name === theme)!;

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-opacity-80 transition-colors" aria-label="Theme switcher">
        <span>{currentThemeOption.icon}</span>
        <span className="hidden md:inline">{currentThemeOption.label}</span>
      </button>
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 ${
            theme === "light" ? "bg-white text-gray-900" : theme === "gruvbox" ? "bg-[#3c3836] text-[#ebdbb2]" : theme === "pastel" ? "bg-[#f3e9e3] text-[#5c4741]" : "bg-navbar-primary text-fg-navbar-primary dark:bg-gray-800"
          } ring-1 ring-black ring-opacity-5`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => handleThemeChange(theme.name)}
                className={
                  `w-full flex items-center px-4 py-2 text-sm ` +
                  (theme.name === currentThemeOption.name
                    ? theme.name === "gruvbox"
                      ? "bg-[#504945] text-[#ebdbb2]"
                      : theme.name === "pastel"
                      ? "bg-[#e8d5cc] text-[#5c4741]"
                      : "bg-gray-100 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700")
                }
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
