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
        'img-me': "url('/src/assets/Me_2.JPG')",
      },
      zIndex: {
        'negative': '-10',
       },
      colors:{
        'secondary': '#171717',
        'prime': '#DA0037',
      },
    },
  },
  plugins: [],
}