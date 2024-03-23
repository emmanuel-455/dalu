import React from 'react';
import Queue from "../asset/Rectangle 4.png";
import Zap from "../asset/Rectangle 3.png";
import View from "../asset/Rectangle 5.png";
import China from "../asset/Rectangle 7.png";
import Ninja from "../asset/Rectangle 8.png";
import Station from "../asset/Rectangle 9.png";

function WorkProjectImg(props) {
  const images = [Queue, Zap, View, China, Ninja, Station];

  return (
    <div className='md:pl-16'>
      <h1 className="text-[20px] md:text-[24px] font-extrabold mb-2">{props.header}</h1>
      <div className='md:grid md:grid-cols-3 gap-4 flex flex-nowrap overflow-auto'>
        {images.map((image, index) => (
          <img key={index} className='w-[216px]' src={image} alt={`Project ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default WorkProjectImg;
