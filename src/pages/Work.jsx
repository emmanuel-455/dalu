import React from 'react';
import Logo from '../components/Logo';
import SideNavbar from '../components/SideNavbar';
import Navbar from '../components/Navbar';
import WorkProjectImg from '../components/WorkProjectImg';
import CaseStudies from '../components/CaseStudies';
import casestudy from '../casestudy'; // Import casestudy data

function Work() {
  return (
    <div className='pl-[25px] pr-[6px] py-[25px]'>
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
        <div className=' md:border-r md:pr-14'>
          <WorkProjectImg header="works" />
          <CaseStudies casestudy={casestudy} /> {/* Pass casestudy data */}
        </div>
      </div>
    </div>
  );
}

export default Work;
