import React from 'react'
import backup from '../assets/food/moreFunc/backup.png'
import backupLight from '../assets/food/moreFunc/light/backup.png'
import check from '../assets/food/moreFunc/check.png'
import checkLight from '../assets/food/moreFunc/light/check.png'
import note from '../assets/food/moreFunc/note.png'
import noteLight from '../assets/food/moreFunc/light/note.png'
import hand from '../assets/food/moreFunc/hand.png'
import handLight from '../assets/food/moreFunc/light/hand.png'
import pen from '../assets/food/moreFunc/pen.png'
import penLight from '../assets/food/moreFunc/light/pen.png'
import bank from '../assets/food/moreFunc/bank.png'
import bankLight from '../assets/food/moreFunc/light/bank.png'
import useTheme from '../context/theme'

const moreFunc = [
    {
        icon: check, iconLight:checkLight, title: 'Redução de Erros',
        desc: 'Pedidos chegam diretamente ao seu destino, seja para a separação ou até mesmo auto serviço por parte do cliente, sem a intervenção de terceiros.',
    },
    {
        icon: backup, iconLight:backupLight, title: 'Sistema na Nuvem',
        desc: 'Suas informação estão seguras conosco, por termos uma plataforma na nuvem você não precisa se preocupar com backups, nós fazemos isso para você!',
    },
    {
        icon: note, iconLight:noteLight, title: 'Notas Fiscais',
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
        icon: bank, iconLight:bankLight, title: 'Conciliação Bancária', 
        desc: 'Através da importação de extratos bancários, nosso algoritmo identifica os pagamentos realizados, sincronizando-os com a sua gestão financeira.',
    }
]

function MoreFunc() {
    const { themeMode } = useTheme()
    return (
        <div className='grid pb-10 gap-16 lg:grid-cols-3 grid-cols-1'>
            {moreFunc.map((m) => {
                return (
                    <div key={m.title} className='flex flex-col items-center gap-3 text-center justify-start'>
                        {themeMode === "dark" ? <img src={m.icon} className='lg:w-8 w-8'/>:<img src={m.iconLight} className='lg:w-8 w-8'/>}
                        <h3 className='dark:text-vanilla text-[16px] font-semibold font-poppins text-dark-blue'>{m.title}</h3>
                        <p className='dark:text-blueish-gray font-inter text-[15px] text-greish-blue leading-7'>{m.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MoreFunc