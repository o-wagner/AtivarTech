import React from 'react'
import { PackageOpen, Receipt, ScrollText, Settings, ShoppingBag, Truck } from 'lucide-react'

const resources = [
    {
        icon: <ShoppingBag color='#3D8AF8' size={30}/>,
        title: "Vendas",
        desc: "Vendas práticas: imprima, envie por email e acesse histórico completo do cliente na hora da compra.",
    },
    {
        icon: <Truck color="#3D8AF8" size={30}/>,
        title: "Entregas",
        desc: "Ganhe tempo e seja mais eficiente. Venda e agende entregas de forma organizada com nosso módulo de entrega futura.",
    },
    {
        icon: <ScrollText color="#3D8AF8" size={30}/>,
        title: "Relatórios",
        desc: "Módulo completo com 300+ relatórios para uma gestão eficaz. Categorizados e filtráveis, facilitando a busca de dados.",
    },
    {
        icon: <PackageOpen color="#3D8AF8" size={30}/>,
        title: "Controle de Estoque",
        desc: "Controle seu estoque com facilidade. Acompanhe vendas, ajuste preços e evite faltas.",
    },
    {
        icon: <Receipt color="#3D8AF8" size={30}/>,
        title: "Controle Financeiro",
        desc: "Tenha total controle de contas a pagar, recebimentos, inadimplência de clientes, fechamento de caixa, e outros.",
    },
    {
        icon: <Settings color="#3D8AF8" size={30}/>,
        title: "Ordem de Serviço",
        desc: "Organize o fluxo de serviços prestados pela sua empresa. Tenha controle de prioridades, etapas, tempo e outros recursos.",
    },
]

const ContainerServices = () => {
    return (
        <section name="service" id="service" className='bg-light-background dark:bg-dark-background transition-colors w-full pt-16 px-36 gap-5'>
            <div className='flex items-center justify-center flex-col'>
                <h6 className='text-dark-blue font-semibold font-inter dark:text-primary-blue'>Recursos</h6>
                <h1 className='text-4xl font-poppins font-bold text-dark-blue mb-4 text-center dark:text-vanilla'>Potencialize seu negócio</h1>
                <span className='font-inter text-blueish-gray lg:w-[700px] min-w-[260px] text-center'>Otimize sua rotina operacional com a Ativar Tecnologia. Descubra como nossas funcionalidades inovadoras podem elevar o desempenho do seu negócio</span>
            </div>
            <div className='w-full py-12 flex items-center justify-center'>
                <div className='grid w-full h-full min-w-[300px] lg:grid-cols-3 grid-cols-1 gap-5'>
                    {resources.map((r) => {
                        return (
                            <div key={r.title} className='bg-white dark:bg-terciary-dark dark:hover:bg-hover-dark hover:cursor-pointer hover:bg-neutral-100 min-w-[300px] shadow-lg px-8 py-8 flex flex-col gap-3 rounded-3xl transition-colors duration-150 '>
                                <div id="icon">{r.icon}</div>
                                <div>
                                    <h1 className='font-inter font-bold text-lg text-dark-blue dark:text-vanilla'>{r.title}</h1>
                                    <p className='text-lighter-gray'>{r.desc}</p>
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