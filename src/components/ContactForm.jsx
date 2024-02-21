import React, { useState } from 'react'
import Input from 'react-phone-number-input/input'

const sendEmail = (e) => {
    e.preventDefault();
    alert('email enviado');
}
export default function ContactForm() {
    const [value, setValue] = useState('');
    return (
        <form onSubmit={sendEmail} className='dark:bg-tertiary-dark bg-gray-300 lg:rounded-e-xl rounded-b-xl lg:rounded-b-none lg font-poppins flex-col items-center lg:px-16 px-8 w-full py-16 h-1/2 lg:w-1/2 text-dark-blue dark:text-vanilla'>
            <div className='font-poppins dark:text-vanilla flex flex-col justify-evenly gap-10'>
                <label htmlFor='fullName' className='flex flex-col gap-2 text-md'>Nome Completo
                    <input type='text' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu nome completo" />
                </label>
                <label htmlFor='emailFrom' className='flex flex-col gap-2 text-md'>Email
                    <input type='email' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu melhor email" />
                </label>
                <label className='flex flex-col gap-2 text-md'>Número
                    <Input value={value}
                        onChange={setValue}
                        country="BR"
                        className='rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm' placeholder="Insira seu melhor número" />
                </label>
                <label htmlFor='message' className='flex flex-col gap-2 text-md'>Mensagem
                    <textarea maxLength="300" className="rounded-md py-2 h-28 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira sua mensagem" type="text" />
                </label>
                <button type='submit' className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-regular text-[14px] cursor-pointer text-slate-100 flex justify-center items-center text-center'>
                    Enviar Mensagem</button>
            </div>
        </form>
    )
}