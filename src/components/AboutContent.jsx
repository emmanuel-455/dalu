import React from 'react';

function AboutContent(props) {
  return (
    <div>
      <div className='md:w-[800px] md:pt-[140px]'>
        <div className='md:pl-[120px]'>
          <div className='mt-7'>
            <h1 className="text-[20px] font-bold md:hidden">
              {props.header}
            </h1>
          </div>
          <div className="">
            <p className='text-[15px]'>{props.abt}</p>
            <p className='mt-5'>{props.reachout}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
