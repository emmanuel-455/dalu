import React from 'react'


function Navbar() {
  return (
    <div className='pr-28 border-r-[0px] '>
      <ul className=' h-screen'>
        <li className='py-2 text'><a href="">about</a></li>
        <li className='py-2 text'><a href="/work">works</a></li>
        <li className='py-2 text'><a href="/media">media diary</a></li>
        <li className='py-2 text'><a href="">resume</a></li>
        <li className='py-2 text'><a href="">email</a></li>
      </ul>
    </div>
  )
}

export default Navbar
