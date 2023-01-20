// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      biru: '#264C86',
      kuning: '#FCB712',
      hitam: '#000000',
      abu: '#D9D9D9',
      abu2: '#526179',
      putih: '#FFFFFF',
      biru2: '#1976D2',
      biru3: '#E9EDF3',
    },
    extend: {
      fontFamily: {
        // eslint-disable-next-line linebreak-style
        Vietnam: ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
