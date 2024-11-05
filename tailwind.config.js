/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003082',
        secondary: '#fec817',
        secondary_dark: '#f3b518',
        tertiary: '#0063d3',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        visby: ['"Visby Round CF Bold"'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

