import type { Config } from 'tailwindcss';

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        'red': {
          400: '#f17878',
          500: '#e74c4c',
          600: '#d32f2f',
          700: '#b12424'
        },
        'blue': {
          400: '#71949f',
          500: '#567884',
          600: '#4a6570',
          700: '#455a64'
        }
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require('@tailwindcss/forms'), nextui()],
};
export default config;
