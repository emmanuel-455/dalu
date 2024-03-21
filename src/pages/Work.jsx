import React from 'react'
import Logo from '../components/Logo'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'


function Work() {
  return (
    <div className='px-[30px] py-[25px]'>
      <div className='flex justify-between'>
      <div><Logo /></div>
        <div className='block md:hidden'><SideNavbar /></div>
      </div>

      <div className='flex'>
        <div className='w-[25%] hidden md:block '><Navbar /></div>
        <h1>hello</h1></div>
    </div>
  
  )
}

export default Work
