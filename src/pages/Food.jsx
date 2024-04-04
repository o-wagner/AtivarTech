import React, { useEffect, useState } from 'react'
import useTheme from '../context/theme'
import { Link } from 'react-scroll'
import heroshot from '../assets/HeroFood.png'
import { ChevronDownCircleIcon } from 'lucide-react'
import Segmentos from '../components/Segmentos'
import InfoSolution from '../components/InfoSolution'
import MoreFunc from '../components/MoreFunc'
import { FaWhatsapp } from 'react-icons/fa'
import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PopupModal from '../components/PopupModal'
import AllFunc from '../components/AllFunc'


function Food() {
  const [support, setSupport] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showFound, setShowFound] = useState(false)
  const supportShow = () => {
    if (window.scrollY >= 90) {
      setSupport(true);
    } else {
      setSupport(false);
    }
  }
  window.addEventListener('scroll', supportShow);
  const handleClick = () => {
    setShowModal(!showModal);
}
  return (
    <div className='dark:bg-dark-background bg-light-background w-full'>
      <> <PopupModal handleClick={handleClick} showModal={showModal} support={support} />
        <button onClick={() => handleClick()}>
          <a className={` ${support ? 'visible animate-fade-left duration-100' : 'invisible'}`}>
            <div className='dark:bg-tertiary-dark bg-dark-blue dark:hover:bg-secondary-dark transition-colors drop-shadow-2xl duration-150 hover:bg-[#071b38] rounded-full p-[14px] flex items-center justify-center bottom-6 right-8 z-30 fixed text-md lg:text-3xl'>
              <FaWhatsapp color='white' />
            </div>
          </a>
        </button>
      </>
      <section id="heroFood" className='lg:h-[100dvh] h-auto w-full lg:pt-16 pt-10 md:h-screen lg:flex-row flex-wrap-reverse flex justify-center items-center px-10 py-12 gap-5 lg:gap-[4%] md:gap-[4%] md:flex-nowrap'>
        <div id="heroText" className='lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start md:items-start items-center'>
          <div className='flex flex-col lg:text-start md:text-start lg:items-start md:items-start items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Food-Service</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 lg:text-[40px] font-poppins
                 dark:text-vanilla tracking-tighter '>
              Solução completa para Food
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[430px] md:max-w-[420px]
                    text-center leading-loose lg:text-left md:text-left pt-2 pb-6 font-inter lg:px-0 md:px-0 px-2 '>
            Tenha o controle total da sua empresa com soluções integradas, otimizando processos internos em poucos cliques, facilitando o dia-a-dia da sua empresa em todas etapas, desde a realização do pedido pelo seu cliente, a produção na cozinha, até a entrega e satisfação do seu cliente.</p>
          <Link
            to="segmento"
            smooth={true}
            offset={-50}
            className='flex gap-2 items-center font-semibold text-md text-white bg-button-gradient px-6 w-44 cursor-pointer hover:bg-button-gradient-hover py-[5px] rounded-[12px]'>Conheça mais<ChevronDownCircleIcon size={16} /> </Link>
        </div>
        <div className=' max-w-[600px] lg:h-auto lg:mt-0 mt-[20%] md:mt-0  flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[240px] lg:max-w-[400px] md:max-w-[300px] translate-x-6 lg:w-[400px] md:w-[300px] drop-shadow-md' src={heroshot} alt="HeroShot" />
        </div>
      </section>
      <section id='segmento' className='w-full lg:px-36 md:px-36 px-10 pb-24 flex flex-col items-center justify-center'>
        <div className='flex items-center flex-col justify-center lg:py-[50px] md:py-[50px] py-[40px] '>
          <h3 className='text-primary-blue uppercase text-[12px] font-inter font-semibold tracking-widest'>Conheça a solução</h3>
          <h1 className='lg:text-[40px] text-[25px] mb-2 tracking-tight lg:leading-[50px] leading-[35px] font-bold dark:text-vanilla text-dark-blue'>Segmentos de atuação</h1>
          <p className='font-inter text-greish-blue text-[14px] lg:text-[16px]  dark:text-blueish-gray lg:max-w-[680px] md:max-w-[680px] min-w-[300px] lg:min-w-[380px]
           px-2 text-center'>Nosso sistema de gestão e frente de caixa PDV atende diversos segmentos do mercado em
            todo o território brasileiro. Veja alguns dos nossos segmentos.</p>
        </div>
        <Segmentos segmento="food" />
        <div className='w-full flex-col items-end flex justify-end max-w-[970px] pt-4'>
          <button onClick={() => setShowFound(!showFound)}><h3 className='text-blueish-gray hover:underline font-semibold text-[14px] font-poppins'>Não localizou sua área específica?</h3></button>
          <div className={`${showFound ? 'block animate-fade-down' : 'hidden'} font-inter font-regular text-[13px] text-end text-blueish-gray max-w-[200px]`}>
            <NavLink to='/contato' className='text-primary-blue underline' id="link">Entre em contato</NavLink>
            <span> com um de nossos consultores para explorar possíveis soluções.</span>
          </div>
        </div>
      </section>
      <section id='recursos' className='w-full lg:px-36 px-10 py-24 dark:bg-quaternary-dark bg-darker-light-bg'>
        <div className='flex items-center flex-col justify-center'>
          <h3 className='dark:text-primary-blue text-blueish-gray uppercase text-[12px] font-inter font-semibold tracking-widest'>Recursos</h3>
          <h1 className='lg:text-[35px] text-[25px] font-poppins mb-2 lg:leading-[50px] leading-[35px] tracking-tight text-center font-bold dark:text-vanilla text-dark-blue'>Explore nossas Funcionalidades </h1>
          <p className='font-inter lg:text-[16px] text-[14px] text-greish-blue dark:text-blueish-gray lg:max-w-[630px] md:max-w-[680px] pb-10 min-w-[300px] lg:min-w-[380px]
           px-2 text-center'>Nós não entregamos somente software! Entregamos sistema, suporte, treinamento e acompanhamento da sua empresa! Seu sucesso é nosso sucesso! </p>
        </div>
        <div>
          <InfoSolution segmento="food" />
        </div>
      </section>
      <section id='moreFunc' className='lg:px-36 px-10 pb-24 pt-10'>
        <div className='flex items-center flex-col justify-center py-16 '>
          <h1 className='lg:text-[26px] text-[25px] font-poppins mb-2 tracking-tight max-w-[650px] font-bold text-center dark:text-vanilla text-dark-blue'>Um Ecossistema Completo De Soluções Inovadoras
</h1>
          {/* <p className='font-inter lg:text-[16px] text-[14px] text-greish-blue dark:text-blueish-gray lg:max-w-[380px] min-w-[300px] lg:min-w-[380px]
           px-2 text-center'>Proporcionando novas tecnologias para a evolução de sua empresa e seu cliente</p> */}
        </div>
        <MoreFunc segmento="food" />
      </section>
      <section id='allFunc' className=' dark:bg-quaternary-dark bg-neutral-300 lg:px-[4%] px-8 pb-24 pt-10'>
        <div className='flex items-center flex-col justify-center py-16 '>
          <h1 className='lg:text-[26px] text-[25px] font-poppins mb-2 tracking-tight max-w-[650px] font-bold text-center dark:text-vanilla text-dark-blue'>
          Tudo que você precisa para Food-Service em um só sistema</h1>
        </div>
        <AllFunc segmento="food" />
      </section>      
    </div >
  )
}

export default Food