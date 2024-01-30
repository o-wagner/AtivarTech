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

        }
      },
      animation:{
        'fade-in':'fade-in 1.5s ease-in-out'
      },      
      fontFamily: {
        'poppins': ['Poppins'],
        'inter' : ['Inter'],
     },
     backgroundImage:{
      'button-gradient': 'linear-gradient(180deg, rgba(63,142,255,1) 0%, rgba(25,68,128,1) 100%)',
      'button-gradient-hover': 'linear-gradient(180deg, rgba(78,150,252,1) 0%, rgba(46,90,153,1) 100%)',
      'light-gradient':'linear-gradient(180deg, rgba(233,233,233,1) 0%, rgba(204,204,204,1) 70%);',
      'dark-gradient':'linear-gradient(180deg, rgba(7,11,17,1) 5%, rgba(4,7,11,1) 100%);',
     },
      colors:{
        'primary-blue': '#3D8AF8',
        'dark-blue': '#0B264D',
        'light-background':'#e9e9e9',
        'dark-background':'#070B11',
        'secondary-dark':'#181F2D',
        'terciary-dark': '#101A28',
        'hover-dark':'#0a101a',
        'blueish-gray': '#81828C',
        'light-blueish-gray':'#b1b1b1',
        'lighter-gray':'#959BA4',
        'vanilla':'#D2DCEB',
        'primary-gray': '#404040',
        'dark-footer': '#0A1018'
      }
    },
  },
  plugins: [],
}

