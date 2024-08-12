module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        "brand-white": "#fafafa",
        // "brand-orange": "#F4A261",
        "brand-yellow": "#d1a45a",
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