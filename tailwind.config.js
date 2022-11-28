module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_includes/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/**/*.{html,md}',
    '!./_site/**/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    extend: {
    },
    container: {
      center: true,
      padding: '1rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'beige': '#ede8e4',
      'medium-beige': '#D9D0C9',
      'dark-beige': '#C3BAB2',
      'graphit': '#313131',
      'green': '#B9C3A3',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['EB Garamond', 'serif'],
      display: ['Ginger', 'serif'],
    },
  },
  plugins: [],

}


