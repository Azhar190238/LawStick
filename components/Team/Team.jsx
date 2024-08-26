"use client"

import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';
// import '/Learning-job/NEXT JS/lawstick/app/style'
// import './team'

// import required modules
import { EffectCoverflow, Thumbs, Autoplay } from 'swiper/modules';


const Team = () => {

    const gradientStyle = {
        background: 'linear-gradient(180deg, rgba(0, 66, 37, 0.80) 30.1%, rgba(34, 25, 25, 0.80) 50%)',
    };

    return (
        <section className='max-w-[1540px] mx-auto mb-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-2 justify-center'>
                    <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                    <p className='text-[#B68C5A] text-[16px] font-bold'>Our Team</p>
                </div>
                <div className='mt-[25px] '>
                    <h1 className='heading text-center'>the faces of justice</h1>
                </div>
            </div>
            <div className=''>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow , Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' >

                            </Image>

                            <div style={gradientStyle} className='relative w-72 -mt-[87px] ml-[7px] h-20 pl-5 '>
                                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' >

                            </Image>

                            <div style={gradientStyle} className='relative w-72 -mt-[87px] ml-[7px] h-20 pl-5 '>
                                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' >

                            </Image>

                            <div style={gradientStyle} className='relative w-72 -mt-[87px] ml-[7px] h-20 pl-5 '>
                                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' >

                            </Image>

                            <div style={gradientStyle} className='relative w-72 -mt-[87px] ml-[7px] h-20 pl-5 '>
                                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' >

                            </Image>

                            <div style={gradientStyle} className='relative w-72 -mt-[87px] ml-[7px] h-20 pl-5 '>
                                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </section>
    );
};


export default Team;