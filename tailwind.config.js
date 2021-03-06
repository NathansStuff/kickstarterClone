module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#05ce78',
        secondary: '#037362',
        tertiary: '#009E74',
        darkGray: '#656969',
        softBlack: '#282828',
        blueLink: '#5555FF'
      },
      flexGrow: {
        2: 2,
      },
    },
  },
  plugins: [],
}
