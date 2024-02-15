/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes:{
        'fade-in':{
          '0%':{transform : 'translateY(20px) scale(0.9)' , opacity: 0},
          '100%':{transform : 'translateY(0px) scale(1)' , opacity: 1},
        },
        'fade-down':{
          '0%':{transform : 'translateY(-10px)' , opacity: 0},
          '100%':{transform : 'translateY(0px)' , opacity: 1},
        },
        'fade-left':{
          '0%':{transform : 'translateX(16px)' , opacity: 0},
          '100%':{transform : 'translateY(0px)' , opacity: 1},
        }
      },
      animation:{
        'fade-in':'fade-in 1.5s ease-in-out',
        'fade-down':'fade-down 0.3s ease-in-out',
        'fade-left':'fade-left 0.5s ease-in-out'
      },      
      fontFamily: {
        'poppins': ['Poppins'],
        'inter' : ['Inter'],
     },
     backgroundImage:{
      'button-gradient': ' linear-gradient(180deg, rgba(24,162,222,1) 0%, rgba(22,75,98,1) 100%)',
      'button-gradient-hover': 'linear-gradient(180deg, rgba(39,172,230,1) 0%, rgba(26,104,138,1) 100%)',
      'light-gradient':'linear-gradient(180deg, rgba(233,233,233,1) 0%, rgba(204,204,204,1) 70%);',
      'dark-gradient':'linear-gradient(180deg, rgba(7,11,17,1) 5%, rgba(4,7,11,1) 100%);',
      'dark-wave-gradient':'url("/dark-wave-gradient.png")',
      'light-wave-gradient':'url("/light-wave-gradient.png")',

     },
      colors:{
        'primary-blue': '#18A2DE',
        'dark-blue': '#0B264D',
        'light-background':'#e9e9e9',
        'dark-background':'#070B11',
        'secondary-dark':'#181F2D',
        'tertiary-dark': '#101A28',
        'hover-dark':'#0a101a',
        'blueish-gray': '#81828C',
        'light-blueish-gray':'#b1b1b1',
        'lighter-gray':'#959BA4',
        'vanilla':'#D2DCEB',
        'primary-gray': '#404040',
        'dark-footer': '#0A1018',
        'quaternary-dark':'#0C1219',
        'dark-input':'#1D2D44'
      },
      boxShadow:{
        'medium-shadow':'8px 6px 4px 0px rgba(0,0,0,0.32)'
      }
    },
  },
  plugins: [],
}

