import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNavbar';
import Logo from '../components/Logo';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';

function Home() {
  
  return (
    <div className=''>
      <div className='px-[25px] md:flex'>
        <div className='md:inline-block py-5 md:w-[14rem] flex justify-between md:border-r items-center'>
          <Logo />
          <div className='hidden md:block'><Navbar /></div>
          <div className='md:hidden'><SideNavbar /></div> 
        </div>
        <div className='pt-10 md:pt-[140px] md:pl-[120px]'>
          <div className='h-screen'>
          <HomeContent />
          </div>
          <div className='bottom-0 left-[15%] md:left-[40%]  text-[#adadad]'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
