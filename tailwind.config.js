/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      importSans: 'Kumbh Sans, sans-serif'
    },
    screens: {
      sm:'375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    }, 
    extend: {
      colors:{
        myOrange: 'hsl(26, 100%, 55%)',
        myPaleOrange: 'hsl(25, 100%, 94%)',
        veryDarkblue: 'hsl(220, 13%, 13%)',
        darkGrayishblue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishblue: 'hsl(223, 64%, 98%)',
        myWhite: 'hsl(0, 0%, 100%)',
        myBlack: 'hsl(0,0%,0%,0.7)'
      }
    },
  },
  plugins: [],
}
