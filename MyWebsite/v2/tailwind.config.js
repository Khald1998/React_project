/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-pattern': "url('/src/assets/future-grid.webp')",
        'img-me': "url('/src/assets/Me.JPG')",
      },
      zIndex: {
        'negative': '-10',
       },
      colors:{
        'whitey': '#EDEDED',
        'second': '#171717',
        'prime': '#52616B',
      },
    },
  },
  plugins: [],
}