import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosStar } from "react-icons/io";


function ContainerFeedback() {
    return (
        <section className='w-full py-16 bg-light-background dark:bg-dark-background'>
            <div className='flex items-center justify-center flex-col mb-5 gap-3'>
                <h6 className='text-dark-blue font-semibold font-inter dark:text-primary-blue'>Feedback</h6>
                <h1 className='text-4xl font-poppins font-bold text-dark-blue mb-4 text-center dark:text-vanilla'>Depoimentos</h1>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-[80vw]'>
                    <Swiper
                    spaceBetween={15}
                    slidesPerView={4}
                    freeMode={true}
                    navigation={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    >
                    <SwiperSlide>
                        <div className='bg-white dark:bg-secondary-dark rounded-[40px] p-6 flex flex-col gap-2'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row'>
                                    <IoIosStar color='yellow' size={22} />
                                    <IoIosStar color='yellow' size={22} />
                                    <IoIosStar color='yellow' size={22} />
                                    <IoIosStar color='yellow' size={22} />
                                    <IoIosStar color='yellow' size={22} />
                                </div>
                                <span className='text-sm text-nowrap text-blueish-gray'>11 meses atrás</span>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-regular'>“Excelente atendimento e software muito completo. O suporte é altamente qualificado e ágil.”</p>
                                <span className='text-dark-blue font-medium mt-2'>- Josana T.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white dark:bg-secondary-dark rounded-[40px] p-6 flex flex-col gap-2'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row'>
                                    <IoIosStar color='yellow' size={22} />
                                    <IoIosStar color='yellow' size={22} />
                                    <IoIosStar color='yellow' size={22} />
                                    <IoIosStar color='yellow' size={22} />
                                    <IoIosStar color='yellow' size={22} />
                                </div>
                                <span className='text-sm text-nowrap text-blueish-gray'>11 meses atrás</span>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-regular'>“Excelente atendimento e software muito completo. O suporte é altamente qualificado e ágil.”</p>
                                <span className='text-dark-blue font-medium mt-2'>- Josana T.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className='bg-white dark:bg-secondary-dark rounded-[40px] p-6 flex flex-col gap-2'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row'>
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                            </div>
                            <span className='text-sm text-nowrap text-blueish-gray'>11 meses atrás</span>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-regular'>“Excelente atendimento e software muito completo. O suporte é altamente qualificado e ágil.”</p>
                            <span className='text-dark-blue font-medium mt-2'>- Josana T.</span>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='bg-white dark:bg-secondary-dark rounded-[40px] p-6 flex flex-col gap-2'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row'>
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                            </div>
                            <span className='text-sm text-nowrap text-blueish-gray'>11 meses atrás</span>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-regular'>“Excelente atendimento e software muito completo. O suporte é altamente qualificado e ágil.”</p>
                            <span className='text-dark-blue font-medium mt-2'>- Josana T.</span>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='bg-white dark:bg-secondary-dark rounded-[40px] p-6 flex flex-col gap-2'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row'>
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                                <IoIosStar color='yellow' size={22} />
                            </div>
                            <span className='text-sm text-nowrap text-blueish-gray'>11 meses atrás</span>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-regular'>“Excelente atendimento e software muito completo. O suporte é altamente qualificado e ágil.”</p>
                            <span className='text-dark-blue font-medium mt-2'>- Josana T.</span>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
        </section >
    )
}

export default ContainerFeedback