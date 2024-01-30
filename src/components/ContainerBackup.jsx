import React from 'react'
import lock from '../assets/lock.svg'
import Button from './Button'

export default function ContainerBackup() {
    return (
        <div className='w-full lg:px-36 py-16 bg-light-background dark:bg-dark-background 
        flex gap-10 flex-row items-center justify-center flex-wrap-reverse lg:flex-nowrap px-20'>

            <div className='flex items-center lg:items-end lg:justify-center flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-primary-blue text-[39px] font-poppins font-bold lg:text-end text-center'>Segurança e Backup em Nuvem</h1>
                    <p className='text-primary-gray font-inter lg:text-right max-w-[670px] text-center dark:text-lighter-gray'>
                    Controle os acessos dos usuários ao sistema de acordo com sua função, restringindo ou permitindo acesso aos módulos. 
                    Evite imprevistos e perdas, tenha maior segurança dos seus dados com nossa moderna ferramenta de backups em nuvem.</p>
                </div>
                <Button name="Saiba Mais" />
            </div>
            <div>
                <img className='min-w-[220px] w-[250px]' src={lock} alt="imagem de uma pessoa da equipe de suporte" />
            </div>

        </div>
    )
}
