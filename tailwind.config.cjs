const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,svelte}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '10px',
      },
    },
    colors: {
      'transparent': 'transparent',

      'red': '#ff5252',
      'white': '#ffffff',
      'light-grayish-violet': '#dedddf',
      'dark-grayish-violet': '#8e8593',
      'very-dark-violet': '#21092f',
    },
    fontFamily: {
      'space-grotesk': ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('empty-invalid', '&:not(:placeholder-shown):invalid');
      addVariant('peer-empty-invalid', ':merge(.peer):not(:placeholder-shown):invalid ~ &');
    }),
  ],
};
