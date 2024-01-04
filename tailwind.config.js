/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary": "#E94857",
        "secondary" : "#29235C"
      }
    },
    fontFamily: {
      roboto: ['roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

