/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ethpays: {
          DEFAULT: '#121212',
          50: '#2e2e2e',
          100: '#222222',
          150: '#909090', // text gray
          0: '#000000',
        },
        ethpays_white: {
          DEFAULT: '#fcfeff',
          50: '#909090'
        },
        ethpays_green: {
          DEFAULT: '#768d5c',
          50: '#97b764',
          100: '#00a187',
          200: '#97b764',
          300: '#97b764',
          400: '#97b764',
          500: '#97b764',
          600: '#97b764',
          700: '#97b764',
          800: '#97b764',
          900: '#97b764'
        },
        ethpays_red: {
          DEFAULT: '#ca3f64',
        },
        ethpays_blue: {
          DEFAULT: '#5ab5db',
        },
      },
    },
    colors: ({ colors }) => ({
      primary: colors.ethpays_green,
      secondary: colors.lime,
      accent: colors.pink,
      success: colors.lime,
      warning: colors.yellow,
      info: colors.blue,
      gray: colors.zinc,
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
}),

  },
  plugins: [
    themer({
      radius: "smoothest",
      background: "lighter",
      border: "light",
      padding:"large",
      components: {
          button: {
              rounded : "2xl"
          }
      }
  })
  ],
}