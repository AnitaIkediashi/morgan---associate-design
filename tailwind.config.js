/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Abril: ["Abril Fatface", "cursive"],
      Playfair: ["Playfair Display", "sans-serif"],
    },
    extend: {
      colors: {
        "color-gray-100": "#edf1d6",
        "color-gray-200": "#9dc086",
        "color-gray-300": "#609966",
        "color-gray-400": "#40513b",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
