/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'black-matte': '#0a0a0a',
        'teal-dark': '#134e4a',
        'teal-vibrant': '#14b8a6',
        'teal-deep': '#0f766e',
        'cyan-neon': '#06b6d4',
        'gray-divider': '#27272a',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 25px rgba(20, 184, 166, 0.5)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom, #000000, #0f766e)',
        'gradient-cta': 'linear-gradient(90deg, #14b8a6, #06b6d4)',
      },
    },
  },
  plugins: [],
};
