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
  } else if (theme === "light") {
    root.style.backgroundColor = "#f8f9fa"; // Light theme background
    root.style.color = "#212529"; // Light theme text color
  } else {
    console.warn(`Unknown theme: ${theme}. Falling back to light theme.`);
  }

  localStorage.setItem("selectedTheme", theme);
}

export function initializeTheme() {
  const savedTheme = localStorage.getItem("selectedTheme") || "light";
  switchTheme(savedTheme);
}

// Add logic for other themes here
