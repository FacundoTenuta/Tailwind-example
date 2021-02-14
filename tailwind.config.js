module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "orange-300": "#fbd38d",
        "orange-400": "#f6ad55",
        "orange-800": "#9c4221",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
