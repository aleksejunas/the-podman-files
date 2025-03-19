import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
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
          "bg-primary": "#f8f8ff",
          "bg-secondary": "#e6e6fa",
          "bg-tertiary": "#ffe4e1",
          "fg-primary": "#696969",
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
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const gruvboxColors = theme("colors.gruvbox");
      const pastelColors = theme("colors.pastel");

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

      addUtilities(newUtilities, ["hover"]);
    },
  ],
};

export default config;
