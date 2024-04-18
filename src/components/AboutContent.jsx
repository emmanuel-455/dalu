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
          <div className="pr-2 text-justify">
            <p className='text-[15px]'>I'm a visual designer passionate about crafting engaging app and website experiences. I make illustrations and draw in my spare time integrating them into in my work whenever I can. You can find some of my art on <a className=' underline' href="https://instagram.com/lynxz000">Instagram</a> ✎☻ and on <a className=' underline' href="https://twitter.com/lynxz000">Twitter</a> ✘ where i post just about anything. I also gather valuable resources and inspiration on <a className=' underline' href="https://www.are.na/chidalu-u/channels">Are.na</a> ✶✶ and log my cinematic adventures on <a className=' underline' href="https://letterboxd.com/lynxz/">Letterboxd</a> ✱.</p>
            <p className='mt-5'>You can reach me at ➪ <a className=' underline' href="mailto:chidaluugwu03@gmail.com">chidaluugwu03@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;