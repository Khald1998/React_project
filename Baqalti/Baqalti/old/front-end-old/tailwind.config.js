/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beigeDark : '#F2DEBA',
        beigeLight : '#FFEFD6',
        blueDark : '#0E5E6F',
        blueLight : '#3A8891',
      },
    },
  },
  plugins: [],
}

