// // import Image from 'next/image';
// // import React from 'react';

// // const Hero2 = () => {
// //     return (
// //         <div
// //             className=" relative -top-24 bg-cover bg-center bg-no-repeat h-screen w-full flex items-center"
// //             style={{ backgroundImage: 'url(/bg-image.png)' }}
// //         >
// //             <div className='max-w-[1320px] mx-auto '>
// //                 <div className=''>              
// //                       <div className='border-2 border-[#B68C5A] text-left max-w-[250px] mb-10'>
// //                     <p className='text-[#021C1B] text-xl py-2 px-3'>championing Justice...</p>
// //                 </div>
// //                     <h1 className='text-[#021C1B] text-4xl md:text-6xl whitespace-pre font-bold mb-10'>
// //                         Defending your right <br />
// //                         Delivering justice.
// //                     </h1>
// //                     <p className='text-[#5B5353] text-[16px] font-normal mb-10'>
// //                         Committed to defending your rights and delivering justice with integrity,<br /> we work tirelessly to ensure your voice is heard
// //                     </p>
// //                     <div className='flex space-x-8'>
// //                         <button className="px-8 py-4 border-2 border-[#B68C5A] text-xl rounded-[4px] bg-[#B68C5A] text-white transition-colors duration-300">
// //                             Get Appointment
// //                         </button>
// //                         <button className="px-8 py-4 flex border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 group">
// //                             Learn more
// //                             <Image
// //                                 src='/Frame.svg'
// //                                 height={24}
// //                                 width={24}
// //                                 alt='arrow'
// //                                 className='ml-2 mt-1 transition-colors duration-300 group-hover:invert'
// //                             />
// //                         </button>
// //                     </div>
// //                     </div>
// //                     <div>

// //                     </div>
// //             </div>
// //         </div>
// //         // <div></div>
// //     );
// // };

// // export default Hero2;


// import Image from 'next/image';
// import React from 'react';

// const Hero2 = () => {
//     return (
//         <div
//             className="relative -top-24 bg-cover bg-center bg-no-repeat h-screen w-full flex items-center"
//             style={{ backgroundImage: 'url(/bg-image.png)' }}
//         >
//             <div className='w-full max-w-[1320px] pl-8 md:pl-16'>
//                 <div className='flex flex-col items-start'>
//                     <div className='border-2 border-[#B68C5A] text-left max-w-[250px] mb-10'>
//                         <p className='text-[#021C1B] text-xl py-2 px-3'>championing Justice...</p>
//                     </div>
//                     <h1 className='text-[#021C1B] text-4xl md:text-6xl whitespace-pre font-bold mb-10'>
//                         Defending your right <br />
//                         Delivering justice.
//                     </h1>
//                     <p className='text-[#5B5353] text-[16px] font-normal mb-10'>
//                         Committed to defending your rights and delivering justice with integrity,<br /> we work tirelessly to ensure your voice is heard
//                     </p>
//                     <div className='flex space-x-8'>
//                         <button className="px-8 py-4 border-2 border-[#B68C5A] text-xl rounded-[4px] bg-[#B68C5A] text-white transition-colors duration-300">
//                             Get Appointment
//                         </button>
//                         <button className="px-8 py-4 flex border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 group">
//                             Learn more
//                             <Image
//                                 src='/Frame.svg'
//                                 height={24}




import Image from 'next/image';
import React from 'react';

const Hero2 = () => {
    return (
        <div
            className="relative -top-24 bg-cover bg-center bg-no-repeat h-screen w-full bg-[#1C1C1F]"
            style={{ backgroundImage: 'url(/bg-image.png)' }}
        >

            <div className=''>
                    <div className=' max-w-[1320px] relative top-48 mx-auto w-50% '>
                        <div className=' text-left max-w-[250px] mb-10'>
                            <p className='border-2 border-dashed border-[#B68C5A] text-[#FFF] text-xl py-2 px-3'>championing Justice...</p>
                        </div>
                        <h1 className='text-[#FFF] text-4xl md:text-6xl whitespace-pre font-bold mb-10'>
                            Defending your right <br />
                            Delivering justice.
                        </h1>
                        <p className='text-gray-200 text-[16px] font-normal mb-10'>
                            Committed to defending your rights and delivering justice with integrity,<br /> we work tirelessly to ensure your voice is heard
                        </p>
                        <div className='flex space-x-8'>
                            <button className="px-8 py-4 border-2 border-[#B68C5A] text-xl rounded-[4px] bg-[#B68C5A] text-white transition-colors duration-300">
                                Get Appointment
                            </button>
                            <button className="px-8 py-4 flex border-2 border-[#B68C5A] text-[#fff] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 group">
                                Learn more
                                <Image
                                    src='/Frame.svg'
                                    height={24}
                                    width={24}
                                    alt='arrow'
                                    className='ml-2 mt-1 transition-colors duration-300 group-hover:invert'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Hero2;


