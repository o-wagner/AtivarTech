import React from 'react'
import logo from '../assets/white-logo.png'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine, RiLinkedinBoxLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { Copy, ChevronUp } from 'lucide-react';

function Footer() {

    const goTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div className='bg-primary-blue bottom-0 dark:bg-dark-footer text-white lg:px-32 px-10 py-6 flex flex-col gap-2 w-full'>
            <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid py-24 gap-10 lg:justify-between text-left'>
                <div className=' flex flex-col gap-5 lg:items-start justify-start'>
                    <img src={logo} className='w-[100px]' alt="ativarlogo" />
                    <p className='font-normal text-left lg:max-w-[80%] max-w-[50%] text-white font-inter text-sm'>Potencialize sua empresa com nossa gestão inteligente</p>
                    <div className='flex self-start gap-1'>
                        <a className='hover:text-vanilla' href="https://instagram.com/ativartecnologia" target='_blank' rel="noreferrer noopener"><FaInstagram size={22} /></a>
                        <a className='hover:text-vanilla' href="https://br.linkedin.com/company/ativartecnologia" target='_blank' rel="noreferrer noopener"><RiLinkedinBoxLine size={22} /></a>
                        <a className='hover:text-vanilla' href="https://www.facebook.com/ativartecnologia/" target='_blank' rel="noreferrer noopener"><RiFacebookCircleLine size={23} /></a>
                        <a className='hover:text-vanilla' href="https://wa.me/553321010601" target='_blank' rel="noreferrer noopener"><FaWhatsapp size={22} /></a>
                    </div>
                    <button  onClick={goTop}>
                        <span className='flex flex-row group lg:justify-center items-center gap-[5px] lg:max-w-[inherit] max-w-[50%]'> Ir para o topo <ChevronUp className='group-hover:-translate-y-[1px] translate-y-[3px] transition-transform ease-in-out duration-200' size={16}/></span>
                    </button>
                </div>
                <div className='flex flex-col justify-between '>
                    <h1 className='font-semibold font-poppins text-lg'>Navegação</h1>
                    <div className='flex flex-col gap-4 mt-5 font-normal font-inter text-sm'>
                        <NavLink className='cursor-pointer hover:text-vanilla' to='/'>Início</NavLink>
                        <NavLink className='cursor-pointer hover:text-vanilla' to='/solucoes/food'>Soluções</NavLink>
                        <NavLink className='cursor-pointer hover:text-vanilla' to='/sobre' >Sobre</NavLink>
                        <NavLink className='cursor-pointer hover:text-vanilla' to='/contato'>Contato</NavLink>
                        <NavLink className='cursor-pointer hover:text-vanilla' to='/conteudos'>Conteúdos</NavLink>
                        <NavLink className='cursor-pointer hover:text-vanilla' to='/indique-e-ganhe'>Indique e Ganhe</NavLink>
                    </div>
                </div>
                <div className='flex flex-col gap-6 '>
                    <h1 className='font-semibold font-poppins text-lg max-w-28'>Horário de Funcionamento</h1>
                    <div>
                        <p className='font-normal font-inter text-sm'>Segunda - Sexta</p>
                        <p className='font-normal font-inter text-sm'>08:00 - 18:00</p>
                    </div>
                    <div>
                        <p className='font-normal font-inter text-sm'>Sábados</p>
                        <p className='font-normal font-inter text-sm'>08:00 - 12:00</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-6 w-72 text-sm '>
                    <h1 className='font-semibold font-poppins text-lg'>Contato</h1>
                    <a href='mailto:contato@ativartecnologia.com' ><div className='flex hover:text-vanilla flex-row items-center gap-2 justify-center'>
                        <MdOutlineMailOutline className='w-5 text-xl' width={20} />
                        <span className='font-inter flex gap-2'>contato@ativartecnologia.com 
                        </span></div></a>
                    <a href="https://wa.me/553321010601" target='_blank' rel="noreferrer noopener"><div className='flex hover:text-vanilla flex-row items-center gap-2 justify-center'>
                        <FaWhatsapp className='text-xl' width={20} />
                        <span className='font-inter'>(33) 2101-0601</span></div></a>
                    <a href='https://maps.app.goo.gl/WpKsf5Yymttgiphr9' target='_blank' rel="noreferrer noopener">
                        <div className='flex flex-row items-center gap-2 justify-center hover:text-vanilla'>
                            <IoLocationOutline className='text-3xl' />
                            <span className='font-inter'>Av. Milton Campos, 2852. Centro, Guanhães-MG</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className='flex border-t flex-row justify-center items-center'>
                <div className='pt-2 flex items-center justify-center text-center'>
                    <p className='text-white font-poppins text-sm font-normal'>© 2024 Ativar Tecnologia LTDA | <NavLink to='/politica-de-privacidade' className='hover:underline text-white/70 dark:text-primary-blue'>Política de Privacidade</NavLink></p>
                </div>
            </div>
        </div >
    )
}

export default Footer