import React from 'react'
import resultados from '../assets/resultados.png'
import Button from './Button'

export default function ContainerBackup() {
    return (
        <div className='w-full px-10 lg:px-36 md:px-20 pt-10 pb-24 bg-secondary-light dark:bg-quaternary-dark
        flex lg:gap-10 md:gap-10 gap-3 flex-row items-center justify-center flex-wrap-reverse lg:flex-nowrap md:flex-nowrap '>
            <div className='flex items-center lg:items-end md:items-end lg:justify-center md:justify-center flex-col gap-6'>
                <div className='flex flex-col gap-4 '>
                    <h1 className='text-primary-blue lg:text-[40px] md:text-[35px] text-[25px] lg:leading-[45px] leading-[35px] md:text-4xl font-poppins font-semibold lg:text-end md:text-end text-center'>Atendimentos Personalizados</h1>
                    <p className='text-greish-blue lg:text-[16px] text-[14px] font-inter leading-6 lg:text-end md:text-end max-w-[700px] text-center dark:text-lighter-gray'>
                    Queremos ver o crescimento da sua empresa, por isso oferecemos muito mais que um sistema de gestão, entregamos resultados!
                    Nós te ajudamos a ter total controle da sua empresa, acompanhar seus resultados financeiros, manter uma boa gestão de estoque e faturar mais!</p>
                </div>
                {/* <Button path="/solucoes/food" title="Conheça nossas soluções" /> */}
            </div>
            <div>
                <img className='min-w-[240px] drop-shadow-lg lg:w-[240px] md:w-[220px] w-[220px]' src={resultados} alt="imagem de uma pessoa da equipe de suporte" />
            </div>

        </div>
    )
}
