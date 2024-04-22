import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import AboutContent from '../components/AboutContent';
import SideNavbar from '../components/SideNavbar';
import Footer from '../components/Footer';

function About() {
  // Disable scrolling
  //document.body.style.overflow = 'hidden';

  return (
    <>
    <div className='pl-[25px] md:flex'>
      <div className='md:inline-block py-5 md:border-r md:w-[14rem] flex justify-between items-center'>
        <Logo logo="chidalu ugwu" />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden pr-[25px]'><SideNavbar /></div> 
      </div>
        <div className='md:pl-[120px]  md:w-[800px] md:pt-[140px]'>
          <div className='h-screen'><AboutContent header="about" /></div>
          <div className='bottom-0 left-[15%] md:left-[40%] text-[#adadad]'>
        <Footer />
      </div>
        </div>
      </div>
      
    </>
    
  );
}

export default About;
