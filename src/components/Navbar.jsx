import React from 'react'


function Navbar() {
  return (
    <div className='pr-28 border-r-[0px] '>
      <ul className=' h-screen'>
        <li className='py-2 text hover:font-extrabold hover:border-b-[3px] mb-1 w-[50px] border-black'><a href="">about</a></li>
        <li className='py-2 text hover:font-extrabold hover:border-b-[3px] mb-1 w-[50px] border-black'><a href="/work">works</a></li>
        <li className='py-2 text hover:font-extrabold hover:border-b-[3px] mb-1 border-black'><a href="/media">media diary</a></li>
        <li className='py-2 text hover:font-extrabold hover:border-b-[3px] mb-1 w-[60px] border-black'><a href="">resume</a></li>
        <li className='py-2 text hover:font-extrabold hover:border-b-[3px] mb-1 w-[50px] border-black'><a href="">email</a></li>
      </ul>
    </div>
  )
}

export default Navbar
