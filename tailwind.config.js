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
      'beige': '#bebfb8',
      'graphit': '#181818',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['EB Garamond', 'serif'],
    },
  },
  plugins: [],

}


