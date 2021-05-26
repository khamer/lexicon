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
        salt: '#f2efed'
      }
    }
  },
}
