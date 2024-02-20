import React from 'react'
import burguer from '../assets/food/light/Cheeseburger.png'
import burguerDark from '../assets/food/Cheeseburger.png'
import pizzaDark from '../assets/food/Pizza.png'
import pizza from '../assets/food/light/Pizza.png'
import paoDark from '../assets/food/Pao.png'
import pao from '../assets/food/light/Pao.png'
import foodDark from '../assets/food/Food.png'
import food from '../assets/food/light/Food.png'
import picoleDark from '../assets/food/iceCream.png'
import picole from '../assets/food/light/iceCream.png'
import carneDark from '../assets/food/Carne.png'
import carne from '../assets/food/light/Carne.png'
import cafeDark from '../assets/food/Cafe.png'
import cafe from '../assets/food/light/Cafe.png'
import addDark from '../assets/food/Add.png'
import add from '../assets/food/light/Add.png'
import distDark from '../assets/food/Distribuidora.png'
import dist from '../assets/food/light/Distribuidora.png'
import acaiDark from '../assets/food/Acai.png'
import acai from '../assets/food/light/Acai.png'
import useTheme from '../context/theme'

const segmentos = [
  {
    icon: pao, title: 'Padarias e confeitarias', iconDark: paoDark
  },
  {
    icon: pizza, title: 'Pizzarias', iconDark: pizzaDark
  },
  {
    icon: burguer, title: 'Lanchonetes', iconDark: burguerDark
  },
  {
    icon: food, title: 'Restaurantes', iconDark: foodDark
  },
  {
    icon: picole, title: 'Sorveterias', iconDark: picoleDark
  },
  {
    icon: carne, title: 'Açougues', iconDark: carneDark
  },
  {
    icon: cafe, title: 'Cafeterias', iconDark: cafeDark
  },
  {
    icon: acai, title: 'Açaiterias', iconDark: acaiDark
  },
  {
    icon: dist, title: 'Distribuidoras', iconDark: distDark
  },
  {
    icon: add, title: 'Muito Mais', iconDark: addDark
  },


]
function SegmentosFood() {
    const { themeMode } = useTheme()
    return (
        <div className='grid w-full z-10 h-full min-w-[300px] max-w-[970px] lg:grid-cols-5 grid-cols-2 gap-4'>
            {segmentos.map((s) => {
                return (
                    <div key={s.title} className='bg-white dark:bg-quaternary-dark items-center
                             dark:hover:bg-secondary-dark hover:drop-shadow-2xl p-8 lg:h-[120px] min-w-[100px] 
                             drop-shadow-lg flex flex-col rounded-xl justify-center text-center transition-transform duration-200'>
                        <div className='flex flex-col gap-1 items-center justify-center text-dark-blue dark:text-vanilla' id="icon">
                            {themeMode === "dark" ? <img src={s.iconDark} className='min-w-[35px] w-[35px]' /> : <img src={s.icon} className='min-w-[35px] w-[35px]' />}
                            <h1 className='font-poppins font-semibold text-md text-dark-blue dark:text-vanilla'>{s.title}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SegmentosFood