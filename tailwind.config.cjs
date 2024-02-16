/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cadetBlue: '#5C9EAD',
        blueSapphire: '#326273',
        cultured: '#eeeeee',
        darkSalmon: '#E39774',
      },
      fontFamily: {
        lato: 'Lato, sans-serif',
      },
    },
  },
  plugins: [],
};
