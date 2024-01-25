/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {

    dropShadow: {
      'holy': '0 0 25px  #fff',
    },
    fontFamily:{
      display:["Roboto","sans-serif"],
      second:['Source Sans Pro', 'sans-serif'],
      dynamic: ['Roboto Mono', 'monospace'],
      front:['Rajdhani', 'sans-serif'],
      VS:['Source Code Pro', 'monospace']
    },
    extend: {
      
      screens:{
        'xxs': '300px',
        'xs': '420px',
        'ss': '480px',
        // 'mobS': '320px',
        'mobM': '375px',
        // 'mobL': '425px',
      },
      backgroundImage: {
        'img-background-dark': "url('/src/assets/Background-1.svg')",
        'img-background-light': "url('/src/assets/Background-1-alt.svg')",
        'img-pattern': "url('/src/assets/future-grid.webp')",
        'img-me': "url('/src/assets/Me.JPG')",
      },
      zIndex: {
        'negative': '-10',
       },
      colors:{
        'whitey': '#EDEDED',
        'blacky': '#121212',
        'nav-light': 'rgba(164, 164, 164,0.4 )',
        'nav-light-border': 'rgba(164, 164, 164,0.3 )',
        'nav-dark': 'rgba(23, 23, 23,0.4 )',
        'nav-dark-border': 'rgba(23, 23, 23,0.3 )',
        'prime': '#393E46',
        'prime-dark': '#393E46',
        'prime-light':'#D4D0CA',
        'second': '#1E2022',
        'second-dark': '#1E2022',
        'second-light': '#D4D0CA',


        'footer':'#171717',


        'tertiary':'#4ECCA3',
      },
    },
  },
  plugins: [],
}