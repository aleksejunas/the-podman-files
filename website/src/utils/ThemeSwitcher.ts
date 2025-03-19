// utils/ThemeSwitcher.ts

export function switchTheme(theme: string) {
  const root = document.documentElement;

  root.classList.remove("theme-gruvbox");
  // Remove other theme classes here
  root.classList.remove("theme-pastel");

  if (theme === "gruvbox") {
    root.classList.add("theme-gruvbox");
  }

  if (theme === "pastel") {
    root.classList.add("theme-pastel");
  }

  switch (theme) {
    case "gruvbox":
      root.classList.add("theme-gruvbox");
      break;
    case "pastel":
      root.classList.add("theme-pastel");
      break;
    default:
      break;
  }

  // Add logic for other themes here
}
