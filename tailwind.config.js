/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
        'blue-300': '#93c5fd',
        'blue-400': '#60a5fa',
        'blue-500': '#3b82f6',
        'indigo-300': '#a5b4fc',
        'violet-200': '#ddd6fe',
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
      backgroundImage: {
        'aurora': 'radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.1), transparent 60%), radial-gradient(circle at 50% 50%, rgba(102, 0, 255, 0.1), transparent 70%)',
      },
      backgroundSize: {
        'aurora': '200% 200%, 200% 200%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
} 