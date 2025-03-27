// utils/ThemeSwitcher.ts

export function switchTheme(theme: string) {
  const root = document.documentElement;

  // Remove all existing theme classes dynamically
  root.className = root.className
    .split(" ")
    .filter((cls) => !cls.startsWith("theme-") && cls !== "dark")
    .join(" ");

  // Apply the selected theme
  if (theme === "gruvbox" || theme === "pastel") {
    root.classList.add(`theme-${theme}`);
  } else if (theme === "dark") {
    root.classList.add("dark");
  } else {
    console.warn(`Unknown theme: ${theme}. Falling back to light theme.`);
  }

  localStorage.setItem("selectedTheme", theme);
}

export function initializeTheme() {
  const savedTheme = localStorage.getItem("selectedTheme") || "light";
  switchTheme(savedTheme);
}

// switch (theme) {
//   case "gruvbox":
//     root.classList.add("theme-gruvbox");
//     break;
//   case "pastel":
//     root.classList.add("theme-pastel");
//     break;
//   default:
//     break;
// }

// Add logic for other themes here
