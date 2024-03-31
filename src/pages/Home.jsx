import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNavbar';
import Logo from '../components/Logo';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className=''>
      <div className='px-[25px] md:flex'>
        <div className='md:inline-block py-5 md:w-[14rem] flex justify-between md:border-r items-center'>
          <Logo logo="chidalu ugwu" />
          <div className='hidden md:block'><Navbar /></div>
          <div className='md:hidden'><SideNavbar /></div> 
        </div>
        <div>
          <HomeContent />
          <div className='absolute bottom-0 left-[15%] md:left-[40%]  text-[#adadad]'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
