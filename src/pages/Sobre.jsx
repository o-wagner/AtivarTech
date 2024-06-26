import React, { useState } from 'react'
import ContainerAbout from '../components/ContainerAbout'
import heroshot from '../assets/HeroAbout.png'
import ativarshot from '../assets/ativar_tec.png'
import { ChevronDownCircleIcon, Eye, Goal, HeartHandshake } from 'lucide-react'
import { Link } from 'react-scroll'
import { FaWhatsapp } from 'react-icons/fa'
import PopupModal from '../components/PopupModal'
import elipse from '../assets/Elipse.png'
import elipse2 from '../assets/Elipse2.png'

const mvv = [
  {
    icon: <Goal size={32} className='dark:text-vanilla text-dark-blue' />,
    title: 'Missão',
    text: 'Proporcionar soluções de gestão empresarial de alta qualidade, aliadas a um atendimento personalizado e suporte técnico excepcional, para impulsionar o sucesso e a eficiência operacional dos nossos clientes.',
  },
  {
    icon: <Eye size={32} className='dark:text-vanilla text-dark-blue' />,
    title: 'Visão',
    text: 'Ser a referência no mercado de sistemas de gestão empresarial, reconhecidos não apenas pela excelência das nossas soluções, mas também pelo compromisso inabalável com a qualidade do nosso atendimento e suporte técnico, contribuindo assim para o crescimento e prosperidade contínua dos negócios dos nossos clientes.',
  },
  {
    icon: <HeartHandshake size={32} className='dark:text-vanilla text-dark-blue' />,
    title: 'Valores',
    text: 'Excelência no atendimento ao cliente, buscando exceder suas expectativas por meio de atendimentos personalizados e eficientes. Comprometemo-nos a fornecer soluções de gestão de alta qualidade, prezando pela segurança e transparência. Valorizamos as relações com nossos clientes, parceiros e colaboradores e estamos em constante inovação, promovendo uma cultura de aprendizado contínuo.',
  }
]

function Sobre() {
  const [support, setSupport] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const supportShow = () => {
    if (window.scrollY >= 10) {
      setSupport(true);
    } else {
      setSupport(false);
    }
  }
  const handleClick = () => {
    setShowModal(!showModal);
  }
  window.addEventListener('scroll', supportShow)

  return (
    <div className='dark:bg-dark-background bg-light-background w-full'>
      <> <PopupModal handleClick={handleClick} showModal={showModal} support={support} />
        <button onClick={() => handleClick()}>
          <a className={` ${support ? 'visible animate-fade-left duration-100' : 'invisible'}`}>
            <div className='dark:bg-tertiary-dark bg-dark-blue dark:hover:bg-secondary-dark transition-colors drop-shadow-2xl duration-150 hover:bg-[#071b38] rounded-full p-[14px] flex items-center justify-center bottom-6 right-8 z-30 fixed text-md lg:text-3xl'>
              <FaWhatsapp color='white' />
            </div>
          </a>
        </button>
      </>
      <img loading='lazy' className='-z-0 absolute top-0 opacity-50 w-[30%]' src={elipse} />
      <img loading='lazy' className='-z-0 absolute right-0 top-0 opacity-40 w-[40%]' src={elipse2} />
      <section id="heroAbout" className='lg:h-screen min-h-screen  md:h-screen h-auto w-full lg:pt-16 pt-0 lg:flex-row md:flex-row flex-wrap-reverse flex justify-center items-center py-12 gap-5 px-10 lg:gap-[6%] md:gap-[6%] md:flex-nowrap '>
        <div id="heroText" className='z-10 lg:place-self-center md:place-self-center place-self-start lg:gap-2 md:gap-2 max-w-[570px] gap-2 flex flex-col lg:items-start md:items-start items-center'>
          <div className='flex flex-col lg:text-start md:text-start lg:items-start md:items-start items-center text-center gap-2'>
            <h3 className='text-primary-blue uppercase font-inter text-[12px] font-semibold tracking-widest'>Ativar Tecnologia</h3>
            <h1 className='text-dark-blue font-semibold lg:w-[470px] md:w-[320px] w-[320px] lg:leading-[50px] leading-[35px] text-[25px] lg:px-0 md:px-0 lg:text-[40px] font-poppins
                 dark:text-vanilla tracking-tighter'>
              Otimizando a gestão do seu negócio
            </h1>
          </div>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue font-normal min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[420px] md:max-w-[420px]
                    text-center leading-loose lg:text-left md:text-left pt-2 pb-6 font-inter lg:px-0 md:px-0 px-8 '>
            Somos a ponte entre sua empresa e o sucesso. Nossas soluções não apenas organizam, mas também se adaptam ao DNA exclusivo do seu negócio, promovendo uma gestão mais humana e eficaz.</p>
          <Link
            to="history"
            smooth={true}
            offset={-100}
            className=' px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
            hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
            font-semibold font-inter text-[14px] gap-2 cursor-pointer text-slate-100 flex justify-center items-center text-center'>A Ativar Tecnologia<ChevronDownCircleIcon size={16} /> </Link>
        </div>
        <div className=' lg:place-self-center md:place-self-center place-self-end max-w-[450px] lg:h-auto lg:mt-0 mt-[20%] md:mt-0 flex animate-fade-left'>
          <img className='object-contain min-w-[150px] max-w-[240px] lg:max-w-[400px] md:max-w-[300px] translate-x-6 lg:w-[400px] drop-shadow-md' src={heroshot} alt="HeroShot" />
        </div>
      </section>
      <section id="history" className='h-auto py-16 flex-wrap md:flex-nowrap px-10 flex items-center justify-center lg:gap-[5%] md:gap-10 gap-5 bg-darker-light-bg dark:bg-quaternary-dark '>
        <img className='lg:w-[380px] md:w-[330px] w-[280px]' src={ativarshot} alt='ativarfoto' />
        <div className='flex flex-col items-center lg:items-start md:items-start gap-4 text-center md:text-start lg:text-start'>
          <h1 className='lg:text-[40px] text-[30px] w-[380px] font-bold dark:text-vanilla text-dark-blue'>Nossa <span className='text-primary-blue'>História</span></h1>
          <p className='dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue font-normal leading-loose min-w-[300px] lg:min-w-[400px] max-w-[600px] lg:max-w-[600px] md:max-w-[460px]
                    text-center lg:text-left md:text-left mb-6 lg:px-0 md:px-0 font-inter px-10 '>A Ativar Tecnologia surgiu através de uma parceria com a Eagle Tecnologia, uma empresa sólida no mercado que nos impulsionou a oferecer as melhores soluções em sistemas de gestão para pequenas, médias e grandes empresas. <br />
            Atuamos no mercado de Guanhães e região desde 2021 e estamos em constante crescimento, com clientes em diversas regiões do Brasil. Nosso compromisso com a excelência e a satisfação do nosso cliente, nos diferencia, enquanto nossa equipe apaixonada e experiente, impulsiona nossa missão de liderar o caminho para o sucesso empresarial da região, oferecendo o melhor atendimento e suporte técnico humanizado.
            Junte-se a nós enquanto continuamos a escrever a nossa história.
          </p>
        </div>
      </section>
      <section id="mvv" className='h-auto py-16 pb-8 flex flex-col items-center justify-center gap-2 lg:px-20 px-10'>
        <h3 className='text-primary-blue uppercase text-[12px] font-inter font-semibold tracking-widest'>A Ativar Tecnologia</h3>
        <h1 className='lg:text-[40px] text-[25px] text-center tracking-tight font-bold dark:text-vanilla text-dark-blue'>Missão, Visão e Valores</h1>
        <p className='font-inter lg:text-[16px] text-[14px] leading-6 text-greish-blue dark:text-blueish-gray max-w-[600px] min-w-[300px] lg:min-w-[380px] px-2 text-center'>Saiba mais sobre o que nos impulsiona e como estamos moldando o futuro da tecnologia através de nossa visão inspiradora e valores fundamentais.</p>
        <div className=' grid gap-3 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-start justify-center mt-10 '>
          {mvv.map((item) => {
            return (
              <div key={item.title} className='bg-white 
              hover:drop-shadow-xl hover:-translate-y-1 transition-transform duration-200 ease-in-out drop-shadow-lg
              dark:bg-quaternary-dark py-8 px-6 rounded-lg dark:hover:bg-secondary-dark lg:max-w-[400px] lg:h-[100%]
              justify-start gap-4 flex flex-col border border-slate-300 dark:border-slate-900'>
                <div className='flex gap-2 flex-col'> {item.icon}
                  <h4 className='dark:text-vanilla text-dark-blue font-bold text-xl'>{item.title}</h4>
                </div>
                <p className='dark:text-lighter-gray text-dark-blue'>{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>
      <ContainerAbout />
    </div>
  )
}

export default Sobre