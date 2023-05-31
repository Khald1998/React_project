/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display:["Roboto","sans-serif"],
      second:['Source Sans Pro', 'sans-serif'
    ],
    },
    extend: {
      screens:{
        'xxs': '300px',
        'xs': '420px',
      },
      backgroundImage: {
        'img-pattern': "url('/src/assets/future-grid.webp')",
        'img-me': "url('/src/assets/Me.JPG')",
      },
      zIndex: {
        'negative': '-10',
       },
      colors:{
        'whitey': '#EDEDED',
        'second': '#1E2022',
        'nav': 'rgba(23, 23, 23,0.4 )',
        'footer':'#171717',
        'prime': '#52616B',
      },
    },
  },
  plugins: [],
}