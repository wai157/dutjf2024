/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./static/js/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Lora", "serif"],
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
          light: '#ecbf87',
          DEFAULT: '#eab87b',
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
  plugins: [],
}
