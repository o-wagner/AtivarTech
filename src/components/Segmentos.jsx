import React from 'react'
import useTheme from '../context/theme'
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
import car from '../assets/retail/car.png'
import carLight from '../assets/retail/light/car.png'
import auto from '../assets/retail/auto.png'
import autoLight from '../assets/retail/light/auto.png'
import mercado from '../assets/retail/mercado.png'
import mercadoLight from '../assets/retail/light/mercado.png'
import pneu from '../assets/retail/pneu.png'
import pneuLight from '../assets/retail/light/pneu.png'
import conveniencia from '../assets/retail/conveniencia.png'
import convenienciaLight from '../assets/retail/light/conveniencia.png'
import cabide from '../assets/retail/cabide.png'
import cabideLight from '../assets/retail/light/cabide.png'
import camiseta from '../assets/retail/camiseta.png'
import camisetaLight from '../assets/retail/light/camiseta.png'
import variedade from '../assets/retail/variedade.png'
import variedadeLight from '../assets/retail/light/variedade.png'
import quadra from '../assets/retail/quadra.png'
import quadraLight from '../assets/retail/light/quadra.png'

const segmentosFood = [
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
const segmentosVarejo = [
  {
    icon: mercadoLight, title: 'Mercados', iconDark: mercado
  },
  {
    icon: pneuLight, title: 'Borracharias', iconDark: pneu
  },
  {
    icon: autoLight, title: 'Auto-Peças', iconDark: auto
  },
  {
    icon: convenienciaLight, title: 'Conveniências', iconDark: conveniencia
  },
  {
    icon: cabideLight, title: 'Loja de Roupa', iconDark: cabide
  },
  {
    icon: camisetaLight, title: 'Departamentos', iconDark: camiseta
  },
  {
    icon: variedadeLight, title: 'Loja de Variedades', iconDark: variedade
  },
  {
    icon: quadraLight, title: 'Artigos Esportivos', iconDark: quadra
  },
  {
    icon: carLight, title: 'Concessionárias', iconDark: car
  },
  {
    icon: add, title: 'Muito Mais', iconDark: addDark
  },

]
function Segmentos(props) {
  const { themeMode } = useTheme()
  return (
    <div>
      {props.segmento === "varejo" &&
        <div className='grid w-full z-10 h-full min-w-[300px] max-w-[970px] lg:grid-cols-5 md:grid-cols-4 grid-cols-2  gap-3'>
          {segmentosVarejo.map((v) => {
            return (
              <div key={v.title} className='bg-white dark:bg-quaternary-dark items-center border-slate-400/60 border dark:border-slate-800
                             dark:hover:bg-secondary-dark hover:drop-shadow-xl hover:-translate-y-[0.1rem] p-8 lg:h-[120px] min-w-[100px] 
                             drop-shadow-lg flex flex-col rounded-xl justify-center text-center transition-transform duration-200'>
                <div className='flex flex-col gap-1 items-center justify-center text-dark-blue dark:text-vanilla' id="icon">
                  {themeMode === "dark" ? <img src={v.iconDark} className='min-w-[35px] w-[35px]' /> : <img src={v.icon} className='min-w-[35px] w-[35px]' />}
                  <h3 className='font-poppins font-medium leading-4 text-[14px] text-dark-blue dark:text-vanilla'>{v.title}</h3>
                </div>
              </div>
            )
          })}
        </div>}
      
      { props.segmento === "food"  &&
        <div className='grid w-full z-10 h-full min-w-[300px] max-w-[970px] lg:grid-cols-5 grid-cols-2 gap-3'>
          {segmentosFood.map((s) => {
            return (
              <div key={s.title} className='bg-white dark:bg-quaternary-dark items-center border-slate-400/60 border dark:border-slate-800
                             dark:hover:bg-secondary-dark hover:drop-shadow-xl hover:-translate-y-[0.1rem] p-8 lg:h-[120px] min-w-[100px] 
                             drop-shadow-lg flex flex-col rounded-xl justify-center text-center transition-transform duration-200'>
                <div className='flex flex-col gap-1 items-center justify-center text-dark-blue dark:text-vanilla' id="icon">
                  {themeMode === "dark" ? <img src={s.iconDark} className='min-w-[35px] w-[35px]' /> : <img src={s.icon} className='min-w-[35px] w-[35px]' />}
                  <h1 className='font-poppins leading-4 font-medium text-[14px] text-dark-blue dark:text-vanilla'>{s.title}</h1>
                </div>
              </div>
            )
          })}
        </div>
      }

    </div>
  )
}

export default Segmentos