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
        textSec : 'var(--text-secondary-color)', // white
        textTer : 'var(--text-ternary-color)',
        bgPri : 'var(--bg-color)', // gray
        bgSec : 'var(--bg-secondary-color)', // red
        borderPri : 'var(--border-color)', // gray
        borderSec : 'var(--border-second-color)',
        btnHover:'var(--btn-hover)',  // green
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

