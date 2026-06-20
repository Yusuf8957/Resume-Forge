/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Clash Display"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          500: '#6366f1',
          600: '#5253cc',
          700: '#4040aa',
          900: '#1e1e4a',
        },
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-up': 'slideUp 0.4s ease forwards',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      }
    },
  },
  plugins: [],
}
