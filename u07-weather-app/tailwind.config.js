/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/App.css",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
     'ivory':'#FBFFF1',
     'onyx' : '#3c3c3b',
     'lapislazuli': '#175676',

     'columbiablue':'#CEE5F2',
     'columbiasilver':'#BDD8EA',
     'columbialightblue':'#ACCBE1',
     'superiorityblue': '#72a0c1',
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
    function({addUtilities}){
      const newUtilities={
        ".scrollbar-thin":{
          scrollbarWidth: "thin",
          scrollbarColor: " white",
          scrollbarRound: "rounded-lg"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track" :{
            background: "white"
          },
          "&::-webkit-scrollbar-thumb" :{
            background: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          },
        },
      }

      addUtilities(newUtilities), ["responsive", "hover"]
    }
  ],
}}