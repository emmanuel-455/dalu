import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';
import MediaContent from '../components/MediaContent';
import Footer from '../components/Footer';

function Media(props) {
  //document.body.style.overflow = 'hidden';
  return (
    <>
      <div className='px-[25px] md:flex'>
        {/* Sidebar */}
        <div className='md:inline-block py-5 md:border-r md:w-[14rem] flex justify-between items-center'>
          <Logo />
          <div className='hidden md:block'><Navbar /></div>
          <div className='md:hidden'><SideNavbar /></div> 
        </div>
        
        {/* Main Content */}
        <div className='md:pl-[120px] md:pt-[100px] md:w-[700px]'>
          <div className='h-screen'>
            {/* Media Content */}
            <MediaContent
              lastPlayed={props.lastPlayed}
            />
          </div>
          
          {/* Footer */}
          <div className='text-[#adadad]'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Media;
