/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        'Bright-Red':'hsl(12, 88%, 59%)',
        'DarkBlue': 'hsl(228, 39%, 23%)',
        'DarkGrayishBlue': 'hsl(227, 12%, 61%)',
        'VeryDarkBlue': 'hsl(233, 12%, 13%)',
        'VeryPaleRed': 'hsl(13, 100%, 96%)',
        'VaryLightGray': 'hsl(0, 0%, 98%)'
      },
      fontWeight: {
        'Weights': '400, 500, 700'
      }
    },
  },
  plugins: [],
}
