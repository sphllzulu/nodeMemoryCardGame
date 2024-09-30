/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        lightGrey: '#666',
        accent: '#D4AF37',
      },
    },
  },
};

