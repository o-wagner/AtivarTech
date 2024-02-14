import React from 'react'
import HeroText from '../components/HeroText'
import HeroContact from '../assets/HeroContact.png'

function Contato() {
  return (
    <section className='w-full h-[100dvh] lg:py-8 lg:pt-20 py-0 pt-[10%] lg:h-screen bg-light-background dark:bg-dark-background justify-center
    items-center flex lg:block'>
      <div className='w-full px-8 gap-3 flex flex-wrap-reverse lg:flex-nowrap items-center justify-center'>
        <HeroText />
        <div className=' lg:w-1/2 w-[60%] animate-fade-left duration-300 flex lg:h-[85vh] justify-center h-auto'>
          <img className='self-center drop-shadow-2xl' src={HeroContact} alt="heroshot" />
        </div>
      </div>
    </section>
  )
}

export default Contato