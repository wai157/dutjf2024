/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans: ["Lora", "Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        'text': '#02040c',
        'background': '#f3f6fd',
        'primary': {
          light: '#3b6cde',
          DEFAULT: '#2F54B1',
          dark: '#12256d',
        },
        'secondary': {
          light: '#eab87b',
          DEFAULT: '#ecbf87',
          dark: '#6e4411',
        },
        'accent': {
          light: '#c5fc82',
          DEFAULT: '#AFFB4F',
          dark: '#62af04',
        },
      }
    },  
  },
  plugins: [require("tw-elements/dist/plugin")],
}
