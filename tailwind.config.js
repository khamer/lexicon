module.exports = {
  purge: [
    './components/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Lato', 'ui-sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
