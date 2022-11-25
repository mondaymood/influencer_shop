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
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'beige': '#ede8e4',
      'medium-beige': '#ad9c8d',
      'dark-beige': '#a18d7c',
      'graphit': '#313131',
      'blue': '#313a43',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['EB Garamond', 'serif'],
      display: ['Ginger', 'serif'],
    },
  },
  plugins: [],

}


