import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import slide from '../assets/slide/slide.jpg'
import slide2 from '../assets/slide/slide2.jpg'
import slide3 from '../assets/slide/slide3.jpg'
import '../index.css'

function ContainerHeroSlide() {
    return (
        <div id="home" className='w-full pt-[65px] flex align-items justify-center h-screen bg-light-background dark:bg-dark-background'>
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
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                <SwiperSlide><img className='cover' src={slide2} alt="slideimage" /></SwiperSlide>
                <SwiperSlide><img className='cover' src={slide} alt="slideimage" /></SwiperSlide>
                <SwiperSlide><img className='cover' src={slide3} alt="slideimage" /></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default ContainerHeroSlide