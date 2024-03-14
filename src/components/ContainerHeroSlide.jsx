import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../index.css'
import { PrismicImage, usePrismicDocumentByUID} from '@prismicio/react';

function ContainerHeroSlide() {

    const [page, { state }] = usePrismicDocumentByUID('carousel', 'slideimgs');

    return (
        <div id="home" className='w-full pt-[65px] flex align-items justify-center h-screen bg-light-background dark:bg-dark-background'>
            {state === 'loading' ? (
                <p className='text-white text-center flex justify-center items-center'>Loading...</p>
            ) : (page &&
                <Swiper
                    className='w-[90vw] rounded-md flex items-center justify-center text-center h-[80vh]'
                    style={{
                        '--swiper-navigation-sides-offset': '20px',
                        '--swiper-navigation-size': '30px',
                        '--swiper-pagination-color': '#18A2DE',
                    }}
                    modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
                    pagination={{
                        type: 'progressbar',
                    }}
                    grabCursor={true}
                    autoplay={{ delay: 4000, }}

                    loop={true}
                    // navigation={true}
                >
                    <SwiperSlide><PrismicImage field={page.data.img1} /></SwiperSlide>
                    <SwiperSlide><PrismicImage field={page.data.img2} /></SwiperSlide>
                    <SwiperSlide><PrismicImage field={page.data.img3} /></SwiperSlide>

                </Swiper>
            )}
        </div>
    )
}

export default ContainerHeroSlide