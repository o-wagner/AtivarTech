import React from 'react'
import { Sun, Moon } from 'lucide-react'

const ToggleButton = (props) => {
    return (
        <div className='flex flex-row gap-2 ml-6 items-center justify-center'>
            <Sun size={24}/>
            <button onClick={props.click} className='bg-gray-400/50 w-12 h-7 font-semibold
            flex gap-2  items-center justify-start px-1.5 dark:justify-end 
            text-sm text-white rounded-full dark:bg-secondary-dark'>
                <div className='bg-slate-100 w-4 h-4 rounded-full dark:bg-slate-300' />
            </button>
            <Moon size={22}/>
        </div>
    )
}

export default ToggleButton