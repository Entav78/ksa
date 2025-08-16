/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts,jsx,tsx}", "!./node_modules/**/*"],

  darkMode: "class",

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
        today: "#1e3a8a",
        background: "var(--bg-color)",
        text: "var(--text-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        header: "var(--header-bg-color)",
        stripe: "var(--table-stripe)",
        hover: "var(--table-hover)",
        border: "var(--table-border)",
        "today-bg": "var(--today-row-bg)",
        "today-text": "var(--today-row-text)",
        overlay: "var(--overlay-color)",
        yes: "var(--yes-color)",
        no: "var(--no-color)",
      },
    },
  },
};




