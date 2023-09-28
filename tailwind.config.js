const colors = require('tailwindcss/colors')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      3.5: '3.5px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      32: '32px',
      310: '310px',
      320: '320px',
      768: '768px',
      1024: '1024px'
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        black: '#1C1E2D',
        white: colors.white,
        primary: '#9484F7;',
        border: '#9297B729',
        base: {
          900: '#282C41',
          700: '#5B628A',
          600: '#9297B7'
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
        34: '34px',
        320: '320px'
      }
    }
  },

  plugins: []
}
