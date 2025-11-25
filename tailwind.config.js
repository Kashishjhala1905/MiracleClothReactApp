export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfaf7',
          100: '#fbf6f1',
          200: '#f7efe6',
          300: '#efe1d1',
          400: '#e7ceb6',
          500: '#d9bfa2',
          600: '#c7a78f',
          700: '#a8856f'
        },
        gold: '#b98b43'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
