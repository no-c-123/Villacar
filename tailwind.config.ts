import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
