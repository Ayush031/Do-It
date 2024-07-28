/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        greenLight: "#357937",
        greenDark: "#3f9142",
        textBlack1: "#1B281B"
      },
      fontFamily: {
        "primary-text": "var(--primary-text-font-family)",
        "secondary-text": "var(--secondary-text-font-family)",
        "value-text": "var(--value-text-font-family)",
      },
    },
  },
  // "compilerOptions": {
  //   "baseUrl": ".",
  //   "paths": {
  //     "@/*": ["./src/*"]
  //   }
  // },
  plugins: [],
};
