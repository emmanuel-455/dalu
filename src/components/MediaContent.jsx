import React from 'react';
import MediaBody from './MediaBody';
import mediaContent from '../mediaContent';

function MediaContent() {
  return (
    <div className='md:pl-[140px] md:border-l md:border-r'>
      <div className=' mt-9 md:pt-[140px]'>
      <h1 className='font-extrabold mb-4 text-[20px] md:text-[30px]'>media diary</h1>
      <div className='w-full'>
        {mediaContent.map((content) => (
          <MediaBody
            key={content.id}
            image={content.image}
            hobby={content.hobby}
            title={content.title}
            author={content.author}
            media={content.social}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default MediaContent;

