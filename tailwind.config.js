/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2176ff',
        warning: '#ffc56d',
        error: '#f03333',
        success: '#26d867',
        ptGreen: '#1BE3C2',
        ytBlue: '#7AB7FF',
      },
    },
  },
  plugins: [],
};
