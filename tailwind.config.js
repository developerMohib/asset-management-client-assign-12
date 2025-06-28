/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary : 'var(--logo-primary-color)',  // blue-600
        textPri : 'var(--text-primary-color)', // black
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

