/** @type {import('tailwindcss').Config} */

// Palette tokens live in src/index.css as RGB channels so they can flip
// between the dark "blueprint" and light "whiteprint" themes.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Quinn', 'Archivo', 'system-ui', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        raised: token('raised'),
        muted: token('muted'),
        soft: token('soft'),
        fg: token('fg'),
        line: 'rgb(var(--c-line) / var(--line-a))',
        'line-strong': 'rgb(var(--c-line) / calc(var(--line-a) * 2))',
      },
      maxWidth: {
        sheet: '1200px',
      },
    },
  },
  plugins: [],
}
