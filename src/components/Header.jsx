import React from 'react'
import { useState, useEffect } from 'react'
import ativarDark from '../assets/logo-darkm.png'
import ativarLight from '../assets/logo-lightm.png'
import ItemNav from './ItemNav'
import Button from './Button'
import ToggleButton from './ToggleButton'
import { X } from 'lucide-react'
import { BiMenuAltRight } from "react-icons/bi";
import useTheme from '../context/theme'
import { NavLink } from 'react-router-dom'

const headerItem = [
    {
        itemName: 'Início',
        itemPath: '/',
        dropdown: false,
    },
    {
        itemName: 'Soluções',
        itemPath: '/solucoes',
        dropdown: true,

    },

    {
        itemName: 'Conteúdos',
        itemPath: '/conteudos',
        dropdown: false,

    },
    {
        itemName: 'Sobre Nós',
        itemPath: '/sobre',
        dropdown: false,

    },
    {
        itemName: 'Contato',
        itemPath: '/contato',
        dropdown: false,

    },
]

const Header = () => {
    let [open, setOpen] = useState(false);
    const { themeMode } = useTheme()

    return (
        <header className='bg-light-background/95 backdrop-blur-sm fixed
         dark:bg-dark-background/95 h-20 w-full text-slate-600 dark:text-slate-200 
         flex justify-center items-center px-6 z-20 '>
            <div className='w-full lg:px-9 flex items-center lg:justify-between lg:gap-20'>
                <div>
                    <a href="/">
                        {themeMode === 'light' ?

                            <img src={ativarLight} alt="logotipo-ativar" className='min-w-[90px] w-[110px] z-10 -translate-x-5' />
                            :
                            <img src={ativarDark} alt="logotipo-ativar" className='min-w-[90px] w-[110px] z-10 -translate-x-5' />}
                    </a>
                </div>
                <nav className='z-10 mr-8 flex gap-24'>
                    <ul div="menu" className={`lg:gap-8 gap-4 grow absolute lg:static flex-col lg:flex-row lg:flex h-screen lg:h-auto
                     items-center justify-center flex bg-light-background dark:bg-dark-background lg:bg-transparent dark:lg:bg-transparent
                     pb-12 lg:pb-0 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9  ${open ? 'top-0' : 'top-[-10000px]'}`}>
                        <ToggleButton icon={false} className='-translate-x-3 lg:invisible visible' />
                        {headerItem.map((h) => {
                            return (
                                <ItemNav
                                    key={h.itemName}
                                    onClick={() => setOpen(false)}
                                    dropdown={h.dropdown}
                                    name={h.itemName}
                                    path={h.itemPath}
                                />
                            )
                        })}
                        <NavLink className='px-6 min-w-36 py-[4px] bg-button-gradient text-nowrap
                        hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                        font-semibold text-[13px] font-inter cursor-pointer text-slate-100 visited:text-slate-100 flex justify-center items-center text-center' to='/indique-e-ganhe'>Indique e Ganhe!</NavLink>
                    </ul>

                    {open === true ?
                        <div onClick={() => setOpen(false)} className='cursor-pointer animate-fade-down text-2xl flex absolute right-8 top-6' >
                            <X className='lg:invisible' /> </div> : <></>}
                </nav>
                <div className='flex flex-row gap-4 lg:items-center text-blueish-gray lg:justify-center invisible lg:visible dark:text-vanilla'>
                    <ToggleButton icon={true} />

                </div>
                <div onClick={() => setOpen(true)} className='lg:hidden cursor-pointer text-2xl flex justify-end grow '>
                    <BiMenuAltRight size={35} />
                </div>
            </div>
        </header >
    )
}

export default Header