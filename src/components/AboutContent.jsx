import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';

function AboutContent(props) {
  return (
    <div className='px-[35px] md:flex'>
      <div className='md:inline-block py-5 md:w-[17rem] flex justify-between items-center'>
        <Logo logo="chidalu ugwu" />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden'><SideNavbar /></div> 
      </div>
      <div className='md:border-r md:w-[60%] md:pt-[140px] md:border-l'>
        <div className='md:px-[60px]'>
        <div className='mt-7'>
          <h1 className=" text-[20px] font-bold md:hidden">
            {props.header}
          </h1>
        </div>
        <div className="">
            <p className='text-[15px]'>{props.abt}</p>
            <p className='mt-5'>{props.reachout}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;

