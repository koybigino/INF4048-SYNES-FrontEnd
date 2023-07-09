/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#FDC886',
        second : '#f13e5c',
        dark : '#0F172A'
      },
    },
    backgroundImage: {
      'login': "url('/src/assets/img/login2.svg')",
      'banner': "url('/src/assets/img/banner.jpg')",
      }
  },
  plugins: [],
});

