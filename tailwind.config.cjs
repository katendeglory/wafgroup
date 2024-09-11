// #f8fafc - White
// #3d454d - Black
// #03b19c - Green
// #ff7f00 - Orange
// "brand-green": "#2E7D32",

module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        "brand-white": "#fafafa",
        // "brand-orange": "#F4A261",
        "brand-green": "#2E7D32",
        "brand-blue": "#3e568b",
        "brand-red": "#e06167",
      },
      // spacing: {
      //   '128': '32rem',
      // },
      // maxWidth: {
      //   '7xl': '80rem',
      // },
      // fontSize: {
      //   '7xl': '5rem',
      // },
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [require('@tailwindcss/forms'), /*require('@tailwindcss/line-clamp')*/],
}