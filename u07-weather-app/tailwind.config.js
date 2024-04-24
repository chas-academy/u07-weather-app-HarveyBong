/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/App.css",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
    function({addUtilities}){
      const newUtilities={
        ".scrollbar-thin":{
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 29 29) white",
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
}