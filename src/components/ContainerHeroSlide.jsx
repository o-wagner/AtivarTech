import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function ContainerHeroSlide() {
    return (
        <div id="home" className='w-full pt-[85px] flex align-items justify-center h-screen bg-light-background dark:bg-dark-background'>
            <Swiper
                className='w-[90vw] rounded-3xl flex items-center justify-center text-center bg-white h-[80vh]'
                style={{
                    '--swiper-navigation-color':'#4c1d95',
                    '--swiper-navigation-size':'30px',
                }}
                modules={[Pagination, Navigation, Scrollbar, A11y]}
                scrollbar={{ draggable: true }}
                navigation={true}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>


            </Swiper>
        </div>
    )
}

export default ContainerHeroSlide