import ContainerBackup from './components/ContainerBackup';
import ContainerFeedback from './components/ContainerFeedback';
import ContainerHero from './components/ContainerHero';
import ContainerServices from './components/ContainerServices';
import ContainerSuporte from './components/ContainerSuporte';
import Header from './components/Header';


function App() {

  return (
    <div>
      <Header/>
      <ContainerHero/>
      <ContainerServices/>
      <ContainerSuporte/>
      <ContainerBackup/>
      <ContainerFeedback/>
    </div>
  )
}

export default App
