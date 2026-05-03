import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A56FF',
          'blue-dark': '#1240CC',
          'blue-light': '#EEF2FF',
          amber: '#D97706',
          terracotta: '#C2714F',
          cream: '#FAFAF8',
          'warm-gray': '#F5F0EB',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: { 'xl': '16px', '2xl': '24px', '3xl': '32px' },
      boxShadow: {
        'card': '0 2px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px rgba(26,86,255,0.12)',
        'button': '0 4px 14px rgba(26,86,255,0.35)',
      },
    },
  },
  plugins: [],
};

export default config;