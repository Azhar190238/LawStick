// import Image from 'next/image';
// import React from 'react';

// import { ArrowRightOutlined } from '@ant-design/icons';
// // import { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// // import './styles.css';
// import './style.css'

// // import required modules
// import { EffectCards } from 'swiper/modules';

// const Expert = () => {
//     return (
//         <section className='max-w-[1320px] mx-auto mb-20'>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
//                 <div>
                  
//                         <Swiper
//                             effect={'cards'}
//                             grabCursor={true}
//                             modules={[EffectCards]}
//                             className="mySwiper"
//                         >
//                             <SwiperSlide>Slide 1</SwiperSlide>
//                             <SwiperSlide>Slide 2</SwiperSlide>
//                             <SwiperSlide>Slide 3</SwiperSlide>
//                             <SwiperSlide>Slide 4</SwiperSlide>
//                             <SwiperSlide>Slide 5</SwiperSlide>
//                             <SwiperSlide>Slide 6</SwiperSlide>
//                             <SwiperSlide>Slide 7</SwiperSlide>
//                             <SwiperSlide>Slide 8</SwiperSlide>
//                             <SwiperSlide>Slide 9</SwiperSlide>
//                         </Swiper>
                    
//                 </div>
//                 <div>
//                     <div className='flex flex-col'>
//                         <div className='flex gap-2'>
//                             <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
//                             <p className='text-[#B68C5A] text-[16px] font-bold'>what we are expert at</p>
//                         </div>
//                         <div className='mt-[20px] '>
//                             <h1 className='heading'>our case study</h1>
//                         </div>
//                     </div>
//                     <p className='description mt-10 lato'>A case study showcases our firm’s expertise in resolving complex legal issues.
//                         It highlights our strategic approach, personalized client care, and commitment
//                         to delivering justice while protecting our clients rights.
//                     </p>
//                     <div className='mt-10'>
//                         <button className='flex items-center gap-2 bg-white hover:bg-[#B68C5A] border border-[#B68C5A] text-black hover:text-white rounded-lg py-4 px-8'>
//                             <p className='text-[18px] lato'>Read More</p>
//                             {/* <Image src='/aero.jpg' height={20} width={20} alt='Blog Icon' /> */}
//                             <ArrowRightOutlined />
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Expert;



// // import React, { useRef, useState } from 'react';
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/effect-cards';

// // import './styles.css';

// // // import required modules
// // import { EffectCards } from 'swiper/modules';

// // export default function App() {
// //     return (
// //         <>
// //             <Swiper
// //                 effect={'cards'}
// //                 grabCursor={true}
// //                 modules={[EffectCards]}
// //                 className="mySwiper"
// //             >
// //                 <SwiperSlide>Slide 1</SwiperSlide>
// //                 <SwiperSlide>Slide 2</SwiperSlide>
// //                 <SwiperSlide>Slide 3</SwiperSlide>
// //                 <SwiperSlide>Slide 4</SwiperSlide>
// //                 <SwiperSlide>Slide 5</SwiperSlide>
// //                 <SwiperSlide>Slide 6</SwiperSlide>
// //                 <SwiperSlide>Slide 7</SwiperSlide>
// //                 <SwiperSlide>Slide 8</SwiperSlide>
// //                 <SwiperSlide>Slide 9</SwiperSlide>
// //             </Swiper>
// //         </>
// //     );
// // }



// import Image from 'next/image';
// import React from 'react';
// import { ArrowRightOutlined } from '@ant-design/icons';
// import dynamic from 'next/dynamic';

// // Dynamically import Swiper components to avoid SSR issues
// const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import { EffectCards } from 'swiper/modules';

// const Expert = () => {
//     return (
//         <section className='max-w-[1320px] mx-auto mb-20'>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
//                 <div>
//                     <Swiper
//                         effect={'cards'}
//                         grabCursor={true}
//                         modules={[EffectCards]}
//                         className="mySwiper"
//                     >
//                         <SwiperSlide>Slide 1</SwiperSlide>
//                         <SwiperSlide>Slide 2</SwiperSlide>
//                         <SwiperSlide>Slide 3</SwiperSlide>
//                         <SwiperSlide>Slide 4</SwiperSlide>
//                         <SwiperSlide>Slide 5</SwiperSlide>
//                         <SwiperSlide>Slide 6</SwiperSlide>
//                         <SwiperSlide>Slide 7</SwiperSlide>
//                         <SwiperSlide>Slide 8</SwiperSlide>
//                         <SwiperSlide>Slide 9</SwiperSlide>
//                     </Swiper>
//                 </div>
//                 <div>
//                     <div className='flex flex-col'>
//                         <div className='flex gap-2'>
//                             <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
//                             <p className='text-[#B68C5A] text-[16px] font-bold'>What we are expert at</p>
//                         </div>
//                         <div className='mt-[20px] '>
//                             <h1 className='heading'>Our Case Study</h1>
//                         </div>
//                     </div>
//                     <p className='description mt-10 lato'>
//                         A case study showcases our firm’s expertise in resolving complex legal issues.
//                         It highlights our strategic approach, personalized client care, and commitment
//                         to delivering justice while protecting our clients' rights.
//                     </p>
//                     <div className='mt-10'>
//                         <button className='flex items-center gap-2 bg-white hover:bg-[#B68C5A] border border-[#B68C5A] text-black hover:text-white rounded-lg py-4 px-8'>
//                             <p className='text-[18px] lato'>Read More</p>
//                             <ArrowRightOutlined />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Expert;

import Image from 'next/image';

import { ArrowRightOutlined } from '@ant-design/icons';




const Expert = () => {
    return (
        <section className='max-w-[1230px] mx-auto mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='!h-[700px] !w-[400px]'>

                </div>
                <div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                            <p className='text-[#B68C5A] text-[16px] font-bold'>What we are expert at</p>
                        </div>
                        <div className='mt-[20px] '>
                            <h1 className='heading'>Our Case Study</h1>
                        </div>
                    </div>
                    <p className='description mt-10 lato'>
                        A case study showcases our firm’s expertise in resolving complex legal issues.
                        It highlights our strategic approach, personalized client care, and commitment
                        to delivering justice while protecting our clients' rights.
                    </p>
                    <div className='mt-10'>
                        <button className='flex items-center gap-2 bg-white hover:bg-[#B68C5A] border border-[#B68C5A] text-black hover:text-white rounded-lg py-4 px-8'>
                            <p className='text-[18px] lato'>Read More</p>
                            <ArrowRightOutlined />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;
