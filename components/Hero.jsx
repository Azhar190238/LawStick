
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[#F9F6EE] mx-auto lg:overflow-hidden'>
            <div className='max-w-[1230px] mx-auto'>
                <div className='flex flex-col lg:flex-row space-x-10 lg:space-x-40 mx-auto'>
                    <div className='relative'>
                        <div className='border-2 border-[#B68C5A] max-w-[250px] mt-[102px] mb-10'>
                            <p className='text-[#021C1B] text-xl py-2 px-3'>championing Justice...</p>
                        </div>
                        <h1 className='text-[#021C1B] text-4xl md:text-6xl whitespace-pre font-bold mb-10'>
                            Defending your right <br />
                            Delivering justice.
                        </h1>
                        <p className='text-[#5B5353] text-[16px] font-normal mb-10'>
                            Committed to defending your rights and delivering justice with integrity,<br /> we work tirelessly to ensure your voice is heard
                        </p>
                        <div className='flex space-x-8'>
                            <button className="px-8 py-4 border-2 border-[#B68C5A] text-xl rounded-[4px] bg-[#B68C5A]text-white transition-colors duration-300">
                                Get Appointment
                            </button>


                            <button className="px-8 py-4 flex border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 group">
                                learn more
                                <Image
                                    src='/Frame.svg'
                                    height={24}
                                    width={24}
                                    alt='arrow'
                                    className='ml-2 mt-1 transition-colors duration-300 group-hover:invert'
                                />
                            </button>


                        </div>
                        <div>
                            <Image src='/h2.png' height={100} width={100} alt='hero2' className='absolute top-12 -left-36'></Image>
                            <Image src='/h1.png' height={100} width={100} alt='hero1' className='absolute bottom-20 -left-36'></Image>
                        </div>
                    </div>
                    <div className='flex justify-center mt-16'>
                        <Image
                            src='/photo.png'
                            height={650}
                            width={650}
                            alt='photo'
                            className='lg:absolute lg:max-w-none lg:translate-x-1/2'

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
