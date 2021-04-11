module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
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
        heading: ['Montserrat'],
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
  variants: {
    extend: {},
  },
  plugins: [],
}
