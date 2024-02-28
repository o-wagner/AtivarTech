import React from 'react'
import { NavLink } from 'react-router-dom'
function NotFound() {
  return (
    <div className='h-screen text-dark-blue dark:text-vanilla bg-light-background dark:bg-dark-background flex flex-col items-center justify-center'>
      <div className='animate-fade-left flex flex-col items-center justify-center text-center'>
        <h1 className='dark:text-tertiary-dark text-slate-400/60 text-[80px] font-inter font-semibold'>Error 404 :'(</h1>
        <p className='dark:text-slate-700 text-blueish-gray pb-8'>A página que você esta procurando não foi encontrada.</p>
      </div>
      <NavLink className='px-6 min-w-20 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-semibold font-inter text-[14px] cursor-pointer text-slate-100 flex justify-center items-center text-center' to="/">Ir para Início  </NavLink>
    </div>
  )
}

export default NotFound