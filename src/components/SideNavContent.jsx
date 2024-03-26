import React from 'react';

function SideNavContent() {
  return (
    <div>
      <div className='fixed px-[25px] top-[70px] left-0 w-screen h-screen bg-white'>
        <nav>
          <ul className='list-none mt-[50px] w-full text-left'>
            <li className='py-2'><a href="./about">about</a></li>
            <li className='py-2'><a href="./work">work</a></li>
            <li className='py-2'><a href="./media">media diary</a></li>
            <li className='py-2'><a href="#resume">resume</a></li>
            <li className='py-2'><a href="#email">email</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideNavContent;

