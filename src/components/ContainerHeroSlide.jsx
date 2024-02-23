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
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
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
                {/* <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div> */}

            </Swiper>
        </div>
    )
}

export default ContainerHeroSlide