import Image from 'next/image';
import React from 'react';

const OnlineBooking = () => {
    return (
        <section className='max-w-[1320px] mx-auto my-20'>
            <h4 className='section-heading2 text-center'>online booking</h4>
            <h1 className='mt-6 section-title2 text-center'>Schedule Your Consultation Today</h1>
            <p className='mt-10 text-center section-description2 w-full lg:w-1/2 mx-auto '> Take the first step toward resolving your legal issue. Book a free consultation with
                our expert team today, and get the personalized advice and guidance you need
            </p>
            <div className='flex flex-col md:flex-row mt-14 justify-between'>
                <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A]'>
                    <div className='py-14 pl-10 '>
                        <Image className='' src='/personIcon.png' width={56} height={56} alt='image' />
                    </div>
                    <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'>
                        <br />
                    </div>
                    <div className='col-span-2 py-14 pr-16'>
                        <p className='lato text-[16px] font-normal'>Book Fee </p>
                        <h2 className='mt-4 text-[24px] font-bold lato'>Appointment</h2>
                    </div>

                </div>
                <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] '>
                    <div className='py-14 pl-10'>
                        <Image src='/pay.png' width={56} height={56} alt='image' />

                    </div>
                    <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'>
                        <br />
                    </div>
                    <div className='col-span-2 py-14 pr-16'>
                        <p className='lato text-[16px] font-normal'>Book Fee </p>
                        <h2 className='mt-4 text-[24px] font-bold lato'>Appointment</h2>
                    </div>

                </div>
                <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] transition-colors duration-300 group'>
                    <div className='py-14 pl-10'>
                        <Image className='' src='/hand.png' width={56} height={56} alt='image' />

                    </div>
                    <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'>
                        <br />
                    </div>
                    <div className='col-span-2 py-14 pr-16'>
                        <p className='lato text-[16px] font-normal'>Book Fee </p>
                        <h2 className='mt-4 text-[24px] font-bold lato'>Appointment</h2>
                    </div>

                </div>
            </div>

        </section>
    );
};


export default OnlineBooking;