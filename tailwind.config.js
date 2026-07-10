/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6B3FA6',
        'primary-dark': '#4E2C7A',
        'primary-light': '#9B72CE',
        accent: '#D4AF37',
        'accent-dark': '#A9861F',
        background: '#FFFFFF',
        surface: '#FFFFFF',
        ink: '#241531',
        muted: '#6B647A',
        divider: '#E7E1F0',
        deep: '#1B0F2E',
      },
      fontFamily: {
        display: ['"Libre Caslon Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Lora"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
