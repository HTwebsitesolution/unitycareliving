/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f8f7',
          100: '#e2efec',
          200: '#bbd6d1',
          300: '#99c1ba',
          400: '#7da9a2',
          500: '#628f88',
          600: '#517673',
          700: '#435f5d',
          800: '#344746',
          900: '#23302f',
        },
      },
    },
  },
  plugins: [],
}

