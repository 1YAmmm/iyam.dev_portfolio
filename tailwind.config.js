/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        accent: '#7c6dfa',
        accent2: '#a594ff',
        teal: '#22d3b8',
        coral: '#ff6b6b',
        amber: '#ffb347',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}
