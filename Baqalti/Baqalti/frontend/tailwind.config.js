/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobs': '320px',
      'mobm': '375px',
      'mobl': '425px',
      'sm': '640px',
      'md': '768px',
      'big': '825px',
      'lg': '1024px',
      'xl': '1280px',
    },
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