import React from 'react'
import indique from '../assets/Indique.png'
import Button from './Button'

function ContainerIndique() {
    return (
        <div className='w-full px-10 lg:px-36 md:px-20 py-28 bg-slate-300 dark:bg-dark-background
        flex lg:gap-16 md:gap-8 flex-row items-center justify-center flex-wrap lg:flex-nowrap md:flex-nowrap '>
            <div>
                <img className='min-w-[400px] drop-shadow-lg lg:w-[800px] md:w-[600px] w-[400px] pb-10' src={indique} alt="imagem de uma pessoa da equipe de suporte" />
            </div>
            <div className='flex items-center lg:items-start md:items-start lg:justify-center md:justify-center flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2 max-w-[300px] lg:max-w-[600px]'>
                        <h3 className='text-primary-blue text-center lg:text-start hidden lg:block md:text-start uppercase font-inter text-[12px] font-semibold tracking-widest'>Coisas boas devem ser compartilhadas</h3>
                        <h1 className='text-primary-blue dark:text-vanilla lg:text-[70px] md:text-[35px] text-[25px] lg:leading-[70px] uppercase leading-[35px] font-poppins font-semibold lg:text-start md:text-start text-center z-10'>Indique 
                        <span className=' lg:text-[60px] text-slate-400 dark:text-greish-blue z-[-2] '> &</span> <span className='lg:text-[100px] text-[50px]'>Ganhe!</span></h1>
                    </div>
                    {/* <p className='text-greish-blue lg:text-[16px] text-[14px] font-inter leading-6 lg:text-start max-w-[700px] md:text-start  text-center dark:text-lighter-gray'>
                        Conheça nosso sistema de recompensas por indicação. Indique empresas para os sistemas da Ativar Tecnologia e receba uma recompensa para você ou para sua empresa.</p> */}
                </div>
                <Button path="/indique-e-ganhe" title="Indicar Agora" />
            </div>


        </div>
    )
}

export default ContainerIndique