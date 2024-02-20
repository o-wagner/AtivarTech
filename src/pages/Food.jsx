import React from 'react'
import { Link } from 'react-scroll'
import heroshot from '../assets/heroFood.png'
import { ChevronDownCircleIcon } from 'lucide-react'
import burguer from '../assets/food/Cheeseburger.svg'
const segmentos = [
  {
    icon:'', title:'Padarias e confeitarias', iconDark: ''
  },
  {
    icon:'', title:'Pizzarias',iconDark: ''
  },
  {
    icon: burguer, title:'Lanchonetes',iconDark: ''
  },
  {
    icon:'', title:'Restaurantes',iconDark: ''
  },
  {
    icon:'', title:'Sorveterias',iconDark: ''
  },
  {
    icon:'', title:'Padarias e confeitarias',iconDark: ''
  },
  {
    icon:'', title:'Restaurantes',iconDark: ''
  },
  {
    icon:'', title:'Sorveterias',iconDark: ''
  },
  {
    icon:'', title:'Açougues',iconDark: ''
  },
  {
    icon:'', title:'Cafeterias',iconDark: ''
  },

  
]

function Food(props) {
  return (
    <div className='dark:bg-dark-background bg-light-background w-full'>
      <section id="heroAbout" className='lg:h-[100dvh] h-auto w-full lg:pt-16 pt-10 lg:flex-row flex-wrap-reverse flex justify-center items-center px-10 lg:px-36 py-12 gap-5 lg:gap-[72px]'>
        <div id="heroText" className='lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start items-center'>
          <div className='flex flex-col lg:text-start lg:items-start items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Food</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 lg:text-[40px] font-poppins
                 dark:text-vanilla tracking-tighter '>
              Solução para setor de alimentos
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-dark-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[420px]
                    text-center leading-loose lg:text-left pt-2 pb-6 font-inter lg:px-0 px-2 '>
            Otimize processos, controle estoques, gerencie pedidos e muito mais. Simplifique sua operação e aumente sua produtividade com nossas soluções especializadas.</p>
          <Link
            to="history"
            smooth={true}
            offset={-20}
            className='flex gap-2 items-center font-semibold text-md text-white bg-button-gradient px-6 w-44 cursor-pointer hover:bg-button-gradient-hover py-[5px] rounded-[12px]'>Conheça mais<ChevronDownCircleIcon size={16} /> </Link>
        </div>
        <div className=' max-w-[570px] lg:h-auto lg:mt-0 mt-[20%] md:mt-[10%] flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[300px] lg:max-w-[500px] lg:translate-x-10 translate-x-6 lg:w-[470px] drop-shadow-md ' src={heroshot} alt="HeroShot" />
        </div>
      </section>
      <section className='w-full lg:px-36 flex items-center justify-center'>
        {/* <div className='grid w-full z-10 h-full min-w-[300px] max-w-[1000px] lg:grid-cols-5 grid-cols-2 gap-5'>
          {segmentos.map((s) => {
            return (
              <div key={s.title} className='bg-white dark:bg-quaternary-dark items-center
                             dark:hover:bg-secondary-dark hover:drop-shadow-2xl lg:min-h-[100px] min-w-[100px] 
                             drop-shadow-lg flex flex-col rounded-xl justify-center text-center transition-transform duration-200'>
                <div className='flex flex-col text-dark-blue dark:text-vanilla' id="icon">
                  {props.theme ? <img src={s.icon}/>:<img src={s.iconDark}/>}
                  <h1 className='font-poppins font-semibold text-md text-dark-blue dark:text-vanilla'>{s.title}</h1>
                </div>
              </div>
            )
          })}
        </div> */}
      </section>
    </div>
  )
}

export default Food