import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        '2xs': '400px',
        '3xs': '425px',
        '4xs': '450px'
      },
      colors: {
        'red1': '#e6232d',
        'red2': '#c6105e'
      }
    },
  },
  plugins: [require('daisyui')],
}
export default config
