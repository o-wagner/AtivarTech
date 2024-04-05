import React from 'react'
import ok from '../assets/food/allFunc/Ok.png'
import okDark from '../assets/food/allFunc/OkDark.png'
import useTheme from '../context/theme'

const food = [
    { title: 'Controle de mesas e comandas' },
    { title: 'Aplicativo para garçom realizar pedidos' },
    { title: 'Site de pedidos delivery' },
    { title: 'Integração com diversas plataformas de delivery' },
    { title: 'Aplicativo de gestão em tempo real' },
    { title: 'Soluções para Autoatendimento' },
    { title: 'Cardápio Digital' },
    { title: 'Cardápio e pedidos na mesa via QR Code' },
    { title: 'KDS (Monitor de pedidos na cozinha)' },
    { title: 'PDV dispositivos Android' },
    { title: 'POS móvel (vendas na máquina de cartão)' },
    { title: 'Emissão de notas fiscais' },
    { title: 'Controle de vendas, estoque e financeiro' },
    { title: 'Controle de perdas no estoque' },
    { title: 'Controle de produção dos produtos' },
    { title: 'Estoque em grade' },
    { title: 'Atualização em tempo real' },
    { title: 'Importação de XML' },
    { title: 'Recebe, armazena e gerencia notas fiscais emitidas para seu CNPJ' },
    { title: 'Demonstrativos de resultados financeiros' },
    { title: 'Conciliação bancária' },
    { title: 'Contratos de cartões e outros' },
    { title: 'Módulo BI (Business intelligence)' },
    { title: 'Programa de fidelidade' },
    { title: 'Relatórios dinâmicos (Você monta seu relatório)' },
    { title: 'PDV 100% Offline' },
    { title: 'ERP Web' },
    { title: 'Módulo promoção' },
    { title: 'Marketing' },
    { title: 'Reservas (Agendas e espaços)' },
    { title: 'Boletos' },

]
const varejo = [
    { title: 'Controle financeiro' },
    { title: 'Controle de estoque' },
    { title: 'Controle de turnos' },
    { title: 'Vendas e orçamentos' },
    { title: 'Ordem de Serviço' },
    { title: 'PDV – Frente de caixa com Pix integrado' },
    { title: 'Emissão de documentos fiscais' },
    { title: 'Gerenciados de entregas' },
    { title: 'Relatórios' },
    { title: 'App Eagle Analytics (indicadores)' },
    { title: 'App Força de vendas (vendas externas)' },
    { title: 'Documentos fiscais' },
    { title: 'Boletos' },
    { title: 'Conciliação bancária' },
    { title: 'Produção de produtos' },
    { title: 'Venda Rápida' },
    { title: 'Importação de XML' },
    { title: 'Busca de notas emitidas contra seu CNPJ' },
    { title: 'Gestão de cheques' },
    { title: 'Integração com Whatsapp' },
    { title: 'Geração de Sintegra e Sped' },
]

function AllFunc(props) {
    const { themeMode } = useTheme()
    return (
        <div className='grid gap-4 lg:grid-cols-3 lg:px-10 lg:pl-[5%] px-5 md:grid-cols-2 grid-cols-1'>
            {props.segmento === "food" &&
                <>{food.map((f) => {
                    return (
                        <div key={f.title} className='flex items-center gap-2 text-left justify-start'>
                            {themeMode === "dark" ? <img src={ok} className='lg:w-6 w-6' /> : <img src={okDark} className='lg:w-6 w-6' />}
                            <h3 className='dark:text-vanilla dark:hover:text-white transition-colors duration-400 cursor-default hover:text-dark-blue text-greish-blue text-[16px] max-w-[80%] text-left font-semibold font-poppins'>{f.title}</h3>
                        </div>
                    )
                })} </>}
            {props.segmento === "varejo" &&
                <>{varejo.map((v) => {
                    return (
                        <div key={v.title} className='flex items-center gap-2 text-left justify-start'>
                            {themeMode === "dark" ? <img src={ok} className='lg:w-6 w-6' /> : <img src={okDark} className='lg:w-6 w-6' />}
                            <h3 className='dark:text-vanilla hover:text-dark-blue dark:hover:text-white transition-colors duration-400 cursor-default text-greish-blue text-[16px] max-w-[80%] text-left font-semibold font-poppins'>{v.title}</h3>
                        </div>
                    )
                })} </>}
        </div>
    )
}

export default AllFunc