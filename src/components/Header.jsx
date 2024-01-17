import React from 'react'
import { useState, useEffect } from 'react'
import ativar from '../assets/ativar-logo.svg'
import ItemNav from './ItemNav'
import Button from './Button'
import ToggleButton from './ToggleButton'
import { Menu, X } from 'lucide-react'

const headerItem = [
    {
        itemName: 'Início',
        itemPath: 'home',
        itemOffset: -50
    },
    {
        itemName: 'Serviços',
        itemPath: 'service',
        itemOffset: -25
    },
    {
        itemName: 'Blog',
        itemPath: '#',
        itemOffset: 50
    },
    {
        itemName: 'Quem somos',
        itemPath: '#',
        itemOffset: 50
    },
]

const Header = () => {
    let [open, setOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    return (
        <header className=' bg-light-background/85 backdrop-blur-sm transition-colors fixed dark:bg-dark-background/85 h-20 w-full text-slate-600 dark:text-slate-200 flex justify-center items-center z-10'>
            <div className='w-full px-8 flex items-center justify-between'>
                <div>
                    <a href="/">
                        <img src={ativar} alt="logotipo-ativar" className='min-w-[100px] w-[110px] z-10' />
                    </a>
                </div>
                <nav className='z-10 ml-8'>
                    <ul div="menu" className={`lg:gap-7 gap-4 grow absolute lg:static flex-col lg:flex-row lg:flex h-screen lg:h-auto
                     items-center justify-center flex bg-white dark:bg-secondary-dark lg:bg-transparent dark:lg:bg-transparent
                     pb-12 lg:pb-0 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-0' : 'top-[-1000px]'}`}>
                        {headerItem.map((h) => {
                            return (
                                <li>
                                    <ItemNav key={h.itemName} name={h.itemName} path={h.itemPath} offset={h.itemOffset} />
                                </li>
                            )
                        })}
                        <Button name="Entre em Contato" />
                        {open === true ?
                            <div onClick={() => setOpen(false)} className='cursor-pointer text-2xl flex absolute right-8 top-6' >
                                <X /> </div> : <></>}
                    </ul>
                </nav>
                <div className='flex flex-row gap-4 lg:items-center lg:visible invisible lg:justify-center text-sky-600 dark:text-slate-200'>
                    <ToggleButton click={toggleTheme} />
                </div>
                <div onClick={() => setOpen(true)} className='lg:hidden cursor-pointer text-2xl flex justify-end grow absolute right-8 top-6'>
                    <Menu size={28} />
                </div>
            </div>
        </header>
    )
}

export default Header