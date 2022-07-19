/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#facc15',

          secondary: '#fef08a',

          accent: '#D99330',

          neutral: '#f3f4f6',

          'base-100': '#fef9c3'
        }
      },
      'black'
    ]
  }
};
