import React from 'react'
import atendimento from '../assets/food/atendimento.png'
import cardapio from '../assets/food/cardapio.png'
import gestao from '../assets/food/gestao.png'
import pos from '../assets/food/pos.png'
import qrMenu from '../assets/food/qrMenu.png'
const food = [
    {
        position: true,
        img: cardapio,
        title: 'Cardápio ',
        titleBlue: 'Digital',
        desc: 'Aplicativo que possibilita a realização de pedidos direto da mesa, sem a necessidade de solicitar atendimento de um garçom ou se locomover até o caixa.',
    },
    {
        position: false,
        img: atendimento,
        title: 'Auto',
        titleBlue: 'Atendimento',
        desc: 'Proporcione ao seu cliente uma experiência de consumo diferenciada, inovadora e com muito mais autonomia. Sua empresa ganha agilidade, economiza recursos e potencializa o ticket médio.',
    },
    {
        position: true,
        img: gestao,
        title: 'App de ',
        titleBlue: 'Gestão',
        desc: 'Acompanhe dados importantes como abertura e fechamento de caixa, possibilitando uma visão geral de movimentações e vendas por dia ou por períodos específicos.  ',
    },
    {
        position: false,
        img: qrMenu,
        title: 'QRCode ',
        titleBlue: 'Menu',
        desc: 'Otimize a interação com o cliente e permita que ele visualize o cardápio de seu estabelecimento através de um QR Code utilizando a câmera do celular',
    },
    {
        position: true,
        img: pos,
        title: 'POS ',
        titleBlue: 'Móvel',
        desc: 'Toda a praticidade de um sistema Frente de Caixa PDV 100% móvel, possibilitando o seu fechamento de vendas de forma ágil e interativa, proporcionando a conclusão de vendas balcão ou delivery, reimpressão de pedidos, impressão de NFC-e muito mais!',
    },

]

function InfoSolution() {
    return (
        <div>
            {food.map((f) => {
                return (
                    <div key={f.title} className='flex flex-col items-center'>
                        {
                            f.position ? <div className='flex py-12 gap-40 justify-center items-center flex-wrap' key={f.title}>
                                <img loading="lazy" src={f.img} className='max-w-[290px] ' />
                                <div className='flex flex-col'>
                                    <h3 className='dark:text-vanilla text-[35px] mb-2 text-dark-blue font-poppins font-bold'>{f.title}<span className='text-primary-blue'>{f.titleBlue}</span></h3>
                                    <p className='dark:text-blueish-gray text-greish-blue text-[18px] leading-8 max-w-[500px]'>{f.desc}</p>
                                </div>
                            </div> : <div className='flex gap-36 py-12 justify-center items-center flex-wrap' key={f.title}>
                                <div className='flex flex-col text-end'>
                                    <h3 className='dark:text-vanilla text-[35px] mb-2 text-dark-blue font-poppins font-bold'>{f.title}<span className='text-primary-blue'>{f.titleBlue}</span></h3>
                                    <p className='dark:text-blueish-gray text-[18px] text-greish-blue leading-8 max-w-[500px]'>{f.desc}</p>
                                </div>
                                <img loading="lazy" src={f.img} className='max-w-[290px] ' />
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default InfoSolution