import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className='h-screen text-dark-blue dark:text-vanilla bg-light-background dark:bg-dark-background flex flex-col items-center justify-center'>
      <div className='animate-pulse flex flex-col gap-2 text-center'><h1>404 - Página não encontrada :'(</h1>
        <p>Desculpe, a página que você está procurando não foi encontrada.</p>
        <NavLink className='underline' to="/">Voltar para a página inicial</NavLink>
      </div>
    </div>
  )
}

export default NotFound