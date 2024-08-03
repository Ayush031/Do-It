/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: '300px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        xxs: ['10px', { lineHeight: '15px' }], // for Meeting Cards component para
        xs: ['12px', { lineHeight: '18px' }], // for Meeting Cards component heading
        sm: ['14px', { lineHeight: '23.59px' }], // for Feature Cards component cards para
        base: ['16px', { lineHeight: '19.36px' }], // for hero section para
        lg: ['18px', { lineHeight: '21.78px' }], // for input text in Join Room component and Feature Cards component cards heading
        xl: ['20px', { lineHeight: '26.4px' }], // for buttons and Feature Cards component sub-heading
        '2xl': ['24px', { lineHeight: '29.05px' }], // for Join Room component heading
        '3xl': ['38px', { lineHeight: '41.6px' }], // for Feature Cards and View Other Products component main heading
        '4xl': ['45px', { lineHeight: '48.41px' }], // for hero section main heading
      },
      colors: {
        greenLight: "#357937",
        greenDark: "#3f9142",
        greenExtraDark: "#142e15",
        lightTextColor: "#1B281B",
        lightSideBarBg: "#eef6ef",
        lightSidebarChild: "#fbfdfb",
        darkTheme: "#1F1F1F",
        darkTextColor: "#F5F5F5",
        darkGreenColor: "#347136",
        darkCheckboxFill: "#357937",
        darkBgPrimary: "#2F3630",
        darkBgSecondary: "#232323",
        darkSideBarBg: "#2c2c2c",
        darkSidebarItemActiveText: "#98E19B",
        darkSidebarItemActiveBg: "#34783729"
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
