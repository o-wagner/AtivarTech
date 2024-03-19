import React from 'react'
import lock from '../assets/lock.svg'
import Button from './Button'

export default function ContainerBackup() {
    return (
        <div className='w-full px-10 lg:px-36 md:px-20 py-16 bg-secondary-light dark:bg-quaternary-dark
        flex lg:gap-20 md:gap-10 flex-row items-center justify-center flex-wrap-reverse lg:flex-nowrap md:flex-nowrap '>
            <div className='flex items-center lg:items-end md:items-end lg:justify-center md:justify-center flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-primary-blue lg:text-[40px] md:text-[35px] text-[25px] lg:leading-[50px] leading-[35px] md:text-4xl font-poppins font-semibold lg:text-end md:text-end text-center'>Segurança e Backup em Nuvem</h1>
                    <p className='text-greish-blue lg:text-[16px] text-[14px] font-inter leading-6 lg:text-end md:text-end max-w-[700px] text-center dark:text-lighter-gray'>
                    Controle os acessos dos usuários ao sistema de acordo com sua função, restringindo ou permitindo acesso aos módulos. 
                    Evite imprevistos e perdas, tenha maior segurança dos seus dados com nossa moderna ferramenta de backups em nuvem.</p>
                </div>
                {/* <Button path="/solucoes/food" title="Conheça nossas soluções" /> */}
            </div>
            <div>
                <img className='min-w-[120px] lg:w-[190px] md:w-[180px] w-[180px]' src={lock} alt="imagem de uma pessoa da equipe de suporte" />
            </div>

        </div>
    )
}
