import React from 'react'
import { Sun, Moon } from 'lucide-react'

const ToggleButton = (props) => {
    return (
        <div className={`flex flex-row gap-2 ml-6 items-center justify-center  ${props.className} `}>
            {props.icon ? <Sun onClick={props.click} className='cursor-pointer lg:visible invisible' size={20} /> : <></>}
            <button
                onClick={props.click}
                className={`bg-gray-400/70 h-7 font-semibold transition-all duration-300 flex gap-2 items-center justify-start px-1.5 dark:justify-end shadow-inner
            text-sm dark:text-vanilla text-blueish-gray rounded-full dark:bg-secondary-dark ${props.icon ? 'w-[52px] h-6' : 'w-[60px]'} `}>
                <div
                    className={`bg-slate-100 dark:bg-vanilla z-10  shadow-3xl absolute rounded-full flex items-center justify-center text-blueish-gray dark:text-terciary-dark ${props.icon ? 'w-4 h-4' : 'w-5 h-5'} `} />
                {!props.icon ?
                    <>{props.theme === 'dark' ? <span className='text-[8px] uppercase right-6 relative  z-0'>Dark</span>
                        : <span className='text-[8px] text-white uppercase  left-6 relative z-0'>Light</span>} </> :
                    <></>}
            </button>
            {props.icon ? <Moon onClick={props.click} className='cursor-pointer lg:visible invisible' size={18} /> : <></>}

        </div>

    )
}

export default ToggleButton