import React, { useState } from 'react'
import ContainerAbout from '../components/ContainerAbout'
import heroshot from '../assets/HeroAbout.png'
import ativarshot from '../assets/ativar_tec.png'
import { ChevronDownCircleIcon, Eye, Goal, HeartHandshake } from 'lucide-react'
import { Link } from 'react-scroll'
import { FaWhatsapp } from 'react-icons/fa'
import { X } from 'lucide-react'
const mvv = [
  {
    icon: <Goal size={32} className='dark:text-vanilla text-dark-blue' />,
    title: 'Missão',
    text: 'A nossa missão é promover sistemas de gestão ágeis, que conciliem qualidade e tecnologia para a solução de problemas gerenciais, priorizando a satisfação do cliente.',
  },
  {
    icon: <Eye size={32} className='dark:text-vanilla text-dark-blue' />,
    title: 'Visão',
    text: 'Ter reconhecimento no mercado como uma empresa de excelência na prestação de serviços, entregando qualidade e segurança nos serviços prestados.',
  },
  {
    icon: <HeartHandshake size={32} className='dark:text-vanilla text-dark-blue' />,
    title: 'Valores',
    text: 'Manter a ética optando pelo justo e correto na tomada de decisões; Trabalhar em equipe, com respeito, diálogo e transparência; Buscar inovação para solucionar problemas e satisfazer o cliente.',
  }
]

function Sobre() {
  const [support, setSupport] = useState(false)
  const [showModal, setShowModal] = useState(false)
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
     <><div className={`${support ? 'visible animate-fade-left duration-200 ' : 'invisible'} ${showModal ? 'visible animate-fade-left' : 'invisible'} bg-white bottom-6 right-[100px] rounded-lg h-64 w-64 z-30 fixed drop-shadow-2xl dark:bg-secondary-dark`}>
        <div className='py-[14px] dark:text-vanilla font-poppins font-semibold text-sm bg-dark-blue rounded-t-lg flex flex-row items-center justify-between text-white px-4'>Olá, seja bem vindo!
          <button onClick={() => handleClick()}><X size={18} /></button></div>
        <div className='items-center flex flex-col'>
          <div className='text-dark-blue dark:text-vanilla px-4 flex justify-center text-center py-4'><p>Precisa de atendimento? Converse com um de nossos colaboladores pelo Whatsapp </p></div>
          <div className=' lg:px-3 flex items-center justify-center gap-10 py-5 text-dark-blue dark:text-vanilla text-2xl'>
            <a href="https://wa.me/553321010601" target='_blank' rel="noreferrer noopener" className='flex flex-col items-center justify-center animate-fade-left dark:hover:text-white '>
              <FaWhatsapp />
              <p className='text-sm'>Entre em contato</p>
            </a>
          </div>
        </div>
      </div>
      <button onClick={() => handleClick()}>
        <a className={` ${support ? 'visible animate-fade-left duration-100' : 'invisible'}`}>
          <div className='dark:bg-tertiary-dark bg-dark-blue dark:hover:bg-secondary-dark transition-colors drop-shadow-2xl duration-150 hover:bg-[#071b38] rounded-full p-[14px] flex items-center justify-center bottom-6 right-8 z-30 fixed text-md lg:text-3xl'>
            <FaWhatsapp color='white' />
          </div>
        </a>
      </button></>
      <section id="heroAbout" className='lg:h-screen h-auto w-full lg:pt-20 pt-10 lg:flex-row flex-wrap-reverse flex justify-center items-center px-10 py-12 gap-5 lg:gap-[85px]'>
        <div id="heroText" className='lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start items-center'>
          <div className='flex flex-col lg:text-start lg:items-start items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Ativar Tecnologia</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 lg:text-[40px] font-poppins
                 dark:text-vanilla tracking-tighter '>
              Otimizando a gestão do seu negócio
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-dark-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[420px]
                    text-center leading-loose lg:text-left pt-2 pb-6 font-inter lg:px-0 px-2 '>
            Somos a ponte entre sua empresa e o sucesso.
            Desenvolvemos soluções que não apenas organizam, mas também se adaptam ao
            DNA único do seu negócio, promovendo uma gestão mais humana e eficaz.</p>
          <Link
            to="history"
            smooth={true}
            offset={-100}
            className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
            hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
            font-semibold font-inter text-[14px] gap-2 cursor-pointer text-slate-100 flex justify-center items-center text-center'>Ativar Tecnologia<ChevronDownCircleIcon size={16} /> </Link>
        </div>
        <div className=' max-w-[450px] lg:h-auto lg:mt-0 mt-[20%] md:mt-[10%] flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[300px] lg:max-w-[500px] lg:translate-x-10 translate-x-6 lg:w-[470px] drop-shadow-md ' src={heroshot} alt="HeroShot" />
        </div>
      </section>
      <section id="history" className='h-auto py-12 flex-wrap lg:px-36 px-10 flex items-center justify-center lg:gap-28 gap-5 bg-darker-light-bg dark:bg-quaternary-dark '>
        <img className='lg:w-[430px] w-[280px]' src={ativarshot} alt='ativarfoto' />
        <div className='flex flex-col items-center lg:items-start gap-4 text-center lg:text-start'>
          <h1 className='lg:text-[40px] text-[30px] w-[320px] font-bold dark:text-vanilla text-dark-blue'>Nossa <span className='text-primary-blue'>História</span></h1>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue font-normal leading-loose min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[460px]
                    text-center lg:text-left mb-6 lg:px-0 font-inter px-2'>Desde 2021 atuamos em Guanhães e região com as melhores soluções para seu negócio. Nosso compromisso com a excelência e a satisfação do cliente nos diferencia, enquanto nossa equipe apaixonada e experiente impulsiona nossa missão de liderar o caminho para o sucesso empresarial da região. Junte-se a nós enquanto continuamos a escrever nossa história.</p>
        </div>
      </section>
      <section className=' h-auto py-16 flex flex-col items-center justify-center gap-2 px-10 lg:px-36'>
        <h3 className='text-primary-blue uppercase text-[12px] font-inter font-semibold tracking-widest'>A Ativar Tecnologia</h3>
        <h1 className='lg:text-[40px] text-[25px] tracking-tight font-bold dark:text-vanilla text-dark-blue'>Missão, Visão e Valores</h1>
        <p className='font-inter lg:text-[16px] text-[14px] leading-6 text-greish-blue dark:text-blueish-gray max-w-[600px] min-w-[300px] lg:min-w-[380px] px-2 text-center'>Saiba mais sobre o que nos impulsiona e como estamos moldando o futuro da tecnologia através de nossa visão inspiradora e valores fundamentais.</p>
        <div className=' grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center mt-10 '>
          {mvv.map((item) => {
            return (
              <div key={item.icon} className='bg-white 
              hover:drop-shadow-xl hover:-translate-y-1 transition-transform duration-200 ease-in-out drop-shadow-lg
              dark:bg-quaternary-dark py-5 px-8 rounded-lg dark:hover:bg-secondary-dark lg:max-w-[350px] 
              max-w-[280px] min-h-[350px] lg:min-h-[310px] justify-evenly flex flex-col border border-slate-300 dark:border-slate-700'>
                <div className='flex gap-2 flex-col'> {item.icon}
                  <h4 className='dark:text-vanilla text-dark-blue font-bold text-xl'>{item.title}</h4>
                </div>
                <p className='dark:text-lighter-gray text-dark-blue'>{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>
      <ContainerAbout />
    </div>
  )
}

export default Sobre