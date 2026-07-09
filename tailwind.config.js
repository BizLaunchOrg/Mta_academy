/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6200EE",
        tertiary: "#7C4DFF",
        brand: {
          primary: "#6200EE",
          accent: "#7C4DFF",
          dark: "#1f2937",
          light: "#f3f4f6",
          bg: "#fdfbf9",
        },

        "primary-fixed": "#6200EE",
        "on-primary-fixed": "#FFFFFF",

        "surface": "#212121",
        "on-surface": "#FFFFFF",

        "surface-container-highest": "#2A2A2A",
        outline: "#9CA3AF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        slab: ['"Roboto Slab"', '"Courier New"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
