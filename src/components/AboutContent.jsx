import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';

function AboutContent(props) {
  return (
    <div className='px-[25px] md:flex'>
      <div className='md:inline-block py-5 md:w-[17rem] flex justify-between items-center'>
        <Logo logo="chidalu ugwu" />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden'><SideNavbar /></div> 
      </div>
      <div>
        <div className='md:mt-0 mt-7'>
          <h1 className="block md:hidden text-[20px] font-extrabold mb-2">
            {props.header}
          </h1>
      </div>
      </div>
      <div className='md:border-r md:border-l md:w-[68.2%] md:pt-[140px] h-screen '>
          <div className=' md:ml-20 md:mr-20'>
            <p className='mb-6 '>{props.abt}</p>
            <p>{props.reachout}</p>
          </div>
        </div>
    </div>
  );
}

export default AboutContent;

