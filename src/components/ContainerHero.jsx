import HeroShot from '../assets/hero-shot.svg'
import HeroText from './HeroText'
import React from 'react'


const ContainerHero = () => {
    return (
        <section id="home" name="home" className='transition-colors w-full h-[100dvh] py-8 pt-20 lg:h-screen bg-light-background dark:bg-dark-background justify-center
        items-center flex lg:block'>
            <div className='w-full animate-fade-in px-4 gap-3 flex flex-wrap-reverse lg:flex-nowrap items-center justify-center'>
                <HeroText/>
                <div className=' lg:w-1/2 w-[70%] z-0 flex lg:h-[90vh] h-auto'>
                    <img className='self-end' src={HeroShot} alt="heroshot" />
                </div>
            </div>  
        </section>
    )
}

export default ContainerHero