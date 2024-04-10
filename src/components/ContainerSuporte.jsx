import React from 'react'
import suporte from '../assets/suporte.png'
import Button from './Button'

export default function ContainerSuporte() {
    return (
        <div className=' w-full lg:px-36 md:px-20 px-12 pt-24 pb-10 bg-secondary-light dark:bg-quaternary-dark
        flex lg:gap-10 md:gap-10 gap-3 flex-row items-center justify-center flex-wrap lg:flex-nowrap md:flex-nowrap'>
            <div>
                <img className='min-w-[240px] drop-shadow-lg lg:w-[240px] md:w-[220px] w-[220px]' src={suporte} alt="imagem de uma pessoa da equipe de suporte" />
            </div>
            <div className='flex items-center lg:items-start md:items-start lg:justify-center md:justify-center flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-primary-blue lg:text-[40px] text-[25px] md:text-[35px] lg:leading-[50px] leading-[35px] font-poppins font-semibold lg:text-left md:text-left text-center '>Suporte Técnico Especializado</h1>
                    <p className='text-greish-blue font-inter lg:text-[16px] text-[14px] leading-6 lg:text-left md:text-left max-w-[600px] text-center dark:text-lighter-gray'>Chega de esperar nas filas de atendimento. Possuímos uma equipe de suporte altamente capacitada para
                        te atender de forma rápida e eficiente. A qualidade do atendimento oferecido
                        aos nossos clientes é um dos fatores determinantes para o sucesso da nossa  empresa.</p>
                </div>
                <Button path="/contato" title="Entre em Contato"/>
            </div>

        </div>
    )
}
