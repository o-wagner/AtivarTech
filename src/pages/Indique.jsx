import { ChevronDownCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Input from 'react-phone-number-input/input'
import heroIndique from '../assets/HeroIndique.png'
import { NavLink } from 'react-router-dom'
import elipse from '../assets/Elipse.png'
import elipse2 from '../assets/Elipse2.png'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
function Indique() {
  const [number, setNumber] = useState('');
  const [numberOrg, setNumberOrg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    if (emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID2, e.target, import.meta.env.VITE_PUBLIC_KEY)) {
        Swal.fire({
            title: "Muito bem",
            text: "Mensagem Enviada com Sucesso!",
            icon: "success"
        })
    }else{
        Swal.fire({
            title: "Erro no envio!",
            text: "Mensagem Não foi Enviada!",
            icon: "error"
        })
    }
    setStatus(true)
}

  return (
    <div className='bg-light-background dark:bg-dark-background w-full'>
      <img loading='lazy' className='-z-0 absolute top-0 opacity-50 w-[30%]' src={elipse} />
      <img loading='lazy' className='-z-0 absolute right-0 top-0 opacity-40 w-[40%]' src={elipse2} />
      <section id="heroIndique" className='lg:h-[100dvh] md:h-screen h-auto w-full lg:pt-[4.5rem] pt-10 lg:flex-row flex-wrap-reverse flex justify-center items-center px-10 py-12 gap-5 lg:gap-[6%] md:gap-[6%] md:flex-nowrap'>
        <div id="heroText" className='z-10 lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start md:items-start items-center'>
          <div className='flex flex-col lg:text-start lg:items-start md:items-start md:text-start items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Promoção</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 md:px-0 lg:text-[40px] font-poppins
                 dark:text-vanilla tracking-tighter '>
              Indique e ganhe!
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue font-normal min-w-[300px] lg:min-w-[450px] max-w-[600px] lg:max-w-[420px] md:max-w-[420px]
                    text-center leading-loose lg:text-left md:text-left pt-2 pb-6 font-inter lg:px-0 md:px-0 px-2 '>
            Indique empresas para os sistemas da <span className='font-semibold text-primary-blue cursor-pointer'>Ativar Tecnologia</span> e receba uma recompensa para você ou para sua empresa.</p>
          <Link
            to="indique"
            smooth={true}
            offset={-100}
            className='flex gap-2 items-center font-semibold text-md text-white bg-button-gradient px-6 cursor-pointer hover:bg-button-gradient-hover py-[5px] rounded-[12px]'>Saiba como funciona<ChevronDownCircleIcon size={16} /> </Link>
        </div>
        <div className=' max-w-[540px] lg:h-auto lg:mt-0 mt-[20%] md:mt-0 flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[240px] lg:max-w-[400px] lg:translate-x-6 translate-x-6 lg:w-[400px] drop-shadow-md ' src={heroIndique} alt="EntreEmContato-Image" />
        </div>
      </section>
      <section id="indique" className='z-10 pb-12 flex items-center justify-center lg:px-[100px] md:px-[70px] px-8'>
        <div className='z-10 border border-slate-400 dark:border-slate-800 flex flex-wrap lg:flex-row md:flex-row flex-col lg:items-stretch md:items-stretch items-center w-full'>
          <div className='z-10 lg:w-1/2 md:w-1/2 h-[inherit] dark:text-vanilla bg-white dark:bg-secondary-dark text-dark-blue font-poppins gap-4 justify-evenly flex flex-col lg:p-12 p-8 py-12'>
            <h3 className='dark:text-blueish-gray text-primary-blue text-[12px] text-center font-inter font-semibold leading-4 tracking-widest uppercase'>Indique e Ganhe</h3>
            <h2 className='text-2xl text-center'>Como funciona a promoção?</h2>
            <div className='z-10 dark:bg-secondary-dark justify-evenly gap-10 h-full flex flex-col dark:text-vanilla text-dark-blue font-inter'>

              <p className='text-[14px] text-blueish-gray text-justify'>1. Aqui na Ativar Tecnologia, sua indicação vale muito e ficamos gratos quando você nos recomenda para possíveis clientes. Basta nos fornecer os nomes, números de telefone e/ou e-mails de possíveis empresas, e se eles contratarem sistema conosco, você ganha um valor como recompensa por cada empresa indicada que contratar.</p>
              <p className='text-[14px] text-blueish-gray text-justify'>2. Caso a empresa indicada já tenha feito contato comercial prévio com a Ativar Tecnologia, a indicação não será considerada válida e não será oferecida nenhuma bonificação relacionada a essa indicação.</p>
              <p className='text-[14px] text-blueish-gray text-justify'>3. Quem indicou será bonificado após o cliente indicado concluir os processos de contratação junto ao setor comercial. Após finalizar, entraremos em contato com você para enviar a bonificação. </p>
              <p className='text-[14px] text-blueish-gray text-justify'>4. Em caso de várias indicações para a mesma empresa, a primeira pessoa que indicou que receberá a bonificação.</p>
              <p className='text-[14px] text-blueish-gray text-justify'>5. O valor da bonificação, dependerá do módulo contrato pela empresa indicada e pode chegar até em R$ 300,00.</p>
              <div className=' text-center'>
                {/* <h2 className='self-center text-sm rounded-lg'>Indique Agora Mesmo!</h2> */}
                <h2 className='self-center text-sm rounded-lg'>INDICOU E CONTRATOU = <span className='text-primary-blue'>VOCÊ GANHOU!</span></h2></div>
            </div>
          </div>
          <form onSubmit={sendEmail} method='POST' className='dark:bg-tertiary-dark w-full lg:w-1/2 md:w-1/2 bg-gray-300 font-poppins flex-col items-center lg:p-12 p-8  text-dark-blue dark:text-vanilla'>
            <div className='font-poppins dark:text-vanilla z-10 flex flex-col justify-evenly'>
              <div className='flex flex-col gap-10 z-10'>
                <label htmlFor='fullName' className='flex flex-col gap-2 text-md'>Nome Completo
                  <input type='text' name='from_name' required className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu nome completo" />
                </label>
                <label htmlFor='emailFrom' className='flex flex-col gap-2 text-md'>Email (Opcional)
                  <input type='email' name='email_from' id='email_from' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu melhor email" />
                </label>
                <label className='flex flex-col gap-2 text-md'>Número
                  <Input value={number}
                    name='number_from'
                    id='number_from'
                    required={true}
                    onChange={setNumber}
                    country="BR"
                    className='rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm' placeholder="Insira seu número de telefone" />
                </label>
                <label className='flex flex-col gap-2 text-md'>Responsável da Empresa Indicada (Caso Saiba)
                  <input required='true' name='resp_empresa' id='resp_empresa' type='text' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Nome do responsável da empresa " />
                </label>
                <label className='flex flex-col gap-2 text-md'>Nome da Empresa Indicada*
                  <input required='true' name='nome_empresa' id='nome_empresa' type='text' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira o nome da empresa indicada" />
                </label>      
                <label className='flex flex-col gap-2 text-md'>Número da empresa indicada*
                  <Input value={numberOrg}
                    name='numero_empresa'
                    id='numero_empresa'
                    onChange={setNumberOrg}
                    required={true}
                    country="BR"
                    className='rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm' placeholder="Insira o telefone da empresa indicada" />
                </label>
              </div>
              <div className='flex flex-col text-blueish-gray py-8 gap-6'><div className='flex gap-2 text-sm'><input type="checkbox" required={true} /> <p> Li e estou de acordo com o <NavLink to="/politica-de-privacidade" className='text-dark-blue dark:text-primary-blue hover:underline'>Termo de uso e Política de Privacidade</NavLink> </p></div>
              </div>
              <button type='submit' className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[8px]
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