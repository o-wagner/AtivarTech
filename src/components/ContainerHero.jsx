import HeroShot from '../assets/hero-shot.svg'
import HeroText from './HeroText'
import React from 'react'


const ContainerHero = () => {
    return (
        <section id="home" name="home" className='transition-colors w-full py-8 pt-20 lg:h-screen bg-light-background dark:bg-dark-background justify-center 
        items-center'>
            <div className='w-full px-4 gap-3 flex flex-wrap-reverse lg:flex-nowrap items-center justify-center'>
                <HeroText/>
                <div className=' w-1/2 flex overflow-hidden lg:h-[90vh] h-auto'>
                    <img className='self-end' src={HeroShot} alt="heroshot" />
                </div>
            </div>  
        </section>
    )
}

export default ContainerHero