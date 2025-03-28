// utils/ThemeSwitcher.ts

export function switchTheme(theme: string) {
  const root = document.documentElement;

  // Remove all existing theme classes dynamically
  root.className = root.className
    .split(" ")
    .filter((cls) => !cls.startsWith("theme-") && cls !== "dark")
    .join(" ");

  // Reset any inline styles that might have been set
  root.style.backgroundColor = "";
  root.style.color = "";

  // Apply the selected theme
  if (theme === "gruvbox" || theme === "pastel") {
    root.classList.add(`theme-${theme}`);
  } else if (theme === "dark") {
    // Add both classes to ensure dark theme works everywhere
    root.classList.add("dark");
    root.classList.add("theme-dark");
  } else if (theme === "light") {
    // Light theme doesn't need a special class as it's the default
  } else {
    console.warn(`Unknown theme: ${theme}. Falling back to light theme.`);
  }

  // Use the same key as ThemeContext for consistency
  localStorage.setItem("theme", theme);
}

export function initializeTheme() {
  // Use the same key as ThemeContext for consistency
  const savedTheme = localStorage.getItem("theme") || "light";
  switchTheme(savedTheme);
}

// Add logic for other themes here
