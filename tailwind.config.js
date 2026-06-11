/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1a3d5c',
        'blue-primary': '#1e6a9a',
        'blue-accent': '#2a9fd4',
        'blue-specialties': '#2196c4',
        'teal-bg': '#c5eef5',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
