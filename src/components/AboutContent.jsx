import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';

function AboutContent(props) {
  return (
    <div className='px-[25px] py-[25px]'>
      <div className='flex justify-between'>
        <div>
          <Logo logo="chidalu ugwu" />
        </div>
        <div className='md:hidden'>
          <SideNavbar />
        </div>
      </div>

      <div className='flex'>
        <div className='hidden md:block'>
          <Navbar />
        </div>
        <div className='md:w-[68.2%] h-screen border-r'>
          <h1 className="block md:hidden text-[20px] font-extrabold mb-2">
            {props.header}
          </h1>
          <div className=' md:ml-20 md:mr-20'>
            <p className='mb-6 '>{props.abt}</p>
            <p>{props.reachout}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;

