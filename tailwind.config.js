/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables manual dark mode switching
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F1EDEE",
          text: "#3D5467",
          heading: "#0d263a",
          subtext: "#686963",
          card: "#ffffff",
          button: "#1a202c",
        },
        dark: {
          background: "#1a202c",
          text: "#ffffff",
          card: "#2D3748",
          button: "#4A5568",
        },
        blue: {
          100: "#cfe8fc",
          900: "#1e3a8a",
        },
        gray: {
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      boxShadow: {
        xl: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        lg: "0.5rem",
        full: "9999px",
      },
      spacing: {
        6: "1.5rem",
        10: "2.5rem",
        64: "16rem",
      },
      fontSize: {
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "4xl": "2.25rem",
      },
    },
  },
  plugins: [],
};
