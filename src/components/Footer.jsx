import React from 'react'
import logo from '../assets/white-logo.svg'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine, RiLinkedinBoxLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import ItemNav from './ItemNav'
import { Link } from 'react-scroll';

function Footer() {
    return (
        <div className='bg-primary-blue dark:bg-dark-footer text-white px-20 py-6 flex flex-col  gap-2 w-full'>
            <div className='flex flex-row py-12 justify-between flex-wrap gap-8'>
                <div className='flex flex-col gap-2 max-w-[180px]'>
                    <img src={logo} className='w-32 -translate-x-5' alt="ativarlogo" />
                    <p className='font-normal mb-2 font-inter text-sm'>Potencialize sua empresa com nossa gestão inteligente</p>
                    <div className='flex gap-1'>
                        <a href="https://instagram.com/ativartecnologia" target='_blank' rel="noreferrer noopener"><FaInstagram size={22} /></a>
                        <a href="https://br.linkedin.com/company/ativartecnologia" target='_blank' rel="noreferrer noopener"><RiLinkedinBoxLine size={22} /></a>
                        <a href="https://www.facebook.com/ativartecnologia/" target='_blank' rel="noreferrer noopener"><RiFacebookCircleLine size={23} /></a>
                        <a href="https://wa.me/5533998315881" target='_blank' rel="noreferrer noopener"><FaWhatsapp size={22} /></a>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <h1 className='font-semibold font-poppins text-lg'>Navegação</h1>
                    <div className='flex flex-col gap-4 mt-5 font-normal font-inter text-sm'>
                        <Link className='cursor-pointer hover:text-vanilla' smooth={true} to='home'>Início</Link>
                        <Link className='cursor-pointer hover:text-vanilla' smooth={true} to='service' offset={-40}>Serviços</Link>
                        <Link className='cursor-pointer hover:text-vanilla' smooth={true} to='feedback' offset={-120}>Depoimentos</Link>
                        <Link className='cursor-pointer hover:text-vanilla' smooth={true} to='about' offset={-80}>Quem Somos</Link>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <h1 className='font-semibold font-poppins text-lg max-w-28'>Horário de Funcionamento</h1>
                    <div>
                        <p className='font-normal font-inter text-sm'>Segunda-Sexta</p>
                        <p className='font-normal font-inter text-sm'>08:00 - 18:00</p>
                    </div>
                    <div>
                        <p className='font-normal font-inter text-sm'>Sábados</p>
                        <p className='font-normal font-inter text-sm'>08:00 - 12:00</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-start text-sm'>
                    <h1 className='font-semibold font-poppins text-lg'>Contato</h1>
                    <a href='mailto:contato@ativartecnologia.com' ><div className='flex flex-row items-center gap-2 justify-center'>
                        <MdOutlineMailOutline className='w-5 text-xl' width={20} />
                        <span className='font-inter'>contato@ativartecnologia.com</span></div></a>

                        <a href="https://wa.me/5533998315881" target='_blank' rel="noreferrer noopener"><div className='flex flex-row items-center gap-2 justify-center'>
                        <FaWhatsapp className='w-5 text-xl' width={20} />
                        <span className='font-inter'>(33) 99831-5881</span></div></a>
                    <a href='https://maps.app.goo.gl/WpKsf5Yymttgiphr9' target='_blank' rel="noreferrer noopener">
                        <div className='flex flex-row items-center gap-2 justify-center'>
                            <IoLocationOutline className='w-5 text-xl' />
                            <span className='font-inter'>Av. Milton Campos, 2852. Centro, Guanhães-MG</span>
                        </div>
                    </a>
                </div>

            </div>
            <div className='border-t pt-2 flex items-center justify-center'>
                <p className='text-white'>© 2024 Ativar Tecnologia LTDA </p>
            </div>
        </div >
    )
}

export default Footer