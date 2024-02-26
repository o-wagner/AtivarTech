import React, { useEffect, useState } from 'react'
import ContainerHeroSlide from '../components/ContainerHeroSlide'
import ContainerServices from '../components/ContainerServices'
import ContainerSuporte from '../components/ContainerSuporte'
import ContainerBackup from '../components/ContainerBackup'
import ContainerFeedback from '../components/ContainerFeedback'
import { FaWhatsapp } from 'react-icons/fa'
import { X } from 'lucide-react'
function Home(props) {
    const [support, setSupport] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const supportShow = () => {
        if (window.scrollY >= 90) {
            setSupport(true);
        } else {
            setSupport(false);
        }
    }
    window.addEventListener('scroll', supportShow);
    const handleClick = () => {
        setShowModal(!showModal);
    }

    return (
        <div className='bg-light-background dark:bg-dark-background'>
            <div className={`${support ? 'visible animate-fade-left duration-200 ' : 'invisible'} ${showModal ? 'visible animate-fade-left' : 'invisible'} bg-white bottom-6 right-[100px] rounded-lg h-64 w-64 z-30 fixed drop-shadow-2xl dark:bg-secondary-dark`}>
                <div className='py-[14px] dark:text-vanilla font-poppins font-semibold text-sm bg-dark-blue rounded-t-lg flex flex-row items-center justify-between text-white lg:px-4'>Olá, seja bem vindo!
                    <button onClick={() => handleClick()}><X size={18} /></button></div>
                <div className='items-center flex flex-col'>
                    <div className='text-dark-blue dark:text-vanilla lg:px-4 flex justify-center text-center lg:py-4'><p>Precisa de atendimento? Converse com um de nossos colaboladores pelo Whatsapp </p></div>
                    <div className=' lg:px-3 flex items-center justify-center gap-10 py-5 text-dark-blue dark:text-vanilla text-2xl'>
                        <a href="https://wa.me/553321010601" target='_blank' rel="noreferrer noopener" className='flex flex-col items-center justify-center animate-fade-left dark:hover:text-white '>
                            <FaWhatsapp />
                            <p className='text-sm'>Preciso de suporte</p>
                        </a>
                    </div>
                </div>
            </div>
            <button onClick={() => handleClick()}>
                <a className={` ${support ? 'visible animate-fade-left duration-100' : 'invisible'}`}>
                    <div className='dark:bg-tertiary-dark bg-dark-blue dark:hover:bg-secondary-dark transition-colors drop-shadow-2xl duration-150 hover:bg-[#071b38] rounded-full p-[14px] flex items-center justify-center bottom-6 right-8 z-30 fixed text-md lg:text-3xl'>
                        <FaWhatsapp color='white' />
                    </div>
                </a>
            </button>
            <ContainerHeroSlide />
            <ContainerServices />
            <ContainerSuporte />
            <ContainerBackup />
            <ContainerFeedback />
        </div>
    )
}

export default Home