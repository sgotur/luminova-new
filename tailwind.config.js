/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme base colors
        'dark-900': '#080E1A',
        'dark-800': '#0F172A',
        'dark-700': '#1E293B',
        'dark-600': '#334155',
        'dark-500': '#475569',

        // Text colors for dark theme
        'text-light': '#F8FAFC',
        'text-muted': '#94A3B8',

        // Legacy text overrides (mapped to dark theme equivalents for backward compat)
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',

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
      },
    },
  },
  plugins: [],
}
