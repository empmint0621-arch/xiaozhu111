/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zhihu: {
          blue: '#0066FF',
          light: '#EBF3FF',
          dark: '#0052CC',
        },
        domain: {
          ai: { from: '#6366F1', to: '#8B5CF6', light: '#EEF2FF' },
          philosophy: { from: '#10B981', to: '#34D399', light: '#ECFDF5' },
          literature: { from: '#F59E0B', to: '#FBBF24', light: '#FFFBEB' },
          economics: { from: '#8B5CF6', to: '#A78BFA', light: '#F5F3FF' },
          sociology: { from: '#06B6D4', to: '#22D3EE', light: '#ECFEFF' },
          psychology: { from: '#EC4899', to: '#F472B6', light: '#FDF2F8' },
          art: { from: '#3B82F6', to: '#60A5FA', light: '#EFF6FF' },
          law: { from: '#7C3AED', to: '#8B5CF6', light: '#F5F3FF' },
          history: { from: '#D97706', to: '#F59E0B', light: '#FFFBEB' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
