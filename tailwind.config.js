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
      },
      keyframes: {
        displaymenu: {
          '0%':{opacity:"0"},
          '50%': {opacity:"0.5"},
          '100%': {opacity:"1"}
        },
        displayham: {
          '0%':{opacity:"0"},
          '50%': {opacity:"0.5"},
          '100%': {opacity:"1"}
        }

      },
      animation: {
        display: "displaymenu 1s ease-out",
        displayham: "displaymenu 1s ease-out"
      }
    }
  },
  plugins: [],
}
