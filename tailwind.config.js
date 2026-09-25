/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#8a2be2",
        pink: "#e6007e",
        pink2: "#d80091",
        pink3: "#c90092",
        blue: "#2b7bd6",
        blue2: "#18b9df",
        blue3: "#1cb5e0",
        green: "#27ae60",
        orange: "#f5a623",
        danger: "#e74c5b",
      },
      fontFamily: {
        segoe: ['"Segoe UI"', "sans-serif"],
        arial: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
