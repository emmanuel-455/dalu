import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';
import MediaContent from '../components/MediaContent';

function Media() {
  return (
    <div className='px-[25px] md:flex'>
      <div className='md:inline-block py-5 md:w-[17rem] flex justify-between items-center'>
        <Logo logo="chidalu ugwu" />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden'><SideNavbar /></div> 
      </div>
      <MediaContent />
    </div>
  );
}

export default Media;

