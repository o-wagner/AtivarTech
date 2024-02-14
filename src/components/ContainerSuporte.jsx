import React from 'react'
import suporte from '../assets/support.svg'
import Button from './Button'

export default function ContainerSuporte() {
    return (
        <div className='w-full lg:px-36 pt-28 py-16 bg-light-background dark:bg-dark-background 
        flex gap-10 flex-row items-center justify-center flex-wrap lg:flex-nowrap'>
            <div>
                <img className='min-w-[270px] w-[340px]' src={suporte} alt="imagem de uma pessoa da equipe de suporte" />
            </div>
            <div className='flex items-center lg:items-start lg:justify-center flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-primary-blue lg:text-[42px] text-3xl md:text-4xl font-poppins font-bold lg:text-left text-center '>Suporte Técnico Especializado</h1>
                    <p className='text-primary-gray font-inter px-5 lg:px-0 lg:text-justify max-w-[640px] text-center dark:text-lighter-gray'>Chega de esperar nas filas de atendimento. Possuímos uma equipe de suporte altamente capacitada para
                        te atender de forma rápida e eficiente. A qualidade do atendimento oferecido
                        aos nossos clientes é um dos fatores determinantes para o sucesso da nossa  empresa.</p>
                </div>
                <Button name="Entrar em contato" />
            </div>

        </div>
    )
}
