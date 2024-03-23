import React from 'react';

function CaseProp(props) {
  return (
    <div className='flex mb-8 justify-between bg-[#F0F0F0]'>
      <div className='py-7 pl-3 md:pl-10 flex flex-col justify-between'>
        <div>
          <p className='text-[17px] md:w-56 w-[150px] font-[700]'>{props.project}</p>
          <p className='text-[15px] mb-6'>{props.year}</p>
        </div>
        <div>
          <p>
            <a className='flex' href="h">
              {props.date} 
              <img src={props.next} alt="" />
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-end">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

export default CaseProp;


