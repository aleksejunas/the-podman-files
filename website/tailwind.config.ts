import type { Config } from "tailwindcss";
import { stone } from "tailwindcss/colors";
import type { PluginCreator } from "tailwindcss/types/config";
import tailwindcssAnimate from "tailwindcss-animate";

// Removed the unused `PluginCreator` import
const customUtilitiesPlugin: PluginCreator = ({ addUtilities, theme }) => {
  const gruvboxColors = theme("colors.gruvbox") as Record<string, string>;
  const pastelColors = theme("colors.pastel") as Record<string, string>;

  const newUtilities = {
    // Gruvbox
    ".text-fg-primary": {
      color: gruvboxColors["fg-primary"],
    },
    ".text-fg-secondary": {
      color: gruvboxColors["fg-secondary"],
    },
    ".hover\\:text-fg-primary:hover": {
      color: gruvboxColors["fg-primary"],
    },
    ".hover\\:text-fg-secondary:hover": {
      color: gruvboxColors["fg-secondary"],
    },

    // Pastel
    ".text-pastel-fg-primary": {
      color: pastelColors["fg-primary"],
    },
    ".text-pastel-fg-secondary": {
      color: pastelColors["fg-secondary"],
    },
    ".hover\\:text-pastel-fg-primary:hover": {
      color: pastelColors["fg-primary"],
    },
    ".hover\\:text-pastel-fg-secondary:hover": {
      color: pastelColors["fg-secondary"],
    },
  };

  addUtilities(newUtilities, { respectPrefix: false, respectImportant: false });
};

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        light: {
          "bg-primary": "#f8f9fa", // Light theme background
          "fg-primary": "#212529", // Light theme text
          "fg-secondary": "#495057", // Secondary text
        },
        gruvbox: {
          "bg-primary": "#282828",
          "bg-secondary": "#3c3836",
          "bg-tertiary": "#504945",
          "fg-primary": "#ebdbb2",
          "fg-secondary": "#d5c4a1",
          "fg-tertiary": "#bdae93",
          "fg-quaternary": "#a89984",
          red: "#cc241d",
          green: "#98971a",
          yellow: "#d79921",
          blue: "#458588",
          purple: "#b16286",
          aqua: "#689d6a",
          orange: "#d65d0e",
          gray: "#928374",
          warning: "#fabd2f",
          danger: "#fb4934",
          sanityPeach: "#F77769",
        },
        pastel: {
          "bg-primary": "#f8f1f1",
          "bg-secondary": "#e6e6fa",
          "bg-tertiary": "#ffe4e1",
          "fg-primary": "#5c4741",
          "fg-secondary": "#808080",
          "fg-tertiary": "#a9a9a9",
          "fg-quaternary": "#c0c0c0",
          red: "#ffb6c1",
          green: "#98fb98",
          yellow: "#fffacd",
          blue: "#add8e6",
          purple: "#dda0dd",
          aqua: "#e0ffff",
          orange: "#ffdab9",
          gray: "#d3d3d3",
          warning: "#ffeb3b",
          danger: "#ff5252",
          sanityPeach: "#F77769",
        },
        stone, // Correctly imported Tailwind's stone palette
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [customUtilitiesPlugin, tailwindcssAnimate],
};

export default config;
