import React, { useState } from 'react'
import Input from 'react-phone-number-input/input'
import emailjs from '@emailjs/browser'
import { NavLink } from 'react-router-dom';

export default function ContactForm() {
    const [value, setValue] = useState()
    const [status, setStatus] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        setStatus(true)
    }

    return (
        <form onSubmit={sendEmail} method='POST' className='dark:bg-tertiary-dark bg-gray-300 lg:rounded-e-xl md:rounded-e-xl rounded-b-xl lg:rounded-b-none md:rounded-b-none lg font-poppins flex-col items-center lg:px-16 px-8 w-full py-16 h-1/2 lg:w-1/2 text-dark-blue dark:text-vanilla'>
            <div className='font-poppins dark:text-vanilla flex flex-col justify-evenly gap-8'>
                <label htmlFor='fromName' className='flex flex-col gap-2 text-md'>Nome Completo
                    <input type='text' id="from_name" name='from_name' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu nome completo" />
                </label>
                <label htmlFor='emailFrom' className='flex flex-col gap-2 text-md'>Email
                    <input type='email' id='email_from' name='email_from' className="rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira seu melhor email" />
                </label>
                <label htmlFor='numberFrom' className='flex flex-col gap-2 text-md'>Número
                    <Input value={value}
                        name='number_from'
                        id='number_from'
                        onChange={setValue}
                        country="BR"
                        className='rounded-md py-2 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm' placeholder="Insira seu número de telefone" />
                </label>
                <label htmlFor='message' className='flex flex-col gap-2 text-md'>Mensagem
                    <textarea maxLength="300" id='message' name='message' className="rounded-md py-2 h-28 px-2 dark:bg-dark-input placeholder:text-blueish-gray outline-none text-sm focus:placeholder-transparent placeholder:text-sm" placeholder="Insira sua mensagem" type="text" />
                </label>
                <div className='flex flex-col text-blueish-gray'>
                    <div className='flex gap-2 text-sm'>
                        <input type="checkbox" required={true} />
                        <p> Li e estou de acordo com o <NavLink to="/politica-de-privacidade" className='text-dark-blue dark:text-primary-blue hover:underline'>Termo de uso e Política de Privacidade</NavLink> </p>
                    </div>
                </div>
                <button type='submit' className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-regular text-[14px] cursor-pointer text-slate-100 flex justify-center items-center text-center'>
                    Enviar Mensagem</button>
            </div>
        </form>
    )
}