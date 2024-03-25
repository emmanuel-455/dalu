import React from 'react';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';
import Navbar from '../components/Navbar';
import WorkProjectImg from '../components/WorkProjectImg';
import CaseStudies from '../components/CaseStudies';
import casestudy from '../casestudy'; // Import casestudy data

function Work() {
  return (
    <div className='px-[25px] md:flex'>
      <div className='md:inline-block py-5 md:w-[17rem] flex justify-between items-center'>
        <Logo logo="chidalu ugwu" />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden'><SideNavbar /></div> 
      </div>
      <div className=' md:border-r py-7 md:border-l md:pt-[140px]  md:pr-[60px]'>
          <WorkProjectImg header="works" />
          <CaseStudies casestudy={casestudy} /> {/* Pass casestudy data */}
        </div>
    </div>
  );
}

export default Work;
