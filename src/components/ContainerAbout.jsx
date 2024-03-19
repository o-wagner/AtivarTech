import React from 'react'
import cbum from '../assets/equipe/cbum.png'
import thais from '../assets/equipe/thais.png'
import larissa from '../assets/equipe/larissa.png'
import gabriel from '../assets/equipe/gabriel.png'
import jeferson from '../assets/equipe/jeferson.png'


const equipe = [
    {
        Img: cbum,
        name: 'Luan Marinho',
        cargo: 'Sócio Proprietário',
    },
    {
        Img: jeferson,
        name: 'Jeferson Álefe',
        cargo: 'Sócio Proprietário',
    },
    {
        Img: thais,
        name: 'Thaís Pascoal',
        cargo: 'Suporte',
    },
    {
        Img: thais,
        name: 'Wagner Oliveira',
        cargo: 'Analista de Suporte',
    },
    {
        Img: gabriel,
        name: 'Gabriel Lucas',
        cargo: 'Analista de Suporte',
    },
    {
        Img: gabriel,
        name: 'Gabriel Marques',
        cargo: 'Analista de Suporte',
    },
    {
        Img: larissa,
        name: 'Larissa Gonzaga',
        cargo: 'Analista de Suporte',
    },
    {
        Img: larissa,
        name: 'Alessandra Diamantino',
        cargo: 'Analista de Suporte',
    },
    {
        Img: larissa,
        name: 'Géssica Araújo',
        cargo: 'Setor Comercial',
    },
]

function ContainerAbout() {
    return (
        <section id='about' className='w-full h-full flex flex-col py-12 gap-12 justify-center bg-darker-light-bg dark:bg-dark-gradient'>
            <div className='flex items-center justify-center flex-col mb-5 mt-8 gap-2 px-10'>
                <h3 className='text-primary-blue uppercase text-[12px] font-inter font-semibold tracking-widest'>Conheça</h3>
                <h1 className='lg:text-[40px] text-[25px] font-poppins font-semibold text-dark-blue text-center tracking-tight dark:text-vanilla'>Nossa Equipe</h1>
                <p className='font-inter lg:text-[16px] text-[14px] text-greish-blue dark:text-blueish-gray max-w-[600px] min-w-[300px] lg:min-w-[380px] md:min-w-[380px] px-2 text-center'>
                    Conheça a equipe dedicada que impulsiona nossas soluções. Juntos, estamos comprometidos em elevar seu sucesso empresarial.</p>
            </div>
            <div className='flex flex-row gap-4 flex-wrap pb-20 lg:px-[5%] md:px-[5%] px-10 items-center justify-center'>
                {equipe.map((e) => {
                    return (
                        <div key={e.name} className='flex flex-col justify-center items-center gap-4 ease-in-out bg-white dark:bg-quaternary-dark w-[240px] h-[260px] drop-shadow-lg hover:drop-shadow-xl text-center rounded-lg p-4 transition-transform hover:-translate-y-1 border border-slate-300 dark:border-slate-900'>
                            <div>
                                <img src={e.Img} className='w-28 lg:w-[115px] drop-shadow-md' />
                            </div>
                            <div className='flex flex-col gap-1 items-center justify-center' >
                                <h3 className='font-bold leading-tight font-poppins text-lg dark:text-primary-blue text-dark-blue'>{e.name}</h3>
                                <span className='font-regular text-[14px] font-poppins text-greish-blue dark:text-blueish-gray'>{e.cargo}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default ContainerAbout