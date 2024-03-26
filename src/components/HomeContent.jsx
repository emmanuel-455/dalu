import React from 'react';
import view from "../asset/viewplay.png"

function HomeContent() {
  return (
    <div>
      <div className='md:pt-[140px] h-full md:pl-[140px] md:border-l md:border-r md:pr-[120px] md:mt-0 mt-[50px]'>
        <div className='md:w-[500px]'>
        <h1 className='text-[15px] font-extrabold'>Creative Designer</h1>
        <div className='mt-4 text-[15px]'>
          <p>Find me on</p>
          <ul className="list-disc ml-8 mb-4" style={{ listStyleWidth: "1px" }}>
            <li><a href="">Are.na</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Read.cv</a></li>
            <li><a href="">Dribbble</a></li>
            <li><a href="">Instagram</a></li>
          </ul>
          </div>
          <p className='flex font-bold text-[18px] justify-end items-center'><img className='mr-2' src={view} alt="" />View my work</p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
