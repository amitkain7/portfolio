/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        hoverColor : '#a2a6b7',
    
      },
      flex : {
        '2': '2 2 0%'
      },
      height : {
        '100' : '24rem'
      },
    },
  },
  plugins: [],
}