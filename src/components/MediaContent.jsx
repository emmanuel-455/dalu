import React from 'react';
import MediaBody from './MediaBody';
import mediaContent from '../mediaContent';

function MediaContent() {
  return (
    <div className='md:pl-[120px]'>
      <div className=' mt-9 md:pt-[100px]'>
      <h1 className='font-extrabold mb-4 text-[20px] md:text-[24px]'>media diary</h1>
      <div className='w-full'>
        {mediaContent.map((content) => (
          <MediaBody
            key={content.id}
            image={content.image}
            hobby={content.hobby}
            title={content.title}
            author={content.author}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default MediaContent;

