import React from 'react'
import MediaBody from '../components/MediaBody'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import SideNavbar from '../components/SideNavbar'


function Media() {
  return (
    <div className='px-[30px] py-[25px]'>
      <div className='flex  justify-between'>
        <div><Logo
          logo="chidalu ugwu"
        /></div>
        <div className=' md:hidden'><SideNavbar /></div>
      </div>

      <div className='flex'>
        <div className='border-r-2 hidden md:block'><Navbar /></div>
        <MediaBody /></div>
    </div>
  )
}

export default Media
