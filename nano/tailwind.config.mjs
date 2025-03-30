import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode using the 'dark' class
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        sage: {
          100: "#E9EFE7",
          600: "#4B5563",
        },
        rose: {
          100: "#FFE4E6",
          600: "#881337",
        },
        lavender: {
          100: "#F3E8FF",
          600: "#581C87",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
