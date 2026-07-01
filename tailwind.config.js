/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0B15',
        'bg-secondary': '#12122A',
        'bg-tertiary': '#1A1A3E',
        'bg-elevated': '#222250',
        'accent-primary': '#9945FF',
        'accent-success': '#00D4AA',
        'accent-danger': '#FF5B5B',
        'accent-warning': '#FFB800',
        'accent-info': '#00B8FF',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0C0',
        'text-muted': '#6B6B8D',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
