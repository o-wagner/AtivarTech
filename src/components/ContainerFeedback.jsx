import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { IoIosStar } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { feedback } from '../arrays/feedback';

function ContainerFeedback() {
    return (
        <div id="feedback" className='w-full pt-16 pb-36 '>
            <div className='flex items-center justify-center flex-col mb-5 gap-3 '>
                <h6 className='text-blueish-gray font-semibold text-[12px] uppercase tracking-widest dark:text-primary-blue font-inter'>Feedback</h6>
                <h1 className='text-4xl font-poppins font-bold text-dark-blue mb-4 text-center dark:text-vanilla'>Depoimentos</h1>
            </div>
            <div className='flex items-center justify-center '>
                <div className='w-[80vw] flex items-center max-w-[1100px] overflow-hidden justify-center'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        centeredSlides={true}
                        pagination={true}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                        modules={[Pagination, Navigation, Autoplay]}>
                        {feedback.map((f) => {
                            return (
                                <SwiperSlide key={f.autor} className='h-[15rem] w-full '>
                                    <div
                                        className='bg-white cursor-grab dark:bg-tertiary-dark shadow-xl border-slate-300 border dark:border-slate-700
                                         rounded-[50px] h-[12rem] justify-start p-7 flex flex-col overflow-hidden gap-2 max-w-[340px]'>
                                        {/*STARS*/}  <div className='flex flex-row justify-between'>
                                            <div className='flex flex-row'>
                                                <IoIosStar color='yellow' size={20} />
                                                <IoIosStar color='yellow' size={20} />
                                                <IoIosStar color='yellow' size={20} />
                                                <IoIosStar color='yellow' size={20} />
                                                <IoIosStar color='yellow' size={20} />
                                            </div>
                                            <span className='text-sm text-nowrap text-blueish-gray font-light'>{f.date}</span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='font-regular dark:text-vanilla text-sm'>{f.comment}</p>
                                            <span className='text-dark-blue dark:text-primary-blue absolute bottom-[70px] font-medium text-sm mt-2'>{f.autor}</span>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default ContainerFeedback