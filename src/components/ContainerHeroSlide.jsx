import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function ContainerHeroSlide() {
    return (
        <div id="home" className='w-full animate-fade-in pt-[85px] flex align-items justify-center h-screen bg-light-background dark:bg-dark-background'>
            <Swiper
                className='w-[90vw] rounded-3xl flex items-center justify-center text-center bg-white h-[80vh]'
                style={{
                    '--swiper-navigation-color':'black',
                    '--swiper-navigation-size':'30px',
                }}
                modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
                scrollbar={{ draggable: true }}
                autoplay={{delay: 2500, disableOnInteraction:true}}
                loop={true}
                navigation={true}
            >
                <SwiperSlide className='bg-slate-500'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-slate-300'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-slate-400'>Slide 3</SwiperSlide>


            </Swiper>
        </div>
    )
}

export default ContainerHeroSlide