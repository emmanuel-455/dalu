import React from 'react';

function MediaBody(props) {
  const handleButtonClick = () => {
    // Handle the button click action
    // For example, you can navigate programmatically or perform some other action
    // window.location.href = props.mediaUrl;
  };

  return (
    <div className='mb-5'>
      <div className='flex items-center md:w-[700px]'>
        <img className='w-[100px] md:w-[200px]' src={props.image} alt="" />
        <div className='ml-5 md:ml-[30px]'>
          <p className='bg-[#E6E6E6] px-2 py-1 inline text-[13px]'>{props.hobby}</p>
          <p className='text-[15px] font-bold mt-[5px]'>{props.title}</p>
          <p className='text-[15px] mt-[3px]'>{props.author}</p>
          {/* Use a button instead of an anchor element */}
          <button onClick={handleButtonClick} className='text-[15px] md:mt-[5px] border-none bg-transparent cursor-pointer'>
            {props.media}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MediaBody;
