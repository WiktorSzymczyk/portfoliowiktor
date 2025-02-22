/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables manual dark mode switching
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#1a202c",
        },
        dark: {
          background: "#1a202c",
          text: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
