/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        devDark: {
          950: '#060a14',
          900: '#080d1b',
          850: '#0c1326',
          800: '#111b33',
          700: '#1c294a',
          600: '#283b66',
        },
        devBlue: {
          500: '#0084ff',
          400: '#38bdf8',
          600: '#0284c7',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(0, 132, 255, 0.25)',
        'glow-md': '0 0 25px -5px rgba(0, 132, 255, 0.35)',
        'glow-green': '0 0 15px -3px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

