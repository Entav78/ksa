/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts,jsx,tsx}", "!./node_modules/**/*"],

  darkMode: 'class', 

  theme: {
    extend: {
      colors: {
        customTeal: "#BCDFD3",
      },
    },
  },
};


