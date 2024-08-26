import Image from 'next/image';
import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';

const Expert = () => {
    return (
        <section className='max-w-[1320px] mx-auto mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>

                </div>
                <div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                            <p className='text-[#B68C5A] text-[16px] font-bold'>what we are expert at</p>
                        </div>
                        <div className='mt-[20px] '>
                            <h1 className='heading'>our case study</h1>
                        </div>
                    </div>
                    <p className='description mt-10 lato'>A case study showcases our firm’s expertise in resolving complex legal issues.
                        It highlights our strategic approach, personalized client care, and commitment
                        to delivering justice while protecting our clients rights.
                    </p>
                    <div className='mt-10'>
                        <button className='flex items-center gap-2 bg-white hover:bg-[#B68C5A] border border-[#B68C5A] text-black hover:text-white rounded-lg py-4 px-8'>
                            <p className='text-[18px] lato'>Read More</p>
                            {/* <Image src='/aero.jpg' height={20} width={20} alt='Blog Icon' /> */}
                            <ArrowRightOutlined />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Expert;