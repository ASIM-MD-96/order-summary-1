module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '576px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        blue: '#1f2d51',
        darkBlue: '#1f2e55',
        grayishBlue: '#717fa6',
        lightGray: '#e0e8ff',
        slate: '#d6e1ff',
        purple: '#382ae1',
        lightPurple: '#766cf1',
        lightSlate: '#f7f9ff',
        lightBlue: '#DFE6FB'
      },
      fontFamily: {
      'redHatDisplay': ['RedHatDisplay', 'sans-serif']
    },
    },
  },
  plugins: [],
}
