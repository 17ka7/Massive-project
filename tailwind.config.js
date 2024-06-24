/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-blue': '#0E98CC',
      'custom-pink': '#FF407D',
      'custom-white': '#F6F6F6',
      'custom-black': '#31363F',
      'custom-blue2': '#7BC9FF',
      'White': '#FFFFFF'

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      josefin: ['Josefin Sans','sans-serif']
    },
    fontSize: {
      'size-15px': '1rem',
      'h1-log/reg': '40px',
      'p': '27px'
    }
  },
  plugins: [],
}
