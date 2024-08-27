// import Navbar from '@/components/Navbar';
// import FaceJustice from '@/components/FaceJustice/FaceJustice';
import CaseStudy from '@/components/CaseStudy';
import FaceJustice from '@/components/FaceJustice/FaceJustice';
import Hero2 from '@/components/Hero2';
import Home2AboutUs from '@/components/Home2AboutUs';
import OurMission from '@/components/OurMission';
import OurServices from '@/components/OurServices';
import Statistics from '@/components/Statistics';
import React from 'react';

const page = () => {
    return (
       <div>
             <Hero2></Hero2>
             <Statistics></Statistics>
             <OurMission></OurMission>
             <OurServices></OurServices> 
             <Home2AboutUs></Home2AboutUs>
             <FaceJustice></FaceJustice>
             <CaseStudy></CaseStudy>
     
        </div>
    );
};

export default page;