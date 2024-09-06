/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          default: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          dark: colors.neutral[500],
          ["dark-hover"]: colors.neutral[800],
        },
      },
    },
  },
  plugins: [],
};
