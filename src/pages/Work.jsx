import React from 'react';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';
import Navbar from '../components/Navbar';
import WorkProjectImg from '../components/WorkProjectImg';
import CaseStudies from '../components/CaseStudies';
import casestudy from '../casestudy';
import Footer from '../components/Footer';

function Work() {
  return (
    <>
      <div className='pl-[25px] md:flex'>
      <div className='md:inline-block md:border-r py-5 md:w-[14rem] flex justify-between items-center'>
        <Logo />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden pr-[25px]'><SideNavbar /></div> 
      </div>
      <div className=' md:w-[50%] md:pt-[140px] md:pl-[120px]'>
          <div className='py-5 pb-[100px]'>
          <WorkProjectImg header="works" />
        <CaseStudies casestudy={casestudy} /> 
          </div>
        <div className='text-[#adadad]'>
          <Footer />
      </div>
      </div>
      
      
      </div>
      
    </>
    
  );
}

export default Work;
