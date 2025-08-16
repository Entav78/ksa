/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts,jsx,tsx}", "!./node_modules/**/*"],

  darkMode: 'class', 

  theme: {
    extend: {
      keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
  },
  animation: {
    fadeIn: "fadeIn 0.3s ease-out",
  },
      colors: {
        customTeal: "#BCDFD3",
      },
    },
  },
};


