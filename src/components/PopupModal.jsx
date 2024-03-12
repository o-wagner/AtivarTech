import { X } from 'lucide-react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function PopupModal(props) {

    return (
        <div className={`${props.support ? 'visible animate-fade-left duration-200 ' : 'invisible'} ${props.showModal ? 'visible animate-fade-left' : 'invisible'} bg-white bottom-6 right-[100px] rounded-lg h-64 w-64 z-30 fixed drop-shadow-2xl dark:bg-secondary-dark`}>
            <div className='py-[14px] dark:text-vanilla font-poppins font-semibold text-sm bg-dark-blue rounded-t-lg flex flex-row items-center justify-between text-white px-4'>Olá, seja bem vindo!
                <button onClick={props.handleClick}><X size={18} /></button></div>
            <div className='items-center flex flex-col'>
                <div className='text-dark-blue dark:text-vanilla px-4 flex justify-center text-center py-4'><p>Precisa de atendimento? Converse com um de nossos colaboladores pelo Whatsapp </p></div>
                <div className=' lg:px-3 flex items-center justify-center gap-10 py-5 text-dark-blue dark:text-vanilla text-2xl'>
                    <a href="https://wa.me/553321010601" target='_blank' rel="noreferrer noopener" className='flex flex-col items-center justify-center animate-fade-left dark:hover:text-white '>
                        <FaWhatsapp />
                        <p className='text-sm'>Entre em contato</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PopupModal