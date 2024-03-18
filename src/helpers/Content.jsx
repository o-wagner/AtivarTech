import { PrismicImage, PrismicRichText, PrismicText, useAllPrismicDocumentsByType } from '@prismicio/react'
import { ChevronRight } from 'lucide-react';
import React from 'react'

function Content() {
    const [page, { state }] = useAllPrismicDocumentsByType('content');
    return (
        <div>
            {state === "loading" ?(
                <p className='dark:text-vanilla text-primary-blue'>Carregando Conteúdo...</p>) :
                (page &&
                    <div>
                        {page.map((p) => {
                            <div key={p.id} className='dark:bg-quaternary-dark px-4 py-4 border-slate-300 duration-200 transition-transform hover:-translate-y-1 border dark:border-slate-900 bg-white rounded-xl dark:hover:bg-secondary-dark flex flex-col drop-shadow-lg hover:drop-shadow-xl gap-3 justify-start'>
                                <PrismicImage className='rounded-xl' field={p.data.post_thumb} />
                                <h2 className='font-inter text-md font-semibold text-dark-blue dark:text-vanilla'>
                                    <PrismicText field={p.data.post_title} /></h2>
                                <span className='text-blueish-gray text-sm font-inter'>
                                    <PrismicRichText field={p.data.post_desc} /></span>
                                <div className='flex flex-row items-center justify-end text-sm gap-1 font-inter text-dark-blue dark:text-vanilla'>
                                    <p>Ver Mais</p>
                                    <ChevronRight className='translate-y-[1.8px] ' size={16} />
                                </div>
                            </div>
                        })}

                    </div>
                )}
        </div>
    )
}
export default Content
