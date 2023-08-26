/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '2.1875rem',
      'full': '9999px',
    },
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
      margin: {
        '30px': '30px',
      },
      backgroundImage: {
        "home": "linear-gradient(180deg, rgba(12, 31, 38, 0.00) 0%, #0C1F26 100%), url('./assets/Rectangle 13.png')",
        "testimonial": "url('./assets/Background.png')",
      
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        montez: ['Montez', 'cursive'],
        messiri: ['El Messiri', 'sans-serif'],
      },
      fontSize: {
        "sm": "0.75rem",
        "nrml": "1rem",
        "md": "2.375rem",
        "base": "1.125rem",
        "base-sm": "1.75rem",
        "base-md": "3.375rem",
        "base-lg": "4.625rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1000px"
    }
  },
  plugins: [],
}

