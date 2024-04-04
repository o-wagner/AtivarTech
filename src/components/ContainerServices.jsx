import React from 'react'
import { AppWindow, ChevronRight, LucideTable2, PackageOpen, Receipt, ScrollText, Settings, ShoppingBag, Table, Table2, Table2Icon, TableIcon, Truck } from 'lucide-react'
import bag from '/bag.png'
import '../index.css'
import retail from '../assets/service/retail.jpg'
import food from '../assets/service/food.jpg'
import { NavLink } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { BsCashCoin } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
const resources = [
    {
        icon: <ShoppingBag strokeWidth={1.6} size={32} />,
        title: "Vendas, estoque e financeiro",
        desc: "Crie orçamentos e vendas, acompanhe movimentação dos seus produtos e gerencie suas contas e caixa.",
    },
    {
        icon: <BsCashCoin  size={32} />,
        title: "App para vendas externas",
        desc: "Venda em qualquer local pelo seu celular ou tablet e receba tudo direto no seu computador.",
    },
    {
        icon: <Receipt strokeWidth={1.6} size={32} />,
        title: "Documentos Fiscais",
        desc: "Emita documentos fiscais (NF-e, NFC-e, CT-e e MDF-e), gere obrigações acessórias e receba notas emitidas contra seu CNPJ automaticamente.",
    },
    {
        icon: <Settings strokeWidth={1.6} size={32} />,
        title: "Ordem de Serviço",
        desc: "Organize o fluxo de serviços prestados pela sua empresa. Tenha controle de prioridades, etapas, tempo e outros recursos.",
    },
    {
        icon: <FaWhatsapp strokeWidth={1.6} size={32} />,
        title: "Integração com Whatsapp",
        desc: "Facilite a comunicação com seu cliente, envie orçamentos no WhatsApp direto do sistema.",
    },
    {
        icon: <TbTruckDelivery strokeWidth={1.6} size={32} />,
        title: "Mesas, comandas e delivery",
        desc: "Tenha App para garçons fazerem pedidos, Cardápio digital, além de site de delivery para facilitar os pedidos do seu cliente.",
    },
    // {
    //     icon: <Settings strokeWidth={1.6} size={32} />,
    //     title: "Impressão de pedidos na cozinha",
    //     desc: "Receba seus pedidos para produção diretamente na cozinha através de impressora ou monitor KDS.",
    // },
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
        subtitle:'(Lojas, Oficinas, Madeireiras e etc)',
        desc: 'Soluções para ramo de varejo. Contamos com uma gama de recursos para atender as necessidades da sua empresa, seja vendas de produtos diversos ou prestação de serviços, desde controle de vendas, financeiro e estoque até a análise de resultados.'
    },
    {
        path: '/solucoes/food',
        img: food,
        title: 'FOOD-SERVICE',
        subtitle:' (Pizzarias, Lanchonetes, Hamburguerias e etc)',
        desc: 'Temos soluções completas para a gestão de food e delivery. Com uma variedade de módulos, simplificamos os processos para que os pedidos de seus clientes cheguem de forma automatizada até a produção, gerando mais vendas e impulsionando seus resultados.'
    }
]

const ContainerServices = () => {
    return (
        <section name="service" id="service" className=' w-full py-16 px-10 lg:px-24 pt-10 md:px-20'>
            <div className='flex items-center justify-center flex-col z-10'>
                <h6 className='text-blueish-gray z-10 font-semibold font-inter uppercase tracking-widest pb-2 text-[12px] dark:text-primary-blue'>Recursos</h6>
                <h1 className='lg:text-[40px] text-[25px] font-poppins  z-10 font-bold text-dark-blue mb-4 leading-[35px] lg:leading-[50px] text-center tracking-tight dark:text-vanilla'>Potencialize seu negócio</h1>
                <span className='font-inter lg:text-[16px] text-[14px] leading-6 z-10 text-greish-blue dark:text-blueish-gray lg:max-w-[650px] md:max-w-[650px] min-w-[260px] text-center'>Nós ajudamos a inovar a gestão do seu negócio. Descubra como nossas funcionalidades inovadoras podem elevar o desempenho da sua empresa.</span>
            </div>
            <div className='w-full py-12 flex items-center justify-center flex-col gap-3'>
                <div className='grid w-full z-10 h-full min-w-[300px] max-w-[1000px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                    {resources.map((r) => {
                        return (
                            <div key={r.title} className='bg-white dark:bg-tertiary-dark hover:-translate-y-1 border-slate-300 border dark:border-slate-800
                            //  dark:hover:bg-hover-dark hover:drop-shadow-xl min-w-[235px] lg:min-h-[200px] 
                             drop-shadow-lg px-4 py-8 flex flex-col rounded-xl justify-evenly transition-transform duration-200'>
                                <div className='flex gap-2 flex-col text-dark-blue dark:text-vanilla' id="icon">
                                    {r.icon}
                                    <h1 className='font-poppins font-semibold text-lg text-dark-blue dark:text-vanilla'>{r.title}</h1>
                                </div>
                                <p className='text-blueish-gray font-inter text-[15px] mt-2'>{r.desc}</p>
                            </div>
                        )
                    })}
                </div>

                <div className=' grid z-10 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 min-w-[300px] gap-3 max-w-[1000px]'>
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
                            <div key={s.img} className='bg-white dark:bg-tertiary-dark lg:min-h-[400px] min-w-[100px] 
                            drop-shadow-lg flex flex-col rounded-xl justify-between border-slate-300 border dark:border-slate-900'>
                                <img loading='lazy' src={s.img} className='object-fill flex rounded-t-xl' />
                                <div className='py-8 flex flex-col px-8'><div className='flex flex-col gap-5'>
                                    <div><h3 className='dark:text-vanilla text-dark-blue font-poppins text-[16px] uppercase font-semibold'>{s.title}</h3>
                                    <h3 className='dark:text-blueish-gray text-dark-blue font-poppins text-[12px] uppercase font-semibold'>{s.subtitle}</h3></div>
                                    <p className='text-blueish-gray font-inter text-[14px] font-normal'>{s.desc}</p>
                                </div>
                                    <div className='w-full flex justify-end font-inter font-semibold uppercase text-sm text-dark-blue dark:text-vanilla'>
                                        <NavLink to={s.path} className='pt-3 hover:underline flex items-center justify-center'>Saber Mais<ChevronRight className='translate-y-[1px]' size={18} /></NavLink>
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