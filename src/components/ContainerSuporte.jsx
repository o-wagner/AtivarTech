import React from 'react'
import suporte from '../assets/support.svg'
import Button from './Button'
import { NavLink } from 'react-router-dom'

export default function ContainerSuporte() {
    return (
        <div className='w-full lg:px-36 pt-28 py-16 bg-secondary-light dark:bg-quaternary-dark
        flex lg:gap-10 flex-row items-center justify-center flex-wrap lg:flex-nowrap'>
            <div>
                <img className='min-w-[260px] w-[290px]' src={suporte} alt="imagem de uma pessoa da equipe de suporte" />
            </div>
            <div className='flex items-center lg:items-start lg:justify-center flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-primary-blue lg:text-[40px] text-3xl md:text-4xl font-poppins font-semibold lg:text-left text-center '>Suporte Técnico Especializado</h1>
                    <p className='text-primary-gray font-inter px-10 lg:px-0 lg:text-justify max-w-[640px] text-center dark:text-lighter-gray'>Chega de esperar nas filas de atendimento. Possuímos uma equipe de suporte altamente capacitada para
                        te atender de forma rápida e eficiente. A qualidade do atendimento oferecido
                        aos nossos clientes é um dos fatores determinantes para o sucesso da nossa  empresa.</p>
                </div>
                <NavLink className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-semibold text-[14px] cursor-pointer text-slate-100 flex justify-center items-center text-center' to="/contato">Entrar em Contato</NavLink>
            </div>

        </div>
    )
}
