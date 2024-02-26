import React, { useState } from 'react'
import TermosCondicoes from '../components/TermosCondicoes'
import Politica from '../components/Politica'

function Termos() {
    const [politica, setPolitica] = useState(true)

    return (
        <div className='bg-light-background dark:bg-dark-background'>
            <section className='py-10 flex flex-col lg:pt-36 pt-20 w-full px-16'>
                <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Legal</h3>
                {politica ? <h1 className='text-dark-blue dark:text-vanilla lg:text-5xl text-3xl md:text-4xl font-poppins font-semibold'>Política de Privacidade</h1> : <h1 className='text-dark-blue dark:text-vanilla lg:text-5xl text-3xl md:text-4xl font-poppins font-semibold'>Termos e Condições</h1>}

                <div className='flex flex-row justify-end'>
                    <button onClick={() => setPolitica(true)}>
                        <div className={`${politica ? 'dark:bg-secondary-dark  bg-white' : 'dark:bg-quaternary-dark bg-neutral-300'} dark:text-vanilla text-dark-blue text-center lg:px-6 lg:py-2`}>
                            Política de Privacidade
                        </div>
                    </button>
                    <button onClick={() => setPolitica(false)}>
                        <div className={`${politica ? 'dark:bg-quaternary-dark bg-neutral-300' : 'dark:bg-secondary-dark bg-white'} text-dark-blue dark:text-vanilla text-center lg:px-6 lg:py-2 `}>
                            Termos e condições
                        </div>
                    </button>
                </div>
                {politica ? <Politica /> : <TermosCondicoes />}

            </section>
        </div>
    )
}

export default Termos