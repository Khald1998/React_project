/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dropShadow: {
      'holy': '0 0 25px  #F5F5F5',
    },
    extend: {
      colors: {
        'nav': '#F5F5F5',
        'nav-text': '#525FE1',
        'prime':'#F86F03',
        'secondary':'#FFA41B',
      },
    },
  },
  plugins: [],
}