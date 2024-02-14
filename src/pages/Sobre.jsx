import React from 'react'
import ContainerAbout from '../components/ContainerAbout'
import heroshot from '../assets/HeroAbout.png'
import ativarshot from '../assets/ativar_tec.png'
import { ChevronDownCircleIcon } from 'lucide-react'
import { Link } from 'react-scroll'


function Sobre() {
  return (
    <div className='dark:bg-dark-background bg-light-background'>
      <div id="heroSection" className='h-[100dvh] w-full lg:pt-16 lg:flex-row flex-wrap-reverse flex justify-center items-center gap-0 lg:gap-[72px]'>
        <div id="heroText" className='lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start items-center'>
          <div className='flex flex-col lg:text-start lg:items-start items-center text-center'>
            <h3 className='text-primary-blue uppercase text-[12px] font-semibold tracking-widest'>Ativar Tecnologia</h3>
            <h1 className='text-dark-blue font-semibold lg:pt-4 lg:w-[470px] w-[340px] lg:leading-[50px] leading-[40px] text-[30px] lg:px-0 lg:text-[45px] font-poppins
                 dark:text-vanilla tracking-tighter '>
              Otimizando a gestão do seu negócio
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-dark-blue font-normal min-w-[300px] max-w-[600px] lg:max-w-[420px]
                    text-center leading-loose lg:text-left mb-6 lg:px-0 font-inter px-16'>
            Somos a ponte entre sua empresa e o sucesso.
            Desenvolvemos soluções que não apenas organizam, mas também se adaptam ao
            DNA único do seu negócio, promovendo uma gestão mais humana e eficaz.</p>
          <Link
            to="history"
            smooth={true}
            offset={-20}
            className='flex gap-2 items-center font-semibold text-md text-white bg-button-gradient px-6 w-44 cursor-pointer hover:bg-button-gradient-hover py-[5px] rounded-[12px]'>Conheça mais<ChevronDownCircleIcon size={16} /> </Link>
        </div>
        <div className=' max-w-[570px] lg:h-auto lg:mt-0 mt-[20%] md:mt-[10%] flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[300px] lg:max-w-[500px] lg:translate-x-10 translate-x-6 lg:w-[470px] drop-shadow-md ' src={heroshot} alt="HeroShot" />
        </div>
      </div>
      <div id="history" className='h-screen px-36 flex gap-28 items-center justify-center bg-neutral-300 dark:bg-quaternary-dark '>
        <img className='w-[430px]' src={ativarshot} alt='ativarfoto' />
        <div className='flex flex-col gap-4'>
            <h1 className='text-[40px] font-bold dark:text-vanilla text-dark-blue'>Nossa <span className='text-primary-blue'>História</span></h1>
            <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-dark-blue font-normal leading-loose min-w-[300px] max-w-[600px] lg:max-w-[460px]
                    text-center lg:text-left mb-6 lg:px-0 font-inter px-16'>Desde 2021 atuamos em Guanhães e região com as melhores soluções para seu negócio. Nosso compromisso com a excelência e a satisfação do cliente nos diferencia, enquanto nossa equipe apaixonada e experiente impulsiona nossa missão de liderar o caminho para o sucesso empresarial da região. Junte-se a nós enquanto continuamos a escrever nossa história.</p>
        </div>
      </div>
      <ContainerAbout />
    </div>
  )
}

export default Sobre