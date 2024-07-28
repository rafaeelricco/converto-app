import type { Config } from 'tailwindcss'

const config = {
   darkMode: ['class'],
   content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
   prefix: '',
   theme: {
      container: {
         center: true,
         padding: '2rem'
      },
      extend: {
         container: {
            center: true,
            padding: '1rem',
            screens: {
               '2xl': '1636px'
            }
         },
         fontFamily: {
            'atyp-text': ['Atyp Text', 'sans-serif'],
            'atyp-display': ['Atyp Display', 'sans-serif'],
            'sf-pro-display': ['SF Pro Display', 'sans-serif'],
            'sf-mono': ['SF Mono', 'monospace']
         },
         colors: {
            primary: {
               100: '#D6C5F9',
               200: '#BB9EF6',
               300: '#9F76F2',
               400: '#844FEF',
               500: '#6828EB',
               600: '#5821C7',
               700: '#471AA3',
               800: '#371380',
               900: '#260C5C'
            },
            secondary: {
               100: '#FFEED3',
               200: '#FFDDA8',
               300: '#FFCD7E',
               400: '#FFBC53',
               500: '#FFAB28',
               600: '#DC9320',
               700: '#B97A18',
               800: '#976210',
               900: '#744908'
            },
            tertiary: {
               100: '#C5EE30',
               200: '#A8CC27',
               300: '#8BA91F',
               400: '#6F8716',
               500: '#607612',
               600: '#607612',
               700: '#52640E',
               800: '#435309',
               900: '#354205'
            },
            black: {
               100: '#5A606E',
               200: '#474C57',
               300: '#33373F',
               400: '#202328',
               500: '#121316',
               600: '#0A0B0D',
               700: '#08080A',
               800: '#050606',
               900: '#030303'
            },
            white: {
               100: '#FFFFFF',
               200: '#EAEAEA',
               250: '#E5E5E5',
               300: '#D4D4D4',
               400: '#BFBFBF',
               500: '#B4B4B4',
               600: '#A9A9A9',
               700: '#9F9F9F',
               800: '#949494',
               900: '#868686'
            },
            tags: {
               blue: {
                  100: '#84CAFF',
                  200: '#2E90FA',
                  300: '#1849A9',
                  400: '#102A56'
               },
               pink: {
                  100: '#FAA7E0',
                  200: '#EE46BC',
                  300: '#9E165F',
                  400: '#4E0D30'
               },
               green: {
                  100: '#75E0A7',
                  200: '#17B26A',
                  300: '#085D3A',
                  400: '#053321'
               },
               orange: {
                  100: '#F7B27A',
                  200: '#EF6820',
                  300: '#932F19',
                  400: '#511C10'
               }
            },
            status: { link: '#2D29F8' },
            gradient: {
               primary: 'linear-gradient(90deg, #6828EB 0%, #FFAB28 100%)',
               secondary: 'linear-gradient(90deg, #C5EE30 0%, #6828EB 100%)'
            }
         },
         keyframes: {
            'accordion-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-accordion-content-height)' }
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: '0' }
            }
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out'
         }
      }
   },
   plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
