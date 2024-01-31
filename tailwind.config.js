/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'drinksBW' : "url('/docs/img/sakemamadrinksBW.png')",
        'drinks' : "url('https://github.com/abelureste/sakemamawebsite/blob/master/docs/img/sakemamadrinks.png')"
      },
      fontFamily: {
        'exo': ["Exo","sans-serif"],
      },
      screens: {
        'xs': '330px',
      },
      important: true,
    },
  },
  plugins: [],
}

