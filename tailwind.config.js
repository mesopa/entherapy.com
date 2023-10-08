/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#ff4100',
          900: '#cc3400',
        },
        secondary: {
          100: '#acb5c4',
          200: '#8e9aaf',
          500: '#4b566a',
          900: '#2f3642',
        },
      },
      listStyleType: {
        circle: 'circle',
      },
      fontFamily: {
        heading: ['Roboto'],
        en: ['Roboto'],
        zh: [
          'Chinese Quote',
          '-apple-system,BlinkMacSystemFont',
          'Segoe UI',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
    },
  },
  plugins: [],
};

