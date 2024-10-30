/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        board: 'repeat(5, minmax(110px, 180px))',
        mobileBoard: 'repeat(4, minmax(60px, 140px))',
      },
    },
  },
  plugins: [],
}
