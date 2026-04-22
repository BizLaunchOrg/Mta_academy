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

        "primary-fixed": "#6200EE",
        "on-primary-fixed": "#FFFFFF",

        "surface": "#212121",
        "on-surface": "#FFFFFF",

        "surface-container-highest": "#2A2A2A",
        outline: "#9CA3AF",
      },
    },
  },
  plugins: [],
};