import React, { useEffect, useState } from 'react'
import ContainerHeroSlide from '../components/ContainerHeroSlide'
import ContainerServices from '../components/ContainerServices'
import ContainerSuporte from '../components/ContainerSuporte'
import ContainerBackup from '../components/ContainerBackup'
import ContainerFeedback from '../components/ContainerFeedback'
import { FaWhatsapp } from 'react-icons/fa'
import PopupModal from '../components/PopupModal'

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
            <><PopupModal handleClick={() => handleClick()} showModal={showModal} support={support} />
                <button onClick={() => handleClick()}>
                    <a className={` ${support ? 'visible animate-fade-left duration-100' : 'invisible'}`}>
                        <div className='dark:bg-tertiary-dark bg-dark-blue dark:hover:bg-secondary-dark transition-colors drop-shadow-2xl duration-150 hover:bg-[#071b38] rounded-full p-[14px] flex items-center justify-center bottom-6 right-8 z-30 fixed text-md lg:text-3xl'>
                            <FaWhatsapp color='white' />
                        </div>
                    </a>
                </button></>
            <ContainerHeroSlide />
            <ContainerServices />
            <ContainerSuporte />
            <ContainerBackup />
            <ContainerFeedback />
        </div>

    )
}

export default Home