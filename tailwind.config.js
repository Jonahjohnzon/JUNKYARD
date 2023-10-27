/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      'sm': '655px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      // => @media (min-width: 1536px) { ... }
      '3xl' : '1700px'
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out 1',
       move: 'move linear 60s infinite 35s',
       move2:'move linear 60s infinite',
       move3:'move linear 60s infinite 40s',
       move4:'move linear 60s infinite 30s',
       move6:'move2 linear  infinite 90s'},


      fontFamily:{
        'Neus':['NeueHaas'],
        'Akiz':['Akizdenz'],
        'Anton': ['Anton'],
        'Bert' : ['Berthold']
      },
      keyframes:{
        wiggle: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          }
          ,
          
          '20%, 80%' :{
            transform: 'translate3d(2px, 0, 0)'
          }
        ,
          '30%  ,50%, 70%' :{
            transform: 'translate3d(-4px, 0, 0)'
          }
        ,
          '40%, 60%' : {
            transform: 'translate3d(4px, 0, 0)'
          }
        },
        move:{
          '0%':{
            transform: 'translateX(140vw)'
          },
          '100%':{
            transform: 'translateX(-60vw)'
          },
        },
        move2:{
          '0%':{
            transform: 'translateX(30vw)'
          },
          '49%':{
            transform: 'translateX(-80vw)',
            opacity: '100%'
          },
          '50%':{
            transform: 'translateX(-80vw)',
            opacity: '0%'
          },
          '51%':{
            transform: 'translateX(140vw)',
            opacity: '0%'
          },
          '52%':{
            transform: 'translateX(140vw)',
            opacity:'100%'
          },
          '100%':{
            transform: 'translateX(30vw)',
            opacity:'100%'
            
          },
        }
          
      }
    },
    colors: {
      'transparent': 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#C4C1C6',
      'bubble-gum': '#C289B8',
      'pink':'#EDCCE7',
      'bermuda': '#78dcca',
      'skyone':'#618ED1',
      'skytwo':'#C7C2C6',
      'black':'#000000',
      'yellow':'#CDFB52',
      'whitey' : '#FFFFF7',
      'brown' : '#1C1616',
      'swarm' : '#425826',
      'swarmpink' : '#E6A3D3'
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

