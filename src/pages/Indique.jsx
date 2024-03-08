import { ChevronDownCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Input from 'react-phone-number-input/input'
import heroIndique from '../assets/HeroIndique.png'
import { NavLink } from 'react-router-dom'
const sendEmail = (e) => {
  e.preventDefault();
  alert('email enviado');
}
function Indique() {
  const [number, setNumber] = useState('');
  const [numberOrg, setNumberOrg] = useState('');
  return (
    <div className='bg-light-background dark:bg-dark-background w-full'>
      <section id="heroIndique" className='lg:h-[100dvh] h-auto w-full lg:pt-[4.5rem] pt-10 lg:flex-row flex-wrap-reverse flex justify-center items-center px-10 py-12 gap-5 lg:gap-[6%]'>
        <div id="heroText" className='lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start items-center'>
          <div className='flex flex-col lg:text-start lg:items-start items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Promoção</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 lg:text-[40px] font-poppins
                 dark:text-vanilla tracking-tighter '>
              Indique e ganhe!
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-dark-blue font-normal min-w-[300px] lg:min-w-[450px] max-w-[600px] lg:max-w-[420px]
                    text-center leading-loose lg:text-left pt-2 pb-6 font-inter lg:px-0 px-2 '>
            Indique empresas para os sistemas da <span className='font-semibold text-primary-blue'>Ativar Tecnologia</span> e receba uma recompensa para você ou para sua empresa.</p>
          <Link
            to="indique"
            smooth={true}
            offset={-100}
            className='flex gap-2 items-center font-semibold text-md text-white bg-button-gradient px-6 cursor-pointer hover:bg-button-gradient-hover py-[5px] rounded-[12px]'>Saiba como funciona<ChevronDownCircleIcon size={16} /> </Link>
        </div>
        <div className=' max-w-[540px] lg:h-auto lg:mt-0 mt-[20%] md:mt-[10%] flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[300px] lg:max-w-[360px] lg:translate-x-10 translate-x-6 lg:w-[350px] drop-shadow-md ' src={heroIndique} alt="EntreEmContato-Image" />
        </div>
      </section>
      <section id="indique" className='pb-12 flex items-center justify-center lg:px-[120px] px-8'>
        <div className='border border-slate-400 dark:border-slate-700 flex flex-wrap lg:flex-row flex-col lg:items-stretch items-center w-full'>
          <div className='lg:w-1/2 h-[inherit] dark:text-vanilla bg-white dark:bg-secondary-dark text-dark-blue font-poppins gap-4 justify-evenly flex flex-col lg:p-12 p-8 py-12'>
            <h3 className='dark:text-blueish-gray text-primary-blue text-[12px] text-center font-inter font-semibold leading-4 tracking-widest uppercase'>Indique e Ganhe</h3>
            <h2 className='text-2xl text-center'>Como funciona a promoção?</h2>
            <div className='dark:bg-secondary-dark justify-evenly gap-10 h-full flex flex-col dark:text-vanilla text-dark-blue font-inter'>

              <p className='text-[14px] text-blueish-gray text-justify'>1. Aqui na Ativar Tecnologia, a indicação é quando você nos recomenda para possíveis clientes. Basta nos fornecer os nomes, números de telefone e e-mails de possíveis empresas, e se elas se tornarem clientes, você e sua empresa ganham recompensas!</p>
              <p className='text-[14px] text-blueish-gray text-justify'>2. Caso a empresa indicada já tenha tido contato comercial prévio com a Ativar Tecnologia, a indicação não será considerada válida, e não será oferecida nenhuma bonificação relacionada a esse negócio.</p>
              <p className='text-[14px] text-blueish-gray text-justify'>3. A indicação será bonificada conforme prêmio do mês por cada negócio aprovado e recebido.</p>
              <p className='text-[14px] text-blueish-gray text-justify'>4. No caso de múltiplas indicações para a mesma empresa, apenas o primeiro indicador será elegível para receber a bonificação.</p>
              <h2 className='self-center text-sm rounded-lg'>Indicação + Contratação = Você ganha!</h2>
            </div>
          </div>
          <form onSubmit={sendEmail} className='dark:bg-tertiary-dark w-full lg:w-1/2 bg-gray-300 font-poppins flex-col items-center lg:p-12 p-8  text-dark-blue dark:text-vanilla'>
            <div className='font-poppins dark:text-vanilla flex flex-col justify-evenly'>
              <div className='flex flex-col gap-10'>
                <label htmlFor='fullName' className='flex flex-col gap-2 text-md'>Nome Completo
                  <input type='text' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu nome completo" />
                </label>
                <label htmlFor='emailFrom' className='flex flex-col gap-2 text-md'>Email
                  <input type='email' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu melhor email" />
                </label>
                <label className='flex flex-col gap-2 text-md'>Número*
                  <Input value={number}
                    required={true}
                    onChange={setNumber}
                    country="BR"
                    className='rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm' placeholder="Insira seu número de telefone" />
                </label>
                <label className='flex flex-col gap-2 text-md'>Nome da Empresa Indicada*
                  <input required='true' type='text' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira o nome da empresa indicada" />
                </label>
                <label className='flex flex-col gap-2 text-md'>Número da empresa indicada*
                  <Input value={numberOrg}
                    onChange={setNumberOrg}
                    required={true}
                    country="BR"
                    className='rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm' placeholder="Insira o telefone da empresa indicada" />
                </label>
              </div>
              <div className='flex flex-col text-blueish-gray py-8 gap-6'><div className='flex gap-2 text-sm'><input type="checkbox" required={true} /> <p> Li e estou de acordo com o <NavLink to="/politica-de-privacidade" className='text-dark-blue dark:text-primary-blue hover:underline'>Termo de uso e Política de Privacidade</NavLink> </p></div>
              </div>
              <button type='submit' className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-regular text-[14px] cursor-pointer text-slate-100 flex justify-center items-center text-center'>
                Fazer Indicação</button>

            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Indique