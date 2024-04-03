import React from 'react'
import { ChevronDown, ChevronDownCircleIcon } from 'lucide-react'
import Button from './Button'
import { Link } from 'react-scroll'

export default function HeroText() {
    return (
        <div className='flex flex-col w-1/2 items-center justify-center lg:pl-32 lg:items-start gap-4'>
            <h1 className='text-blue-950 font-semibold lg:max-w-[700px] z-10 pt-4 lg:pt-0 w-[400px] max-w-[250px]
            lg:leading-[62px] leading-[40px] text-[35px] lg:px-0 lg:text-[62px] font-poppins
                 dark:text-slate-300 tracking-tight text-center lg:text-start'>
                Soluções em Sistemas de
                <span className='text-sky-600'> Gestão.</span>
            </h1>
            <p className='text-blueish-gray lg:text-[22px] text-[18px] font-medium min-w-[400px] lg:max-w-[340px]
                    text-center leading-[1.2] lg:text-left mb-6 lg:px-0 px-16'>
                Conheça todo o potencial do seu negócio com nossas soluções inovadoras de gestão.</p>
            <Link
                to="service"
                smooth={true}
                offset={40}
                className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
            hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
            font-semibold font-inter text-[14px] gap-2 cursor-pointer text-slate-100 flex justify-center items-center text-center'>Saber mais<ChevronDownCircleIcon size={16} /> </Link>
        </div>
    )
}
