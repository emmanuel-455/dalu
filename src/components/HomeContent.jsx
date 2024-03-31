import React from 'react';
import view from "../asset/viewplay.svg";
import Music from "../asset/game thumbnail (2).png"

function HomeContent() {
  return (
    <div className='flex justify-center items-center '>
      <div className='w-[600px] pt-10 md:pt-[140px] md:pl-[120px]'>
        <div className=''>
          <div className=' md:w-[80%]'>
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
            <p className='flex font-bold text-[18px] items-center justify-end'>
              View my work<img className='ml-2' src={view} alt="" />
            </p>
            <div className='flex mt-[61px] items-start border-2 border-[E5E5E5] px-[15px] py-[15px] py'>
              <img className='w-[50px]' src={Music} alt="" />
              <div className='ml-[17px]'>
                <p className=' inline-block px-[6px] py-[3px] bg-[#E6E6E6] text-[11px]'>Listened to</p>
                <h2 className='text-[15px] font-bold'>The less I know the better</h2>
                <p className='text-[15px]'>Tame Impala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
