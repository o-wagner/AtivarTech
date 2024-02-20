import React from 'react'
import { PackageOpen, Receipt, ScrollText, Settings, ShoppingBag, Truck } from 'lucide-react'
import bag from '/bag.png'
import '../index.css'
import retail from '../assets/service/retail.jpg'
import food from '../assets/service/food.jpg'

const resources = [
    {
        icon: <ShoppingBag strokeWidth={1.6} size={32} />,
        title: "Vendas",
        desc: "Vendas práticas: imprima, envie por email e acesse histórico completo do cliente na hora da compra.",
    },
    {
        icon: <Truck strokeWidth={1.6} size={32} />,
        title: "Entregas",
        desc: "Ganhe tempo e seja mais eficiente. Venda e agende entregas de forma organizada com nosso módulo de entrega futura.",
    },
    {
        icon: <ScrollText strokeWidth={1.6} size={32} />,
        title: "Relatórios",
        desc: "Módulo completo com 300+ relatórios para uma gestão eficaz. Categorizados e filtráveis, facilitando a busca de dados.",
    },
    {
        icon: <PackageOpen strokeWidth={1.6} size={32} />,
        title: "Controle de Estoque",
        desc: "Controle seu estoque com facilidade. Acompanhe vendas, ajuste preços e evite faltas.",
    },
    {
        icon: <Receipt strokeWidth={1.6} size={32} />,
        title: "Controle Financeiro",
        desc: "Tenha total controle de contas a pagar, recebimentos, inadimplência de clientes, fechamento de caixa, e outros.",
    },
    {
        icon: <Settings strokeWidth={1.6} size={32} />,
        title: "Ordem de Serviço",
        desc: "Organize o fluxo de serviços prestados pela sua empresa. Tenha controle de prioridades, etapas, tempo e outros recursos.",
    },
]
const service = [
    {
        icon: food,
        title: 'Food',
        desc: 'Soluções para o setor alimentício',
        moduleTitle: 'Módulo Promoção:', moduleDesc: 'Crie infinitas possibilidades promocionais para seus clientes',
        moduleTitle2: 'Programa Fidelidade:', moduleDesc2: 'Disponibilize benefícios para clientes cadastrados no programa',
        moduleTitle3: 'Cardápio Digital:', moduleDesc3: 'App que possibilita a realização de pedidos direto da mesa',
        moduleTitle4: 'Smart Menu:', moduleDesc4: 'Permite que o cliente visualize o cardápio de seu estabelecimento com QR Code.',
        path: '/solucoes/food'
    },
    {
        icon: bag,
        title: 'Varejo',
        desc: 'Soluções para o setor de varejo',
        moduleTitle: 'Controle de Turno:', moduleDesc: 'Crie infinitas possibilidades promocionais para seus clientes',
        moduleTitle2: 'Documentos Fiscais:', moduleDesc2: 'Disponibilize benefícios para clientes cadastrados no programa',
        moduleTitle3: 'Força de Vendas Externas:', moduleDesc3: 'App que possibilita a realização de pedidos direto da mesa',
        moduleTitle4: 'Analytics:', moduleDesc4: 'Permite que o cliente visualize o cardápio de seu estabelecimento com QR Code.',
        path: '/solucoes/varejo'
    },

]
const service2 = [
    {
        path: '/solucoes/varejo',
        img: retail,
        title: 'Varejo',
        desc: 'Soluções para o setor varejista, contamos com uma gama de módulos para atender as necessidades da sua empresa. Desde controle de estoque até análise de vendas.'
    },
    {
        path: '/solucoes/food',
        img: food,
        title: 'Alimentos',
        desc: 'Conheça nossas soluções para a gestão do seu negócio no setor alimentício. Com uma variedade de módulos adaptáveis, simplificamos processos para impulsionar seus resultados.'
    }
]

const ContainerServices = () => {
    return (
        <section name="service" id="service" className=' w-full pt-16 px-40'>
            <div className='flex items-center justify-center flex-col z-10'>
                <h6 className='text-blueish-gray z-10 font-semibold font-inter uppercase tracking-widest pb-2 text-[12px] dark:text-primary-blue'>Recursos</h6>
                <h1 className='text-4xl font-poppins  z-10 font-bold text-dark-blue mb-4 text-center dark:text-vanilla'>Potencialize seu negócio</h1>
                <span className='font-inter  z-10 text-greish-blue dark:text-blueish-gray lg:w-[700px] min-w-[260px] text-center'>Otimize sua rotina operacional com a Ativar Tecnologia. Descubra como nossas funcionalidades inovadoras podem elevar o desempenho do seu negócio</span>
            </div>
            <div className='w-full py-12 flex items-center justify-center flex-col gap-6'>
                <div className='grid w-full z-10 h-full min-w-[300px] max-w-[1000px] lg:grid-cols-3 grid-cols-1 gap-5'>
                    {resources.map((r) => {
                        return (
                            <div key={r.title} className='bg-white dark:bg-tertiary-dark
                             dark:hover:bg-hover-dark hover:drop-shadow-2xl hover:cursor-pointer lg:min-h-[240px] min-w-[300px] 
                             drop-shadow-lg px-6 py-8 flex flex-col rounded-xl justify-evenly transition-transform duration-200'>
                                <div className='flex gap-2 flex-col text-dark-blue dark:text-vanilla' id="icon">
                                    {r.icon}
                                    <h1 className='font-poppins font-semibold text-lg text-dark-blue dark:text-vanilla'>{r.title}</h1>
                                </div>
                                <p className='text-blueish-gray font-inter text-[15px] mt-2'>{r.desc}</p>
                            </div>
                        )
                    })}
                </div>

                <div className=' grid pb-20 z-10 lg:grid-cols-2 grid-cols-1 min-w-[300px] gap-6 max-w-[1000px]'>
                    {/* {service.map((s) => {
                        return (
                            <div key={s.moduleTitle}
                                className='flex flex-col drop-shadow-lg dark:shadow-medium-shadow hover:drop-shadow-xl hover:bg-neutral-100 px-20 items-center py-14 bg-white rounded-xl
                                 transition-transform dark:bg-tertiary-dark hover:dark:bg-hover-dark dark:text-vanilla'>
                                <img  src={s.icon} width={100} />
                                <h1 className='text-lg font-bold text-dark-blue dark:text-vanilla uppercase font-inter'>{s.title}</h1>
                                <span className='max-w-[200px] text-center text-blueish-gray'>{s.desc}</span>
                                <div className='flex flex-col lg:gap-4 gap-3 min-w-[220px] max-w-[340px] '>
                                    <div className='flex gap-3 mt-8'>
                                        <img src={ok} width={28} className='self-start translate-y-1' />
                                        <p className='font-inter text-dark-blue font-medium dark:text-vanilla'>{s.moduleTitle}
                                            <span className='text-blueish-gray font-normal'> {s.moduleDesc}</span></p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={ok} width={28} className='self-start translate-y-1' />
                                        <p className='font-inter text-dark-blue font-medium dark:text-vanilla'>{s.moduleTitle2}
                                            <span className='text-blueish-gray font-normal'> {s.moduleDesc2}</span></p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={ok} width={28} className='self-start translate-y-1' />
                                        <p className='font-inter text-dark-blue font-medium dark:text-vanilla'>{s.moduleTitle3}
                                            <span className='text-blueish-gray font-normal'> {s.moduleDesc3}</span></p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={ok} width={28} className='self-start translate-y-1' />
                                        <p className='font-inter text-dark-blue font-medium dark:text-vanilla'>{s.moduleTitle4}
                                            <span className='text-blueish-gray font-normal'> {s.moduleDesc4}</span></p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <Button name="Ver Mais" path={s.path}/>
                                </div>
                            </div>
                        )
                    })} */}
                    {service2.map((s) => {
                        return (
                            <div key={s.img} className='bg-white animate-fade-in dark:bg-tertiary-dark lg:min-h-[400px] min-w-[100px] 
                            drop-shadow-lg flex flex-col rounded-xl justify-evenly transition-transform duration-200'>
                                <div className=''>
                                    <img src={s.img} className='object-fill rounded-t-xl' />
                                </div>
                                <div className='flex flex-col gap-4 py-8 px-8'>
                                    <h3 className='dark:text-vanilla text-dark-blue font-poppins uppercase font-semibold'>{s.title}</h3>
                                    <p className='text-blueish-gray font-inter font-normal'>{s.desc}</p>
                                    <div className='w-full flex justify-end font-inter font-semibold uppercase text-sm text-dark-blue dark:text-vanilla'>
                                        <a href={s.path} className='hover:underline'>Saber Mais</a>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>
                {/* <div className='w-full absolute left-0 z-0 bg-light-wave-gradient dark:bg-dark-wave-gradient h-screen bg-repeat-x bg-center bg-contain'/> */}

            </div>
        </section>
    )
}

export default ContainerServices