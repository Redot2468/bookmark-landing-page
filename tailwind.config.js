/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{.html,.js}"],
  theme: {
    fontFamily:{
      sans: ['Rubik']
    },
    extend: {
      colors:{
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)"
      }
    },
  },
  plugins: [],
}