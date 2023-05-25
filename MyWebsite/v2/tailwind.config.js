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
      },
      zIndex: {
        'negative': '-10',
       },
    },
  },
  plugins: [],
}