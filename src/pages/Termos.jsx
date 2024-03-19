import React, { useState } from 'react'
import TermosCondicoes from '../components/TermosCondicoes'
import Politica from '../components/Politica'

function Termos() {
    const [politica, setPolitica] = useState(true)

    return (
        <div className='bg-light-background dark:bg-dark-background'>
            <section className='py-12 flex flex-col lg:pt-36 pt-[100px] w-full lg:px-16 px-10'>
                <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Legal</h3>
                {politica ? <h1 className='text-dark-blue dark:text-vanilla lg:text-3xl text-2xl md:text-[28px] font-poppins font-semibold'>Política de Privacidade</h1> : <h1 className='text-dark-blue dark:text-vanilla lg:text-3xl text-2xl md:text-[28px] font-poppins font-semibold'>Termos e Condições</h1>}

                <div className=' lg:pt-0 pt-4 flex flex-row lg:justify-end md:justify-end justify-center'>
                    <button onClick={() => setPolitica(true)}>
                        <div className={`${politica ? 'dark:bg-secondary-dark bg-slate-300' : 'dark:bg-quaternary-dark bg-slate-200'} dark:text-vanilla text-dark-blue text-[14px] text-center border border-slate-300 dark:border-slate-800 border-b-0 rounded-t-lg px-4 lg:px-6 py-2`}>
                            Política de Privacidade
                        </div>
                    </button>
                    <button onClick={() => setPolitica(false)}>
                        <div className={`${politica ? 'dark:bg-quaternary-dark bg-slate-200 ' : 'dark:bg-secondary-dark bg-slate-300'} text-dark-blue dark:text-vanilla text-center text-[14px] border border-slate-300 dark:border-slate-800 border-b-0 rounded-t-lg px-4 lg:px-6 py-2`}>
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