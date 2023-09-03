const colors = require('tailwindcss/colors')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      3.5: '3.5px',
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      32: '32px'
    },
    extend: {
      colors: {
        black: '#1C1E2D',
        white: colors.white,
        primary: '#9484F7;',
        border: '#9297B729',
        base: {
          900: '#282C41'
        }
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        xl: '18px'
      },
      lineHeight: {
        140: '140%'
      },
      minWidth: {
        320: '320px'
      }
    }
  },

  plugins: []
}
