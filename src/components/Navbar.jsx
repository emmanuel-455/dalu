import React from 'react';

function Navbar() {
  return (
    <div className='pr-[6rem] border-r'>
      <ul className='h-screen'>
        <li className='py-[px] mb-[10px] text-[15px] hover:font-extrabold hover:border-b-[3px] w-[50px] border-black'><a href="./">about</a></li>
        <li className='py-[px] mb-[10px] text-[15px] hover:font-extrabold hover:border-b-[3px] w-[50px] border-black'><a href="/work">works</a></li>
        <li className='py-[px] mb-[10px] text-[15px] hover:font-extrabold hover:border-b-[3px] border-black text-nowrap'><a href="/media">media diary</a></li>
        <li className='py-[px] mb-[10px] text-[15px] hover:font-extrabold hover:border-b-[3px] w-[60px] border-black'><button type="button">resume</button></li>
        <li className='py-[px] mb-[10px] text-[15px] hover:font-extrabold hover:border-b-[3px] w-[50px] border-black'><button type="button">email</button></li>
      </ul>
    </div>
  )
}

export default Navbar;
