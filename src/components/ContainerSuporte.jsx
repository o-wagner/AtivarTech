import React from 'react'
import suporte from '../assets/support.svg'
import Button from './Button'

export default function ContainerSuporte() {
    return (
        <div className='w-full lg:px-36 px-10 pt-28 py-20 bg-secondary-light dark:bg-quaternary-dark
        flex lg:gap-10 gap-4 flex-row items-center justify-center flex-wrap lg:flex-nowrap'>
            <div>
                <img className='min-w-[260px] w-[290px]' src={suporte} alt="imagem de uma pessoa da equipe de suporte" />
            </div>
            <div className='flex items-center lg:items-start lg:justify-center flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-primary-blue lg:text-[40px] text-[25px] md:text-[35px] font-poppins font-semibold lg:text-left text-center '>Suporte Técnico Especializado</h1>
                    <p className='text-greish-blue font-inter lg:text-[16px] text-[14px] leading-6  lg:text-justify max-w-[600px] text-center dark:text-lighter-gray'>Chega de esperar nas filas de atendimento. Possuímos uma equipe de suporte altamente capacitada para
                        te atender de forma rápida e eficiente. A qualidade do atendimento oferecido
                        aos nossos clientes é um dos fatores determinantes para o sucesso da nossa  empresa.</p>
                </div>
                <Button path="/contato" title="Entre em Contato"/>
            </div>

        </div>
    )
}
