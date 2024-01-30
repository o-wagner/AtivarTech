// import ContainerAbout from './components/ContainerAbout';
import ContainerBackup from './components/ContainerBackup';
import ContainerFeedback from './components/ContainerFeedback';
// import ContainerHero from './components/ContainerHero';
import ContainerHeroSlide from './components/ContainerHeroSlide';
import ContainerServices from './components/ContainerServices';
import ContainerSuporte from './components/ContainerSuporte';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css'

function App() {

  return (
    <div className='bg-light-background dark:bg-dark-background '>
      <Header/>
      <ContainerHeroSlide/>
      <ContainerServices/>
      <ContainerSuporte/>
      <ContainerBackup/>
      <ContainerFeedback/>
      {/* <ContainerAbout/> */}
      <Footer/>
    </div>
  )
}

export default App
