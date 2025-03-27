# Theming System Usage Guide

## Overview

The theming system allows dynamic switching between predefined themes (e.g., light, dark, gruvbox, pastel) in the application. This guide explains how to use and extend the theming system.

## How to Use the Theming System

### 1. ThemeSwitcher Component

- The `ThemeSwitcher` component provides a user interface for selecting a theme.
- It is already integrated into the `Navbar` component.
- To use it elsewhere, simply import and include it in your component:

  ```tsx
  import ThemeSwitcher from "../components/theme/ThemeSwitcher";

  const MyComponent = () => (
    <div>
      <ThemeSwitcher />
    </div>
  );
  export default MyComponent;
  ```

### 2. ThemeProvider

- The `ThemeProvider` must wrap the root of your application to provide theme context.
- This is already set up in `App.tsx`:

  ```tsx
  import { ThemeProvider } from "./components/theme/ThemeContext";
  import AppNavigator from "./navigation/AppNavigator";

  const App = () => (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
  export default App;
  ```

### 3. Using the useTheme Hook

- The `useTheme` hook gives components access to the current theme and the ability to change it:

  ```tsx
  import { useTheme } from "../components/theme/ThemeContext";

  const MyThemedComponent = () => {
    const { theme, setTheme } = useTheme();

    return (
      <div>
        <p>Current theme: {theme}</p>
        <button onClick={() => setTheme("dark")}>Switch to Dark</button>
      </div>
    );
  };
  ```

### 4. Adding New Themes

- Define new themes in `tailwind.config.ts` under the `extend.colors` section.
- Example:
  ```js
  colors: {
    newTheme: {
      "bg-primary": "#yourColor",
      "fg-primary": "#yourColor",
      // Add more colors as needed
    },
  }
  ```
- Add the new theme to the `themes` array in `ThemeSwitcher.tsx`:
  ```tsx
  {
    name: "newTheme",
    icon: <YourIconComponent />,
    label: "New Theme",
    bgColor: "bg-newTheme-primary",
    textColor: "text-newTheme-primary",
  }
  ```

### 5. Using Theme-Specific Styles

- Use Tailwind CSS classes like `bg-primary` and `text-primary` in your components.
- These classes will dynamically change based on the current theme.
- Example:
  ```tsx
  <div className="bg-primary text-fg-primary p-4">Themed content</div>
  ```

### 6. Forcing Re-renders for Theme Changes

- If a component doesn't update when the theme changes, use the `theme` value as a `key` prop:

  ```tsx
  const { theme } = useTheme();

  return (
    <div key={theme} className="themed-component">
      Content that will re-render on theme change
    </div>
  );
  ```

## Technical Implementation Details

### 1. Theme Storage

- The current theme is stored in `localStorage` under the key `"theme"`.
- The theme is initialized from `localStorage` or defaults to `"light"`.

### 2. Theme Application

- The `ThemeContext` updates the `data-theme` attribute on the `document.documentElement` (`<html>` element).
- Tailwind CSS is configured with `darkMode: ["attribute", "data-theme"]` to detect and apply theme styles.
- The original `switchTheme` function from `utils/ThemeSwitcher.ts` is also used to ensure compatibility with existing code.

### 3. Theme Switching Logic

```tsx
// In ThemeContext.tsx
useEffect(() => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  switchTheme(theme); // Uses the utility function for backward compatibility
}, [theme]);
```

## Troubleshooting

### Theme Not Changing Immediately

- Ensure the `AppNavigator.tsx` has the `key={theme}` prop to force a re-render.
- Verify that Tailwind is configured with `darkMode: ["attribute", "data-theme"]`.
- Check if the component is properly wrapped with `ThemeProvider`.

### Custom Theme Not Working

- Make sure your theme colors are correctly defined in `tailwind.config.ts`.
- Verify that the theme name in `ThemeSwitcher.tsx` matches the theme key in the config.
- Check browser console for any errors related to the theme.

## Conclusion

The theming system is designed to be flexible, maintainable, and provide immediate visual feedback. With the centralized `ThemeContext` and dynamic re-rendering, theme changes are applied consistently across the application.
