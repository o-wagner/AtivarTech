import React from 'react'
import backup from '../assets/food/moreFunc/backup.png'
import backupLight from '../assets/food/moreFunc/Light/backup.png'
import check from '../assets/food/moreFunc/check.png'
import checkLight from '../assets/food/moreFunc/Light/check.png'
import note from '../assets/food/moreFunc/note.png'
import noteLight from '../assets/food/moreFunc/Light/note.png'
import hand from '../assets/food/moreFunc/hand.png'
import handLight from '../assets/food/moreFunc/Light/hand.png'
import pen from '../assets/food/moreFunc/pen.png'
import penLight from '../assets/food/moreFunc/Light/pen.png'
import bank from '../assets/food/moreFunc/bank.png'
import bankLight from '../assets/food/moreFunc/Light/bank.png'
import moonLight from '../assets/retail/moreFunc/Light/moon.png'
import moon from '../assets/retail/moreFunc/moon.png'
import pix from '../assets/retail/moreFunc/pix.png'
import pixLight from '../assets/retail/moreFunc/Light/pix.png'
import analyticsLight from '../assets/retail/moreFunc/Light/analytics.png'
import analytics from '../assets/retail/moreFunc/analytics.png'
import service from '../assets/retail/moreFunc/service.png'
import serviceLight from '../assets/retail/moreFunc/Light/service.png'
import useTheme from '../context/theme'
import imprimir from '../assets/food/moreFunc/imprimir.png'
import imprimirLight from '../assets/food/moreFunc/Light/imprimir.png'

const food = [
    {
        icon: check, iconLight: checkLight, title: 'Redução de Erros',
        desc: 'Pedidos chegam diretamente ao seu destino, seja para a separação ou até mesmo auto serviço por parte do cliente, sem a intervenção de terceiros.',
    },
    {
        icon: backup, iconLight: backupLight, title: 'Sistema na Nuvem',
        desc: 'Suas informação estão seguras conosco, por termos uma plataforma na nuvem você não precisa se preocupar com backups, nós fazemos isso para você!',
    },
    {
        icon: note, iconLight: noteLight, title: 'Notas Fiscais',
        desc: 'Nosso sistema emite NF-e NFC-e em todos os estados Brasileiros, e SAT CF-e para o estado de São Paulo, que utiliza o Cupom Fiscal Eletrônico.',
    },
    {
        icon: hand, iconLight: handLight, title: 'Otimização de Custos',
        desc: 'É possível expandir sua operação sem a necessidade de aumentar a equipe. Utilizando a tecnologia como uma ferramenta de suporte para seus colaboradores.',
    },
    {
        icon: pen, iconLight: penLight, title: 'Controle de Comandos',
        desc: 'Solução 100% offline, através do computador, tablet e smartphones. Independente do tamanho da operação ou a quantidade de garçons do estabelecimento.',
    },
    {
        icon: imprimir, iconLight: imprimirLight, title: 'Impressão de pedidos na cozinha',
        desc: 'Receba os pedidos para produção diretamente na cozinha, através de impressora ou monitor KDS, sem a necessidade de interferência humana.',
    }
]
const varejo = [
    {
        icon: moon, iconLight: moonLight, title: 'Controle de Turno',
        desc: 'Facilite o controle do seu caixa. Nosso sistema permite a organização dos valores do caixa de cada vendedor, horários de turnos, sangrias e reforços do caixa.',
    },
    {
        icon: pix, iconLight: pixLight, title: 'Frente de caixa com PIX',
        desc: 'Faça suas vendas e emita NFC-e em poucos segundos com o PDV Expresso. Nosso PDV possui PIX Integrado, no qual você não precisa conferir o PIX, o QR CODE é gerado, e o sistema ja confere o recebimento',
    },
    {
        icon: analytics, iconLight: analyticsLight, title: 'Controle de Estoque',
        desc: 'Nosso sistema permite acompanhar a movimentação dos produtos, os mais vendidos, os mais lucrativos, entre outras informações para manter um melhor fluxo do seu estoque.'
        // desc: 'Acompanhe em tempo real tudo da sua empresa diretamente na tela do seu celular. Saiba os pontos estratégicos do seu negócio através de indicadores, direcionando a sua atenção ao que importa.',
    },
    {
        icon: note, iconLight: noteLight, title: 'Controle de Contas',
        desc: 'Gestão de contas a pagar, recebimentos, inadimplência de clientes cheques, conciliação bancária, fechamento de caixa.',
    },
    {
        icon: service, iconLight: serviceLight, title: 'Ordem de serviço',
        desc: 'Organize o fluxo dos serviços prestados pela sua empresa. Tenha controle de prioridades, etapas, tempo, quem executou o serviço, entre outros recursos.',
    },
    {
        icon: hand, iconLight: handLight, title: 'Acompanhe suas vendas',
        desc: 'Crie orçamentos e faça vendas de forma prática, possibilitando imporessão e envio por e-mail. Além disso você tem o histórico completo do cliente no momento da venda.',
    }
]

function MoreFunc(props) {
    const { themeMode } = useTheme()
    return (
        <div className='grid pb-10 gap-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {props.segmento === "food" &&
                <>{food.map((f) => {
                    return (
                        <div key={f.title} className='flex flex-col items-center gap-3 text-center justify-start'>
                            {themeMode === "dark" ? <img src={f.icon} className='lg:w-8 w-8' /> : <img src={f.iconLight} className='lg:w-8 w-8' />}
                            <h3 className='dark:text-vanilla text-[16px] font-semibold font-poppins text-dark-blue'>{f.title}</h3>
                            <p className='dark:text-blueish-gray font-inter lg:text-[16px] text-[14px] text-greish-blue leading-6 max-w-[400px]'>{f.desc}</p>
                        </div>
                    )
                })} </>}
            {props.segmento === "varejo" &&
                <>{varejo.map((v) => {
                    return (
                        <div key={v.title} className='flex flex-col items-center gap-3 text-center justify-start'>
                            {themeMode === "dark" ? <img src={v.icon} className='lg:w-8 w-8' /> : <img src={v.iconLight} className='lg:w-8 w-8' />}
                            <h3 className='dark:text-vanilla text-[16px] font-semibold font-poppins text-dark-blue'>{v.title}</h3>
                            <p className='dark:text-blueish-gray font-inter lg:text-[16px] text-[14px] text-greish-blue leading-6 max-w-[400px]'>{v.desc}</p>
                        </div>
                    )
                })} </>}

        </div>
    )
}

export default MoreFunc