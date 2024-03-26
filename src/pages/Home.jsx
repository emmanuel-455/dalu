import React from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import Logo from '../components/Logo'
import HomeContent from '../components/HomeContent'
import FirstPage from '../components/FirstPage'

function Home() {
  return (
    <div>
      <FirstPage />
      <div className='px-[25px] w-full md:flex'>
      <div className='md:inline-block py-5 md:w-[17rem] flex justify-between items-center'>
        <Logo logo="chidalu ugwu" />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden'><SideNavbar /></div> 
      </div>
      <HomeContent />
    </div>
    </div>
  )
}

export default Home
