import React from 'react';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';
import Navbar from '../components/Navbar';
import WorkProjectImg from '../components/WorkProjectImg';
import CaseStudies from '../components/CaseStudies';
import casestudy from '../casestudy'; // Import casestudy data
import Footer from '../components/Footer';

function Work() {
  return (
    <div className='pl-[25px] relative h-full md:flex'>
      <div className='md:inline-block md:border-r py-5 md:w-[14rem] flex justify-between items-center'>
        <Logo logo="chidalu ugwu" />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden pr-[25px]'><SideNavbar /></div> 
      </div>
      <div className='pb-[100px] py-7 md:w-[50%] md:pt-[140px]  md:pl-[120px]'>
          <WorkProjectImg header="works" />
        <CaseStudies casestudy={casestudy} /> 
        
      </div>
      <div className='absolute bottom-0 left-[15%] md:left-[40%]  text-[#adadad]'>
          <Footer />
          </div>
    </div>
  );
}

export default Work;
