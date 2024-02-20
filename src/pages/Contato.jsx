import React from 'react'
import HeroContact from '../assets/HeroContact.png'
import Button from '../components/Button'
import { IoIosCall, IoIosMail, IoIosPin, IoIosPeople } from "react-icons/io";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiFacebookCircleLine, RiLinkedinBoxLine } from 'react-icons/ri';

const info = [
  {
    icon: <IoIosCall color="#18A2DE" size={20} />,
    title: 'Telefone',
    info: '(33) 2101-0601 ',
  },
  {
    icon: <IoIosMail color='#18A2DE' size={20} />,
    title: 'Email',
    info: 'contato@ativartecnologia.com',
  },
  {
    icon: <IoIosPin fill="#18A2DE" size={20} />,
    title: 'Endereço',
    info: 'Av. Milton Campos, 2852 - 1° Andar, Centro, Guanhães-MG',
  },
]

function Contato() {
  return (
    <div className='dark:bg-dark-background bg-light-background w-full h-full'>
      <section id="heroContato" className='lg:h-[100dvh] h-auto w-full lg:pt-16 pt-10 lg:flex-row flex-wrap-reverse flex justify-center items-center px-10 lg:px-36 py-12 gap-5 lg:gap-[72px]'>
        <div id="heroText" className='lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start items-center'>
          <div className='flex flex-col lg:text-start lg:items-start items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Fale Conosco</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 lg:text-[40px] font-poppins
             dark:text-vanilla tracking-tighter '>
              Entre em Contato
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-dark-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[420px]
                text-center leading-loose lg:text-left pt-2 pb-6 font-inter lg:px-0 px-2 '>
            Ja estamos ansiosos para o seu contato, descubra como nossas soluções de gestão de negócios podem impulsionar o seu sucesso. Estamos aqui para ajudar a encontrar a melhor solução para as necessidades únicas da sua empresa.</p>
          <Button
            className='flex gap-2 items-center font-semibold text-md text-white bg-button-gradient px-6 w-44 cursor-pointer hover:bg-button-gradient-hover py-[5px] rounded-[12px]' name="Falar pelo Whatsapp" />
        </div>
        <div className=' max-w-[540px] lg:h-auto lg:mt-0 mt-[20%] md:mt-[10%] flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[300px] lg:max-w-[500px] lg:translate-x-10 -translate-x-4 lg:w-[430px] drop-shadow-md ' src={HeroContact} alt="EntreEmContato-Image" />
        </div>
      </section>
      <section className='lg:px-36 px-10 md:h-auto h-auto lg:py-10 pb-8'>
        <div className=' flex flex-wrap dark:bg-quaternary-dark bg-white rounded-xl w-full'>
          <div className=' lg:px-[100px] px-8 py-16 justify-between flex-col gap-8 w-full flex h-1/2 lg:w-1/2 text-dark-blue dark:text-vanilla'>
            <div className='items-center flex flex-col'>
              <h3 className='text-2xl font-bold font-poppins'>Fale Conosco</h3>
              <p className='text-blueish-gray font-inter text-center leading-snug '>Nos envie uma mensagem preenchendo o formulário ao lado</p>
            </div>
            {info.map((i) => {
              return (
                <div className=' flex flex-col self-start '>
                  <div className='flex-row break-words flex gap-2 items-center dark:text-vanilla text-dark-blue font-semibold font-poppins'>
                    {i.icon}
                    <h3>{i.title}</h3>
                  </div>
                  <p className='text-sm font-inter font-semibold text-blueish-gray'>{i.info}</p>
                </div>
              )
            })}
            <div className=' flex flex-col self-start'>
              <div className='flex-row flex gap-2 items-center dark:text-vanilla text-dark-blue font-semibold font-poppins'>
                <IoIosPeople size={25} color="#18A2DE" />
                <h3>Redes Sociais</h3>
              </div>
              <div className='text-sm font-semibold gap-[2px] pt-1 flex text-blueish-gray'>
                <a className='dark:hover:text-vanilla hover:text-primary-blue' href="https://instagram.com/ativartecnologia" target='_blank' rel="noreferrer noopener"><FaInstagram size={19} /></a>
                <a className='dark:hover:text-vanilla hover:text-primary-blue' href="https://br.linkedin.com/company/ativartecnologia" target='_blank' rel="noreferrer noopener"><RiLinkedinBoxLine size={20} /></a>
                <a className='dark:hover:text-vanilla hover:text-primary-blue' href="https://www.facebook.com/ativartecnologia/" target='_blank' rel="noreferrer noopener"><RiFacebookCircleLine size={20} /></a>
                <a className='dark:hover:text-vanilla hover:text-primary-blue' href="https://wa.me/5533998315881" target='_blank' rel="noreferrer noopener"><FaWhatsapp size={20} /></a>
              </div>
            </div>
          </div>
          <div className='dark:bg-tertiary-dark bg-gray-300 lg:rounded-e-xl rounded-b-xl lg:rounded-b-none lg font-poppins flex-col items-center lg:px-16 px-8 w-full py-16 h-1/2 lg:w-1/2 text-dark-blue dark:text-vanilla'>
            <div className='font-poppins dark:text-vanilla flex flex-col justify-evenly gap-10'>
              <label className='flex flex-col gap-2 text-md'>Nome Completo
                <input className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu nome completo" type="text" />
              </label>
              <label className='flex flex-col gap-2 text-md'>Email
                <input className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu melhor email" type="text" />
              </label>
              <label className='flex flex-col gap-2 text-md'>Mensagem
                <textarea className="rounded-md py-2 h-28 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira sua mensagem" type="text" />
              </label>
              <Button name="Enviar Mensagem" />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato