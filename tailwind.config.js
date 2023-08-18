/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "paragraph-color": "#5C6666",
        "heading-color": "#0C1F26",
        "primary-10": "#E8EDEF",
        "primary-25": "#C6D1D6",
        "primary-50": "#8DA3AC",
        "primary-80": "#496D7B",
        "primary-100": "#1B485A",
        "secondary-10": "#FFEEE9",
        "secondary-50": "#FFAA90",
        "secondary-100": "#FF5522",
      },
      bakgroundImage: (theme) => ({
        "home": "url('./assets/hero-bgs.svg')",
      }),
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        "base": "1.125rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}

