import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        red: {
          50: 'rgb(235, 242, 250)',
          100: 'rgb(214, 229, 245)',
          200: 'rgb(173, 203, 235)',
          300: 'rgb(132, 177, 225)',
          400: 'rgb(84, 132, 193)',
          500: 'rgb(37, 87, 161)',
          600: 'rgb(37, 87, 161)',
          700: 'rgb(30, 70, 129)',
          800: 'rgb(23, 52, 97)',
          900: 'rgb(15, 35, 65)',
          950: 'rgb(8, 17, 32)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { 
            transform: 'translateY(20px)',
            opacity: '0',
          },
          to: { 
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
