import React from 'react'
import lock from '../assets/lock.svg'
import Button from './Button'

export default function ContainerBackup() {
    return (
        <div className='w-full lg:px-36 py-20 bg-secondary-light dark:bg-quaternary-dark
        flex lg:gap-20 flex-row items-center justify-center flex-wrap-reverse lg:flex-nowrap px-20'>

            <div className='flex items-center lg:items-end lg:justify-center flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-primary-blue lg:text-[40px] text-3xl md:text-4xl font-poppins font-semibold lg:text-end text-center'>Segurança e Backup em Nuvem</h1>
                    <p className='text-greish-blue text-md font-inter lg:text-end max-w-[700px] text-center dark:text-lighter-gray'>
                    Controle os acessos dos usuários ao sistema de acordo com sua função, restringindo ou permitindo acesso aos módulos. 
                    Evite imprevistos e perdas, tenha maior segurança dos seus dados com nossa moderna ferramenta de backups em nuvem.</p>
                </div>
                {/* <Button path="/solucoes/food" title="Conheça nossas soluções" /> */}
            </div>
            <div>
                <img className='min-w-[170px] w-[190px]' src={lock} alt="imagem de uma pessoa da equipe de suporte" />
            </div>

        </div>
    )
}
