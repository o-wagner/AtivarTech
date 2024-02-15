import React from 'react'
import cbum from '../assets/equipe/cbum.png'
import thais from '../assets/equipe/thais.png'
import larissa from '../assets/equipe/larissa.png'
import gabriel from '../assets/equipe/gabriel.png'
import jeferson from '../assets/equipe/jeferson.png'


const equipe = [
    {
        Img: cbum,
        name: 'Luan',
        cargo: 'Suporte',
    },
    {
        Img: thais,
        name: 'Thaís',
        cargo: 'Suporte',
    },
    {
        Img: gabriel,
        name: 'Gabriel',
        cargo: 'Suporte',
    },
    {
        Img: jeferson,
        name: 'Jeferson',
        cargo: 'Suporte',
    },
    {
        Img: larissa,
        name: 'Larissa',
        cargo: 'Suporte',
    },
]

function ContainerAbout() {
    return (
        <section id='about' className='w-full h-full flex flex-col py-10 gap-12 justify-center bg-light-gradient dark:bg-dark-gradient'>
            <div className='flex items-center justify-center flex-col mb-5 gap-2 px-16'>
                <h3 className='text-blueish-gray font-semibold text-[12px] uppercase tracking-widest dark:text-primary-blue font-inter'>Conheça</h3>
                <h1 className='lg:text-[35px] text-3xl font-poppins font-semibold text-dark-blue text-center dark:text-vanilla'>Nossa Equipe</h1>
                <p className='font-inter text-dark-blue dark:text-blueish-gray lg:max-w-[700px] min-w-[300px] lg:min-w-[380px] px-2 text-center'>
                    Conheça a equipe dedicada que impulsiona nossas soluções. Juntos, estamos comprometidos em elevar seu sucesso empresarial.</p>
            </div>
            <div className='flex flex-row gap-12 flex-wrap pb-20 px-16 items-center justify-center'>
                {equipe.map((e) => {
                    return (
                        <div key={e.name} className='flex flex-col items-center gap-4'>
                            <div>
                                <img src={e.Img} className='w-32' />
                            </div>
                            <div className='flex flex-col items-center justify-center' >
                                <h3 className='font-bold font-poppins text-xl text-primary-blue'>{e.name}</h3>
                                <span className='font-medium text-sm font-poppins text-black dark:text-vanilla'>{e.cargo}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default ContainerAbout