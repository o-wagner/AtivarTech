import React from 'react'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../context/theme'

const ToggleButton = (props) => {
    const { themeMode, lightTheme, darkTheme } = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }

    return (
        <div className={`flex flex-row gap-2 ml-6 items-center justify-center ${props.className} `}>
            {props.icon ? <Sun onClick={props.click} className='lg:visible md:visible invisible' size={18} /> : <></>}
            <label className='relative inline-flex items-center  cursor-pointer'>
                <input
                    type='checkbox'
                    value=""
                    checked={themeMode === "dark"}
                    onChange={onChangeBtn}
                className='sr-only peer'
                />
                <div className={`bg-white dark:bg-vanilla absolute w-[14px] h-[14px] rounded-full ${themeMode === "dark" ? 'right-[5px]' :'left-[5px]' }`}/>
                <div className='bg-gray-400/70 dark:bg-secondary-dark peer-focus:outline-none peer-focus:ring-0 w-11 h-6 shadow-inner rounded-full'/>
            </label>

            {/* 
             className={`bg-gray-400/70 h-7 font-semibold transition-all duration-300 flex gap-2 items-center justify-start px-1.5 dark:justify-end shadow-inner
             text-sm dark:text-vanilla text-blueish-gray rounded-full dark:bg-secondary-dark ${props.icon ? 'w-[52px] h-6' : 'w-[60px]'} `}
            <div
                className={`bg-slate-100 dark:bg-vanilla z-10  shadow-3xl absolute rounded-full flex items-center justify-center text-blueish-gray dark:text-terciary-dark ${props.icon ? 'w-4 h-4' : 'w-5 h-5'} `} />
            {!props.icon ?
                <>{themeMode === 'dark' ? <span className='text-[8px] uppercase right-6 relative  z-0'>Dark</span>
                    : <span className='text-[8px] text-white uppercase  left-6 relative z-0'>Light</span>} </> :
                <></>} */}
             {props.icon ? <Moon onClick={props.click} className='lg:visible md:visible invisible' size={18} /> : <></>}

        </div>

    )
}

export default ToggleButton