import React from 'react'
import atendimento from '../assets/food/atendimento.png'
import cardapio from '../assets/food/cardapio.png'
import gestao from '../assets/food/gestao.png'
import pos from '../assets/food/pos.png'
import qrMenu from '../assets/food/qrMenu.png'
import NFC from '../assets/retail/NFC.png'
import lock from '../assets/lock.svg'
import relatorio from '../assets/retail/relatorio.png'
import comp from '../assets/retail/comp.png'
import vendas from '../assets/retail/vendas.png'
import monitor from '../assets/retail/monitor.png'


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
        title: 'PDV + KDS +',
        titleBlue: ' Integração de Pedidos',
        desc: 'A melhor tecnologia em software para frente de Caixa PDV, com o diferencial de poder finalizar suas vendas e emitir o cupom fiscal do cliente mesmo offline. Receba seus pedidos de delivery direatamente no sistema através de integrações com marketplaces como Ifood, Rappi e outros. Além da otimização dos processos com o módulo KDS, no qual você envia os pedidos diretamente para um display em sua cozinha.  ',
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
const varejo = [
    {
        position: true,
        img: NFC,
        title: 'Documentos ',
        titleBlue: 'Fiscais',
        desc: 'Tudo em um só sistema. Emita diversos documentos fiscais (NF-e, NFC-e, CT-e, MDF-e) e gere as obrigações acessórias (Sintegra, Sped Fiscal e Contribuições). Contamos com o MD-e, que recebe automaticamente as Notas emitidas contra o seu CNPJ.',
    },
    {
        position: false,
        img: atendimento,
        title: 'Gerenciador de',
        titleBlue: ' Entregas',
        desc: 'Não perca tempo tentando organizar suas entregas em papel ou planilhas, nosso módulo de vendas para entrega futura, permite fazer uma enda e agendar a entrega de forma organizada',
    },
    {
        position: true,
        img: vendas,
        title: 'App Força de vendas ',
        titleBlue: '(vendas externas)',
        desc: 'Nosso Força de vendas é a solução ideal para seus vendedores realizarem as vendas externas com agilidade direto no seu celular ou tablet. Realize pedidos offline, gerencie estoque, rotas, relatórios, saldo flex, gestão de clientes e muito mais.',
    },
    {
        position: false,
        img: comp,
        title: 'App Eagle Analytics',
        titleBlue: ' (Indicadores)',
        desc: 'Acompanhe em tempo real tudo da sua empresa diretamente na tela do seu celular, de onde estiver. Saiba os pontos estratégicos do seu negócio através de indicadores, direcionando a sua atenção ao que realmente importa.',
    },
    {
        position: true,
        img: relatorio,
        title: 'Relatórios ',
        titleBlue: '',
        desc: 'Conte com um módulo completo com mais de 300 relatórios para acompanhar a gestão da sua empresa. Os relatórios são separados por categoria, contando com vários filtros para simplificar na busca de dados, além de permitir exportar para diversos formatos, como Excel e PDF.',
    },

]

function InfoSolution(props) {
    return (
        <div>
            {props.segmento === "food" && <>
                {food.map((f) => {
                    return (
                        <div key={f.title} className='flex flex-col items-center'>
                            {
                                f.position ? <div className='flex lg:gap-20 gap-10 py-10 justify-center items-center flex-wrap lg:flex-nowrap' key={f.title}>
                                    <img loading="lazy" src={f.img} className='lg:max-w-[290px] lg:max-h-[290px] md:max-h-[230px] md:max-w-[230px] max-h-[200px] max-w-[250px]'/>
                                    <div className='flex flex-col lg:text-start md:text-start text-center'>
                                        <h3 className='dark:text-vanilla lg:text-start leading-10 md:text-start text-center lg:text-[35px] text-[25px] mb-2 text-dark-blue font-poppins font-bold'>{f.title}<span className='text-primary-blue'>{f.titleBlue}</span></h3>
                                        <p className='font-inter dark:text-blueish-gray text-greish-blue lg:text-[16px] text-[14px] leading-6 max-w-[530px]'>{f.desc}</p>
                                    </div>
                                </div> : <div className='flex lg:gap-20 gap-10 py-10 justify-center items-center flex-wrap-reverse lg:flex-nowrap' key={f.title}>
                                    <div className='flex flex-col lg:text-end md:text-end text-center'>
                                        <h3 className='dark:text-vanilla lg:text-[35px] leading-10 text-[25px] mb-2 text-dark-blue font-poppins font-bold'>{f.title}<span className='text-primary-blue'>{f.titleBlue}</span></h3>
                                        <p className='font-inter dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue leading-6 max-w-[540px]'>{f.desc}</p>
                                    </div>
                                    <img loading="lazy" src={f.img} className='lg:max-w-[290px] lg:max-h-[290px] md:max-h-[230px] md:max-w-[220px] max-h-[200px] max-w-[250px]' />
                                </div>
                            }
                        </div>
                    )
                })}</>
            }
            {props.segmento === "varejo" && <>
                {varejo.map((v) => {
                    return (
                        <div key={v.title} className='flex flex-col items-center'>
                            {
                                v.position ? <div className='flex lg:gap-20 gap-10 py-10 justify-center items-center flex-wrap lg:flex-nowrap' key={v.title}>
                                    <img loading="lazy" src={v.img}  className='lg:max-w-[290px] lg:max-h-[290px] md:max-h-[230px] md:max-w-[230px] max-h-[200px] max-w-[250px]' />
                                    <div className='flex flex-col lg:text-start md:text-start text-center'>
                                        <h3 className='dark:text-vanilla lg:text-[35px] leading-10 text-[25px] mb-2 text-dark-blue font-poppins font-bold'>{v.title}<span className='text-primary-blue'>{v.titleBlue}</span></h3>
                                        <p className='font-inter dark:text-blueish-gray text-greish-blue lg:text-[16px] text-[14px] leading-6 max-w-[600px]'>{v.desc}</p>
                                    </div>
                                </div> : <div className='flex lg:gap-20 gap-10 py-10 justify-center items-center flex-wrap-reverse lg:flex-nowrap' key={v.title}>
                                    <div className='flex flex-col lg:text-end md:text-end text-center'>
                                        <h3 className='dark:text-vanilla lg:text-[35px] leading-10 text-[25px] mb-2 text-dark-blue font-poppins font-bold'>{v.title}<span className='text-primary-blue'>{v.titleBlue}</span></h3>
                                        <p className='font-inter dark:text-blueish-gray lg:text-[16px] text-[14px] text-greish-blue leading-6 max-w-[600px]'>{v.desc}</p>
                                    </div>
                                    <img loading="lazy" src={v.img}  className=' lg:max-w-[290px] lg:max-h-[290px] md:max-h-[230px] md:max-w-[230px] max-h-[200px] max-w-[250px]' />
                                </div>
                            }
                        </div>
                    )
                })}</>
            }
        </div>
    )
}

export default InfoSolution