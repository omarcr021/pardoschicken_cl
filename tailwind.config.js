/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E3101B',
          'red-dark': '#B80D15',
          gold: '#FAC914',
          yellow: '#FFE409',
          charcoal: '#1D1B20',
          dark: '#111827',
          gray: '#F8F9FA',
          'gray-dark': '#6B7280'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 4px 20px -2px rgba(227, 16, 27, 0.25)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 28px rgba(0, 0, 0, 0.16)'
      }
    },
  },
  plugins: [],
}
