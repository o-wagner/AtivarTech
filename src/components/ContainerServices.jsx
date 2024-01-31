import React from 'react'
import { Check, CheckCircle, CheckCircle2Icon, PackageOpen, Receipt, ScrollText, Settings, ShoppingBag, Truck } from 'lucide-react'
import food from '/food.png'
import bag from '/bag.png'
import ok from '/Ok.svg'
import Button from './Button'
const resources = [
    {
        icon: <ShoppingBag color='#3D8AF8' size={40} />,
        title: "Vendas",
        desc: "Vendas práticas: imprima, envie por email e acesse histórico completo do cliente na hora da compra.",
    },
    {
        icon: <Truck color="#3D8AF8" size={40} />,
        title: "Entregas",
        desc: "Ganhe tempo e seja mais eficiente. Venda e agende entregas de forma organizada com nosso módulo de entrega futura.",
    },
    {
        icon: <ScrollText color="#3D8AF8" size={40} />,
        title: "Relatórios",
        desc: "Módulo completo com 300+ relatórios para uma gestão eficaz. Categorizados e filtráveis, facilitando a busca de dados.",
    },
    {
        icon: <PackageOpen color="#3D8AF8" size={40} />,
        title: "Controle de Estoque",
        desc: "Controle seu estoque com facilidade. Acompanhe vendas, ajuste preços e evite faltas.",
    },
    {
        icon: <Receipt color="#3D8AF8" size={40} />,
        title: "Controle Financeiro",
        desc: "Tenha total controle de contas a pagar, recebimentos, inadimplência de clientes, fechamento de caixa, e outros.",
    },
    {
        icon: <Settings color="#3D8AF8" size={40} />,
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
    },
    {
        icon: bag,
        title: 'Varejo',
        desc: 'Soluções para o setor de varejo',
        moduleTitle: 'Controle de Turno:', moduleDesc: 'Crie infinitas possibilidades promocionais para seus clientes',
        moduleTitle2: 'Documentos Fiscais:', moduleDesc2: 'Disponibilize benefícios para clientes cadastrados no programa',
        moduleTitle3: 'Força de Vendas Externas:', moduleDesc3: 'App que possibilita a realização de pedidos direto da mesa',
        moduleTitle4: 'Analytics:', moduleDesc4: 'Permite que o cliente visualize o cardápio de seu estabelecimento com QR Code.',
    },

]

const ContainerServices = () => {
    return (
        <section name="service" id="service" className='bg-light-background dark:bg-dark-background w-full pt-16 px-40'>            
                <div className='flex items-center justify-center flex-col'>
                    <h6 className='text-dark-blue font-semibold font-inter dark:text-primary-blue'>Recursos</h6>
                    <h1 className='text-4xl font-poppins font-bold text-dark-blue mb-4 text-center dark:text-vanilla'>Potencialize seu negócio</h1>
                    <span className='font-inter text-blueish-gray lg:w-[700px] min-w-[260px] text-center'>Otimize sua rotina operacional com a Ativar Tecnologia. Descubra como nossas funcionalidades inovadoras podem elevar o desempenho do seu negócio</span>
                </div>
                <div className='w-full py-12 flex items-center justify-center flex-col gap-10'>
                    <div className='grid w-full h-full min-w-[300px] max-w-[1100px] lg:grid-cols-3 grid-cols-1 gap-5'>
                        {resources.map((r) => {
                            return (
                                <div key={r.title} className='bg-white hover:-translate-y-2 dark:bg-terciary-dark dark:hover:bg-hover-dark hover:cursor-pointer hover:bg-neutral-100 min-w-[300px] drop-shadow-lg px-8 py-10 flex flex-col gap-3 rounded-3xl transition-transform duration-200'>
                                    <div id="icon">{r.icon}</div>
                                    <div>
                                        <h1 className='font-inter font-bold text-lg text-dark-blue dark:text-vanilla'>{r.title}</h1>
                                        <p className='text-blueish-gray mt-2'>{r.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=' w-full grid lg:grid-cols-2 grid-cols-1 min-w-[300px] gap-8 max-w-[1100px]'>
                        {service.map((s) => {
                            return (
                                <div key={s.moduleTitle}
                                    className='flex flex-col drop-shadow-lg hover:bg-neutral-100 px-20 items-center py-16 cursor-pointer bg-white rounded-3xl
                                 transition-transform hover:-translate-y-2 dark:bg-terciary-dark hover:dark:bg-hover-dark dark:text-vanilla'>
                                    <img src={s.icon} width={100} />
                                    <h1 className='text-lg font-bold text-dark-blue dark:text-vanilla uppercase font-inter'>{s.title}</h1>
                                    <span className='max-w-[200px] text-center text-blueish-gray'>{s.desc}</span>
                                    <div className='flex flex-col lg:gap-4 gap-3 min-w-[220px] max-w-[345px] '>
                                        <div className='flex gap-3 mt-8'>
                                            <img src={ok} width={36} className='self-start translate-y-1' />
                                            <p className='font-inter text-dark-blue font-medium dark:text-vanilla'>{s.moduleTitle}
                                                <span className='text-blueish-gray font-normal'> {s.moduleDesc}</span></p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <img src={ok} width={36} className='self-start translate-y-1' />
                                            <p className='font-inter text-dark-blue font-medium dark:text-vanilla'>{s.moduleTitle2}
                                                <span className='text-blueish-gray font-normal'> {s.moduleDesc2}</span></p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <img src={ok} width={36} className='self-start translate-y-1' />
                                            <p className='font-inter text-dark-blue font-medium dark:text-vanilla'>{s.moduleTitle3}
                                                <span className='text-blueish-gray font-normal'> {s.moduleDesc3}</span></p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <img src={ok} width={36} className='self-start translate-y-1' />
                                            <p className='font-inter text-dark-blue font-medium dark:text-vanilla'>{s.moduleTitle4}
                                                <span className='text-blueish-gray font-normal'> {s.moduleDesc4}</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <Button name="Ver Mais" />
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
        </section>
    )
}

export default ContainerServices