/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F7F7F9',
        'text-primary': '#222222',
        'text-secondary': '#666666',
        'text-muted': '#777777',
        
        // Accent colors from logo
        'accent-teal': {
          DEFAULT: '#00A8B5',
          light: '#14B8A6',
          dark: '#0891B2',
        },
        'accent-yellow': {
          DEFAULT: '#FBBF24',
          light: '#FCD34D',
          dark: '#F59E0B',
        },
        'accent-green': {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        
        // Dark theme colors
        'footer-bg': '#18181B',
        'footer-text': '#E5E7EB',
      },
    },
  },
  plugins: [],
}
