import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';
import MediaContent from '../components/MediaContent';
import Footer from '../components/Footer';

function Media(props) {
  
  return (
    <div className='px-[25px] relative md:h-full h-screen md:flex'>
      <div className='md:inline-block py-5 md:border-r md:w-[14rem] flex justify-between items-center'>
        <Logo logo="chidalu ugwu" />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden'><SideNavbar /></div> 
      </div>
      <MediaContent
        lastPlayed={props.lastPlayed}
      />
      <div className='absolute bottom-0 left-[15%] md:left-[40%]  text-[#adadad]'>
        <Footer />
      </div>
    </div>
  );
}

export default Media;
