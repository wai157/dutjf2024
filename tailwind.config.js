/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Lora", "Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        'text': '#02040c',
        'background': '#f3f6fd',
        'primary': '#2f54b1',
        'secondary': '#ecbf87',
        'accent': '#9ee660',
       }, 
    },  
  },
  plugins: [],
}

