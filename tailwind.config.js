/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        san:["Poppins" , "sans-serif"],
      },
      colors : {
        primary : "#0190ec",
        secondary : "#044fa9"
      },
      container : {
        center: true,
        padding : {
          DEFAULT : "1rem",
          sm : "3rem"
        },
      },
    },
  },
  plugins: [],
}

