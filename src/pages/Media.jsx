import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import SideNavbar from '../components/SideNavbar'
import MediaContent from '../components/MediaContent'

function Media() {
  return (
    <div className='px-[25px] py-[25px]'>
      <div className='flex justify-between'>
        <div><Logo
          logo="chidalu ugwu"
        /></div>
        <div className=' md:hidden'><SideNavbar /></div>
      </div>

      <div className='flex'>
        <div className=' hidden md:block'><Navbar /></div>
        <MediaContent />
      </div>
    </div>
  )
}

export default Media
