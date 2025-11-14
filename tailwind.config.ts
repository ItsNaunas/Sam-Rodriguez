import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF9F0',
          100: '#FAF3E0',
          200: '#F5E6C0',
          300: '#EED9A0',
          400: '#E6CC80',
          500: '#D6A73C',
          600: '#B88A2F',
          700: '#9A6D22',
          800: '#7C5015',
          900: '#5E3308',
        },
        forest: {
          50: '#F0F5F3',
          100: '#D9E8E2',
          200: '#B3D1C5',
          300: '#8DBAA8',
          400: '#67A38B',
          500: '#214034',
          600: '#1A3329',
          700: '#13261E',
          800: '#0C1913',
          900: '#050C08',
        },
        warm: {
          bg: '#F5F2EB',
          surface: '#F9F7F3',
          overlay: 'rgba(0, 0, 0, 0.05)',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#3C3C3C',
          600: '#333333',
          700: '#2A2A2A',
          800: '#1F1F1F',
          900: '#141414',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      borderRadius: {
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(243, 229, 158, 0.15)',
        'card': '0 20px 40px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config

