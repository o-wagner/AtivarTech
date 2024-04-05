import { ChevronDownCircleIcon } from 'lucide-react'
import HeroShot from '../assets/hero-shot.png'
import HeroText from './HeroText'
import React from 'react'
import { Link } from 'react-scroll'


const ContainerHero = () => {
    return (
        <section id="home" name="home">
            <div className='z-10 lg:h-screen md:h-screen min-h-screen h-auto w-full lg:pt-[55px] pt-10 lg:flex-row md:flex-row flex-wrap-reverse flex justify-center items-center py-12 gap-5 px-36 lg:gap-[3%] md:gap-[6%] md:flex-nowrap'>
                <div id="heroText" className='lg:gap-2 md:gap-2 
                lg:place-self-center md:place-self-center place-self-start max-w-[570px] gap-2 flex flex-col lg:items-start md:items-start items-center'>
                    <div className='flex flex-col lg:text-start md:text-start lg:items-start md:items-start items-center text-center gap-2'>
                        <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Ativar Tecnologia</h3>
                        <h1 className='text-dark-blue font-semibold lg:w-[470px] md:w-[320px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 md:px-0 lg:text-[44px] font-poppins
                      dark:text-vanilla tracking-tighter'>
                            Sistema de gestão completo para a sua empresa!
                        </h1>
                    </div>
                    <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[420px] md:max-w-[420px]
                        text-center leading-loose lg:text-left md:text-left pt-2 pb-6 font-inter lg:px-0 md:px-0 px-2 '>
                        Conheça todo o potencial do seu negócio com nossas soluções inovadoras de gestão.</p>
                    <Link
                        to="service"
                        smooth={true}
                        offset={-80}
                        className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap z-10
            hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
            font-semibold font-inter text-[14px] gap-2 cursor-pointer text-slate-100 flex justify-center items-center text-center'>Saber mais<ChevronDownCircleIcon size={16} /> </Link>
                </div>
                {/* <HeroText /> */}
                {/* <div className='lg:w-1/2 w-[70%] z-0 flex lg:h-[90vh] h-auto'>
                    <img className='self-end w-[90%]' src={HeroShot} alt="heroshot" />
                </div> */}
                <div className=' max-w-[450px] lg:h-auto lg:place-self-center md:place-self-center place-self-end lg:mt-0 mt-[20%] md:mt-0 flex animate-fade-left'>
                    <img loading='lazy' className='object-contain min-w-[150px] max-w-[300px] lg:max-w-[500px] md:max-w-[300px] translate-x-4 lg:w-[500px] drop-shadow-md' src={HeroShot} alt="HeroShot" />
                </div>
            </div>
        </section>
        //     <section id="heroAbout" className='lg:h-screen md:h-screen h-auto w-full lg:pt-16 pt-10 lg:flex-row md:flex-row flex-wrap-reverse flex justify-center items-center py-12 gap-5 px-10 lg:gap-[6%] md:gap-[6%] '>
        //     <div id="heroText" className='lg:gap-2 md:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start md:items-start items-center'>
        //       <div className='flex flex-col lg:text-start md:text-start lg:items-start md:items-start items-center text-center gap-2'>
        //         <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Ativar Tecnologia</h3>
        //         <h1 className='text-dark-blue font-semibold lg:w-[470px] md:w-[320px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 md:px-0 lg:text-[40px] font-poppins
        //              dark:text-vanilla tracking-tighter'>
        //           Otimizando a gestão do seu negócio
        //         </h1>
        //       </div>
        //       <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-dark-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[420px] md:max-w-[420px]
        //                 text-center leading-loose lg:text-left md:text-left pt-2 pb-6 font-inter lg:px-0 md:px-0 px-2 '>
        //         Somos a ponte entre sua empresa e o sucesso.
        //         Desenvolvemos soluções que não apenas organizam, mas também se adaptam ao
        //         DNA único do seu negócio, promovendo uma gestão mais humana e eficaz.</p>
        //       <Link
        //         to="history"
        //         smooth={true}
        //         offset={-100}
        //         className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
        //         hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
        //         font-semibold font-inter text-[14px] gap-2 cursor-pointer text-slate-100 flex justify-center items-center text-center'>Ativar Tecnologia<ChevronDownCircleIcon size={16} /> </Link>
        //     </div>
        //     <div className=' max-w-[450px] lg:h-auto lg:mt-0 mt-[20%] md:mt-0 flex animate-fade-left'>
        //       <img className='object-contain min-w-[150px] max-w-[240px] lg:max-w-[360px] md:max-w-[300px] translate-x-6 lg:w-[350px] drop-shadow-md' src={heroshot} alt="HeroShot" />
        //     </div>
        //   </section>
    )
}

export default ContainerHero