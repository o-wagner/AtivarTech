import React, { useEffect } from 'react'
import HeroContact from '../assets/HeroContact.png'
import Button from '../components/Button'
import { IoIosCall, IoIosMail, IoIosPin, IoIosPeople } from "react-icons/io";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiFacebookCircleLine, RiLinkedinBoxLine } from 'react-icons/ri';
import ContactForm from '../components/ContactForm';
import elipse from '../assets/elipse.png'
import elipse2 from '../assets/elipse2.png'
const info = [
  {
    icon: <IoIosCall color="#18A2DE" size={20} />,
    title: 'Telefone',
    path: 'tel:+55332101-0601',
    info: '(33) 2101-0601 ',

  },
  {
    icon: <IoIosMail color='#18A2DE' size={20} />,
    title: 'Email',
    path: 'mailto:contato@ativartecnologia.com',
    info: 'contato@ativartecnologia.com',
  },
  {
    icon: <IoIosPin fill="#18A2DE" size={20} />,
    title: 'Endereço',
    path: 'https://maps.app.goo.gl/dfA1RgvP9D77ABGaA',
    info: 'Av. Milton Campos, 2852 - 1° Andar, Centro, Guanhães-MG',
  },
]

function Contato() {
  return (
    <div className='dark:bg-dark-background bg-light-background w-full h-full'>
      <img loading='lazy' className='-z-0 absolute top-0 opacity-40 w-[30%]' src={elipse} />
      <img loading='lazy' className='-z-0 absolute -right-20 top-0 opacity-20 w-[40%]' src={elipse2} />
      <section id="heroContato" className='lg:h-[100dvh] md:h-screen h-auto w-full lg:pt-[4.5rem] pt-10 lg:flex-row md:flex-row flex-wrap-reverse flex justify-center items-center px-10 py-12 gap-5 lg:gap-[68px] md:gap-[68px] '>
        <div id="heroText" className='z-10 lg:gap-2 md:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start md:items-start items-center'>
          <div className='flex flex-col lg:text-start md:text-start lg:items-start md:items-start items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Fale Conosco</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 md:px-0 lg:text-[40px] font-poppins
             dark:text-vanilla tracking-tighter '>
              Entre em Contato
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue font-normal min-w-[300px] lg:min-w-[400px] md:min-w-[400px] max-w-[600px] lg:max-w-[420px] md:max-w-[420px]
                text-center leading-loose lg:text-left md:text-left pt-2 pb-6 font-inter lg:px-0 md:px-0 px-2 '>
            Ja estamos ansiosos para o seu contato, descubra como nossas soluções de gestão de negócios podem impulsionar o seu sucesso. Estamos aqui para ajudar a encontrar a melhor solução para as necessidades únicas da sua empresa.</p>
          <a target='_blank' rel="noreferrer noopener" href="https://wa.me/553321010601" className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-semibold font-inter text-[14px] cursor-pointer text-slate-100 flex justify-center items-center text-center'>
            Falar pelo Whatsapp</a>
        </div>
        <div className='max-w-[450px] lg:h-auto lg:mt-0 mt-[20%] md:mt-0 flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[240px] lg:max-w-[400px] md:max-w-[300px] translate-x-6 lg:w-[400px] drop-shadow-md' src={HeroContact} alt="EntreEmContato-Image" />
        </div>
      </section>
      <section className=' lg:px-[80px] md:px-[90px] px-10 lg:py-12 flex flex-col gap-10 pb-8'>
        <div className='border z-10 border-slate-400 dark:border-slate-900 flex flex-wrap dark:bg-quaternary-dark bg-white rounded-xl w-full'>
          <div className=' z-10 lg:px-[100px] md:px-[70px] px-8 py-16 justify-between flex-col gap-8 w-full flex h-1/2 lg:w-1/2 md:w-1/2 text-dark-blue dark:text-vanilla'>
            <div className='items-center flex flex-col'>
              <h3 className='text-2xl font-bold font-poppins'>Fale Conosco</h3>
              <p className='text-blueish-gray font-inter text-center leading-snug'>Nos envie uma mensagem preenchendo o formulário ao lado</p>
            </div>
            {info.map((i) => {
              return (
                <div key={i.title} className='z-10 flex flex-col self-start '>
                  <div className='flex-row break-words flex gap-2 items-center dark:text-vanilla text-dark-blue font-semibold font-poppins'>
                    {i.icon}
                    <h3>{i.title}</h3>
                  </div>
                  <a target='_blank' rel="noopener noreferrer" href={i.path}><p className='text-sm font-inter font-semibold text-blueish-gray'>{i.info}</p></a>
                </div>
              )
            })}
            <div className=' flex flex-col self-start'>
              <div className='flex-row flex gap-2 items-center dark:text-vanilla text-dark-blue font-semibold font-poppins'>
                <IoIosPeople size={25} color="#18A2DE" />
                <h3>Redes Sociais</h3>
              </div>
              <div className='text-sm font-semibold gap-2 pt-1 flex text-blueish-gray'>
                <a className='dark:hover:text-vanilla hover:text-primary-blue' href="https://instagram.com/ativartecnologia" target='_blank' rel="noreferrer noopener"><FaInstagram size={19} /></a>
                <a className='dark:hover:text-vanilla hover:text-primary-blue' href="https://br.linkedin.com/company/ativartecnologia" target='_blank' rel="noreferrer noopener"><RiLinkedinBoxLine size={20} /></a>
                <a className='dark:hover:text-vanilla hover:text-primary-blue' href="https://www.facebook.com/ativartecnologia/" target='_blank' rel="noreferrer noopener"><RiFacebookCircleLine size={20} /></a>
                <a className='dark:hover:text-vanilla hover:text-primary-blue' target='_blank' rel="noreferrer noopener" href="https://wa.me/553321010601"><FaWhatsapp size={20} /></a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className='w-full flex items-center justify-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.4881132562464!2d-42.937687499999996!3d-18.7763883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafb4abeea50f19%3A0x75cbcc10045a25dd!2sAv.%20Milton%20Campos%2C%202852%20-%20Guanh%C3%A3es%2C%20MG%2C%2039740-000!5e0!3m2!1spt-BR!2sbr!4v1708519478146!5m2!1spt-BR!2sbr" width="100%" height="450" style={{ 'border': '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contato