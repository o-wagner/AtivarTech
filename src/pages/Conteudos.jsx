import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import heroshot from '../assets/HeroContent.png'
import conteudo from '../assets/conteudo/content2.jpg'
import { ArrowBigRight, ChevronDownCircleIcon, ChevronRight, MoveRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import ativar from '../assets/Ativar.png'
import PopupModal from '../components/PopupModal'
import { FaWhatsapp } from 'react-icons/fa'
import { PrismicImage, PrismicText, useAllPrismicDocumentsByType } from '@prismicio/react';
import elipse from '../assets/Elipse.png'
import elipse2 from '../assets/Elipse2.png'

const content = [
  {
    title: 'Aprenda a cadastrar clientes',
    img: conteudo,
    id: 1,
  },
  {
    title: 'Aprenda a cadastrar NFC-e',
    img: conteudo,
    id: 2,
  },
  {
    title: 'Como cadastrar produtos?',
    img: conteudo,
    id: 3,
  },
  {
    title: 'Aprenda a cadastrar clientes.',
    img: conteudo,
    id: 4,
  },

]

function Conteudos() {
  const [support, setSupport] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(!showModal);
  }

  return (
    <div className='w-full bg-light-background dark:bg-dark-background'>
      <> <PopupModal handleClick={handleClick} showModal={showModal} support={support} />
        <button onClick={() => handleClick()}>
          <div className='dark:bg-tertiary-dark bg-dark-blue dark:hover:bg-secondary-dark transition-colors drop-shadow-2xl duration-150 hover:bg-[#071b38] rounded-full p-[14px] flex items-center justify-center bottom-6 right-8 z-30 fixed text-md lg:text-3xl'>
            <FaWhatsapp color='white' />
          </div>
        </button>
      </>
      <img loading='lazy' className='-z-0 absolute top-0 opacity-50 w-[30%]' src={elipse} />
      <img loading='lazy' className='-z-0 absolute right-0 top-0 opacity-40 w-[40%]' src={elipse2} />
      <section id="heroContent" className='lg:h-[100dvh] h-auto w-full lg:pt-10 md:h-[90vh] pt-10 md:pt-16 lg:flex-row md:flex-nowrap flex-wrap-reverse flex justify-center items-center px-10 py-12 gap-5 lg:gap-[6%] md:gap-[6%] '>
        <div id="heroText" className='lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start md:items-start items-center'>
          <div className='flex flex-col lg:text-start md:text-start lg:items-start md:items-start  items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Materiais</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 lg:text-[40px] font-poppins
                 dark:text-vanilla tracking-tighter '>
              Conteúdos Exclusivos
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[420px] md:max-w-[420px]
                    text-center leading-loose lg:text-left md:text-left pt-2 pb-6 font-inter lg:px-0 md:px-0 px-2 '>
            Explore nosso conteúdo exclusivo para aprimorar sua experiência com sistemas de gestão. Tenha acesso a materiais de apoio cuidadosamente elaborados para impulsionar a eficiência e a produtividade em sua empresa.</p>
          <Link
            to="content"
            smooth={true}
            offset={-20}
            className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-semibold font-inter text-[14px] gap-2 cursor-pointer text-slate-100 flex justify-center items-center text-center'>Explorar Conteúdos<ChevronDownCircleIcon size={16} /></Link>
        </div>
        <div className='max-w-[360px] lg:h-auto lg:mt-0 mt-[20%] md:mt-0 flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[240px] lg:max-w-[320px] md:max-w-[260px] lg:w-[320px] drop-shadow-md ' src={heroshot} alt="HeroShot" />
        </div>
      </section>
      <section id='content' className='w-full h-auto lg:pb-20 pb-10 lg:px-44 px-16'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5'>
        {/* <Content/> */}
          
          {/* {content.map((c) => {
            return (
              <NavLink key={c.id}
                className='dark:bg-quaternary-dark px-4 py-4 border-slate-300 duration-200 transition-transform hover:-translate-y-1 border dark:border-slate-900 bg-white rounded-xl dark:hover:bg-secondary-dark flex flex-col drop-shadow-lg hover:drop-shadow-xl gap-3 justify-start'>
                <img className='rounded-xl max-h-40 w-full' src={c.img} />
                <div className='gap-3 pb-2 flex-col flex'>
                  <h2 className='font-inter text-md font-semibold text-dark-blue dark:text-vanilla'>{c.title}</h2>
                  <span className='text-blueish-gray text-sm font-inter'>Lorem ipsum dolor sit amet consec tetur adipis icing elit. Odio deserunt eius cupiditate incidunt fugit veritatis.</span>
                </div>
                <div className='flex flex-row items-center justify-end text-sm gap-1 font-inter text-dark-blue dark:text-vanilla'>
                  <p>Ver Mais</p>
                  <ChevronRight className='translate-y-[1.8px]' size={16} />
                </div>
              </NavLink>
            )
          })} */}
        </div>
        <section className='flex flex-col text-dark-blue dark:text-blueish-gray items-center justify-center w-full h-screen'>
          <div className='flex items-center flex-col '>
            <h2 className='font-poppins text-[30px] leading tracking-widest font-semibold uppercase text-primary-blue dark:text-vanilla text-center'>Em Breve!</h2>
            <p className='font-inter text-sm pb-4 text-center'>Conteúdos exclusivos em breve.</p>
            <NavLink to="/" className='px-10 min-w-40 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-semibold font-inter text-sm cursor-pointer text-slate-100 flex justify-center items-center text-center'>Voltar para início</NavLink>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Conteudos