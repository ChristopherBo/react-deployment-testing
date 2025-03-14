/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rmono: ['Roboto-Mono', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'montserrat-bold': ['MontserratBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}