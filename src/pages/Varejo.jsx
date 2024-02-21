import React from 'react'
import useTheme from '../context/theme'
import { Link } from 'react-scroll'
import heroshot from '../assets/HeroVarejo.png'
import { ChevronDownCircleIcon } from 'lucide-react'
import InfoSolution from '../components/InfoSolution'
import MoreFunc from '../components/moreFunc'
import Segmentos from '../components/Segmentos'

function handleClick() {
    document.getElementById('link').innerHTML = 'Entre em contato ' + ' '
    document.getElementById('notFound').innerHTML = ' com um de nossos consultores para explorar possíveis soluções.'
}

export default function Varejo() {
    return (
        <div className='dark:bg-dark-background bg-light-background w-full'>
            <section id="heroVarejo" className='lg:h-[100dvh] h-auto w-full lg:pt-16 pt-10 lg:flex-row flex-wrap-reverse flex justify-center items-center px-10 lg:px-36 py-12 gap-5 lg:gap-[72px]'>
                <div id="heroText" className='lg:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start items-center'>
                    <div className='flex flex-col lg:text-start lg:items-start items-center text-center gap-2'>
                        <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Varejo</h3>
                        <h1 className='text-dark-blue font-semibold lg:w-[470px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 lg:text-[40px] font-poppins
                 dark:text-vanilla tracking-tighter '>
                            Solução para setor de varejo
                        </h1>
                    </div>
                    <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-dark-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[420px]
                    text-center leading-loose lg:text-left pt-2 pb-6 font-inter lg:px-0 px-2 '>
                        Otimize processos, controle estoques, gerencie pedidos e muito mais. Simplifique sua operação e aumente sua produtividade com nossas soluções especializadas.</p>
                    <Link
                        to="segmento"
                        smooth={true}
                        offset={-100}
                        className='flex gap-2 items-center font-semibold text-md text-white bg-button-gradient px-6 w-44 cursor-pointer hover:bg-button-gradient-hover py-[5px] rounded-[12px]'>Conheça mais<ChevronDownCircleIcon size={16} /> </Link>
                </div>
                <div className=' max-w-[570px] lg:h-auto lg:mt-0 mt-[20%] md:mt-[10%] flex animate-fade-left'>
                    <img className='object-contain min-w-[150px] max-w-[300px] lg:max-w-[500px] lg:translate-x-10 translate-x-6 lg:w-[470px] drop-shadow-md ' src={heroshot} alt="HeroShot" />
                </div>
            </section>
            <section id='segmento' className='w-full lg:px-36 px-10 pb-24 flex flex-col items-center justify-center'>
                <div className='flex items-center flex-col justify-center mb-[50px]'>
                    <h3 className='text-primary-blue uppercase text-[12px] font-inter font-semibold tracking-widest'>Conheça a solução</h3>
                    <h1 className='lg:text-[40px] text-[25px] mb-2 lg:mb-0 tracking-tight font-bold dark:text-vanilla text-dark-blue'>Segmentos de atuação</h1>
                    <p className='font-inter text-greish-blue dark:text-blueish-gray lg:max-w-[680px] min-w-[300px] lg:min-w-[380px]
           px-2 text-center'>Nosso sistema de gestão e frente de caixa PDV atende diversos segmentos do mercado em
                        todo o território brasileiro. Veja alguns dos nossos segmentos.</p>
                </div>
                <Segmentos segmento="varejo"/>
                <div className='w-full flex-col items-end flex justify-end max-w-[970px] pt-4'>
                    <button onClick={handleClick}><h3 className='text-blueish-gray hover:underline font-semibold text-[14px] font-poppins'>Não localizou sua área específica?</h3></button>
                    <div className="font-inter font-regular text-[13px] text-end text-blueish-gray max-w-[200px]"><a href="/contato" className='text-primary-blue underline' id="link"></a><p id="notFound"> </p></div>
                </div>
            </section>
            <section id='recursos' className='w-full lg:px-36 px-10 py-24  dark:bg-quaternary-dark bg-darker-light-bg'>
                <div className='flex items-center flex-col justify-center'>
                    <h3 className='dark:text-primary-blue text-blueish-gray uppercase text-[12px] font-inter font-semibold tracking-widest'>Recursos</h3>
                    <h1 className='lg:text-[35px] text-[25px] font-poppins mb-2 tracking-tight font-bold dark:text-vanilla text-dark-blue'>Explore nossas Funcionalidades </h1>
                    <p className='font-inter text-greish-blue dark:text-blueish-gray lg:max-w-[630px] min-w-[300px] lg:min-w-[380px]
           px-2 text-center'>Nós não entregamos somente software! Entregamos sistema, suporte, treinamento e acompanhamento da sua empresa! Seu sucesso é nosso sucesso! </p>
                </div>
                <div className='py-16 '>
                    <InfoSolution />
                </div>
            </section>
            <section id='moreFunc' className='lg:px-36 px-10 pb-24 pt-10'>
                <div className='flex items-center flex-col justify-center py-20 '>
                    <h1 className='lg:text-[35px] text-[25px] font-poppins mb-2 tracking-tight font-bold dark:text-vanilla text-dark-blue'>Confira mais diferencias</h1>
                    <p className='font-inter text-greish-blue dark:text-blueish-gray lg:max-w-[630px] min-w-[300px] lg:min-w-[380px]
           px-2 text-center'>Proporcionando novas tecnologias para você e seu cliente evoluirem</p>
                </div>
                <MoreFunc />
            </section>
        </div >
    )
}