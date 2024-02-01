import React from 'react'
import cbum from '../assets/cbum.png'
import thais from '../assets/thais.png'
import larissa from '../assets/larissa.png'
import gabriel from '../assets/gabriel.png'
import jeferson from '../assets/jeferson.png'


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
        <div id='about' className='w-full h-full pt-20 flex flex-col py-16 gap-12 justify-center bg-light-gradient dark:bg-dark-gradient'>
            <div className='flex items-center justify-center flex-col mb-5 gap-2 px-16'>
                <h1 className='text-4xl font-poppins font-bold text-dark-blue text-center dark:text-vanilla'>Nossa Equipe</h1>
                <span className='font-inter text-dark-blue dark:text-blueish-gray lg:w-[700px] min-w-[260px] px-12 text-center'>
                    Conheça a equipe dedicada que impulsiona nossas soluções. Juntos, estamos comprometidos em elevar seu sucesso empresarial.</span>
            </div>
            <div className='flex flex-row gap-12 flex-wrap pb-20 px-16 items-center justify-center'>
                {equipe.map((e) => {
                    return (
                        <div key={e.name} className='flex flex-col items-center gap-4'>
                            <div>
                                <img src={e.Img} className='w-32'/>  
                            </div>
                            <div className='flex flex-col items-center justify-center' >
                                <h3 className='font-bold font-poppins text-xl text-primary-blue'>{e.name}</h3>
                                <span className='font-medium font-poppins text-black dark:text-vanilla'>{e.cargo}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ContainerAbout