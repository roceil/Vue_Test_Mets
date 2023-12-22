/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['synthwave']
  }
}
