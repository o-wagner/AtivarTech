import React from 'react'
import { Link } from 'react-scroll'
import heroshot from '../assets/HeroContent.png'
import conteudo from '../assets/conteudo/content2.jpg'
import { ChevronDownCircleIcon } from 'lucide-react'
const content = [
  {
    title:'Lorem ipsum dolor sit amet consectetur. Tellus vel dolor.',
    img: conteudo,
    id:1,
  },
  {
    title:'Lorem ipsum dolor sit amet consectetur. Tellus vel dolor.',
    img: conteudo,
    id:2,
  },
  {
    title:'Lorem ipsum dolor sit amet consectetur. Tellus vel dolor.',
    img: conteudo,
    id:3,
  },
  {
    title:'Lorem ipsum dolor sit amet consectetur. Tellus vel dolor.',
    img: conteudo,
    id:4,
  },
  {
    title:'Lorem ipsum dolor sit amet consectetur. Tellus vel dolor.',
    img: conteudo,
    id:5,
  },
  {
    title:'Lorem ipsum dolor sit amet consectetur. Tellus vel dolor.',
    img: conteudo,
    id:6,
  },
] 

function Conteudos() {
  return (
    <div className='w-full bg-light-background dark:bg-dark-background'>
      <section id="heroContent" className='lg:h-[100dvh] h-auto w-full lg:pt-20 pt-10 lg:flex-row flex-wrap-reverse flex justify-center items-center px-10 lg:px-36 py-12 gap-5 lg:gap-32'>
        <div id="heroText" className='lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start items-center'>
          <div className='flex flex-col lg:text-start lg:items-start items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Materiais</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 lg:text-[40px] font-poppins
                 dark:text-vanilla tracking-tighter '>
              Conteúdos Exclusivos
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-dark-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[420px]
                    text-center leading-loose lg:text-left pt-2 pb-6 font-inter lg:px-0 px-2 '>
            Explore nosso conteúdo exclusivo para aprimorar sua experiência com sistemas de gestão. Tenha acesso a materiais de apoio cuidadosamente elaborados para impulsionar a eficiência e a produtividade em sua empresa.</p>
          <Link
            to="content"
            smooth={true}
            offset={-90}
            className='flex gap-2 items-center font-semibold text-md text-white bg-button-gradient px-6 w-46 cursor-pointer hover:bg-button-gradient-hover py-[5px] rounded-[12px]'>Explorar Conteúdos<ChevronDownCircleIcon size={16} /></Link>
        </div>
        <div className=' max-w-[400px] lg:h-auto lg:mt-0 mt-[20%] md:mt-[10%] flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[280px] lg:max-w-[380px] translate-x-6 lg:w-[470px] drop-shadow-md ' src={heroshot} alt="HeroShot" />
        </div>
      </section>
      <section id='content' className='w-full h-auto lg:pb-20 pb-10 lg:px-36 px-10'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
          {content.map((c)=>{
            return(
              <div key={c.id}
              className='dark:bg-quaternary-dark px-3 pb-8 pt-3 bg-white rounded-xl dark:hover:bg-secondary-dark flex flex-col items-center text-center drop-shadow-lg hover:drop-shadow-2xl cursor-pointer gap-5 justify-start'>
              <img className='rounded-xl max-h-40 w-full' src={c.img}/>
              <h2 className='font-inter text-md font-semibold text-dark-blue dark:text-vanilla hover:text-primary-blue'>{c.title}</h2>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Conteudos