import React from 'react';

function MediaBody(props) {
 

  return (
    <div className='mb-5'>
      <div className='flex items-center md:w-[700px]'>
        <img className='w-[100px] md:w-[100px]' src={props.image} alt="" />
        <div className='ml-5 md:ml-[30px]'>
          <p className='bg-[#E6E6E6] px-2 py-1 inline text-[13px]'>{props.hobby}</p>
          <p className='text-[15px] font-bold mt-[5px]'>{props.title}</p>
          <p className='text-[15px] mt-[3px]'>{props.author}</p>
          
        </div>
      </div>
    </div>
  );
}

export default MediaBody;
