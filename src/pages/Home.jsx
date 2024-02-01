import React from 'react'
import ContainerHeroSlide from '../components/ContainerHeroSlide'
import ContainerServices from '../components/ContainerServices'
import ContainerSuporte from '../components/ContainerSuporte'
import ContainerBackup from '../components/ContainerBackup'
import ContainerFeedback from '../components/ContainerFeedback'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
    return (
        <div className='bg-light-background dark:bg-dark-background'>
            <ContainerHeroSlide />
            <ContainerServices />
            <ContainerSuporte />
            <ContainerBackup />
            <ContainerFeedback />
        </div>
    )
}

export default Home