/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blush': '#FFB6C1',
        'cream': '#FFFDD0',
        'sage': '#B2AC88',
        'lavender': '#E6E6FA',
        'beige': '#F5F5DC',
        'text-dark': '#2c2c2c',
        'text-light': '#6b6b6b'
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'serif'],
        'sans': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
