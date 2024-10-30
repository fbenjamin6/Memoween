/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        board: 'repeat(5, minmax(120px, 180px))',
      },
    },
  },
  plugins: [],
}
