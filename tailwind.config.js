const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/features/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bg-gradient-shift': 'bg-gradient-shift 30s ease infinite',
        'bg-gradient-shift-fast': 'bg-gradient-shift 10s ease-in-out infinite',
        'fade-in': 'fade-in 0.25s ease-in'
      },
      colors: {
        gray: colors.trueGray,
        cyan: colors.cyan,
        teal: colors.teal,
        rose: colors.rose,
      },
      gridTemplateColumns: {
        'fill-48': 'repeat(auto-fill, minmax(12rem, 1fr))',
        'fill-52': 'repeat(auto-fill, minmax(13rem, 1fr))',
        'fill-56': 'repeat(auto-fill, minmax(14rem, 1fr))',
        'fill-60': 'repeat(auto-fill, minmax(15rem, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
