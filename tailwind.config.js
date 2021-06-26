const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bg-gradient-shift': 'bg-gradient-shift 30s ease infinite',
        'bg-gradient-shift-fast': 'bg-gradient-shift 1s ease-in-out infinite',
        'fade-in': 'fade-in 0.25s ease-in'
      },
      keyframes: {
        'bg-gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
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
