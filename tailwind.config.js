module.exports = {
  purge: ['./components/**/*.vue', './pages/**/*.vue', './content/**/*.md'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['canada-type-gibson', 'Gibson', 'system-ui', 'ui-sans-serif'],
    },
    extend: {
      colors: {
        fire: '#ff675b',
        ash: '#252d2f',
        ice: '#d3e6ea',
        salt: '#f2efed',
        gray: {
          100: '#f2efed', // salt
          200: '#dad8d6',
          300: '#bdbcbc',
          400: '#9e9f9f',
          500: '#828485',
          600: '#696e6e',
          700: '#53595a',
          800: '#404748',
          900: '#252d2f', // ash
        },
      },
    },
  },
}
