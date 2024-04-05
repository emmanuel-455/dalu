import React, { useState } from 'react';
import QueueImage from "../asset/Rectangle 4.png";
import ZapImage from "../asset/Rectangle 3.png";
import ViewImage from "../asset/Rectangle 5.png";
import ChinaImage from "../asset/Rectangle 7.png";
import NinjaImage from "../asset/Rectangle 8.png";
import StationImage from "../asset/Rectangle 9.png";
import QueueBigImage from "../asset/Queue img.png";
import zapImage from "../asset/zap.png";
import XImage from "../asset/X.svg";

function WorkProjectImg(props) {
  const images = [QueueImage, ZapImage, ViewImage, ChinaImage, NinjaImage, StationImage];
  const modelImgs = [QueueBigImage, zapImage];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const description = [
    {
      des: "Queues is a little experiment that I worked on so I could learn to use origami studio, a versatile prototyping tool that makes other prototyping tools look ridiculous",
      link: "https://x.com/lynxz000/status/1748377071246627252?s=20",
    },
    {
      des: "So what is fanhuddle about?"
    }
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % modelImgs.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + modelImgs.length) % modelImgs.length);
  };

  return (
    <div>
      <h1 className="text-[20px] md:text-[24px] font-extrabold mb-2">{props.header}</h1>
      <div className='md:grid md:grid-cols-3 gap-y-4 gap-x-4 flex flex-nowrap overflow-auto'>
        {images.map((image, index) => (
          <img
            key={index}
            className='w-[250px]'
            src={image}
            alt={`Project ${index + 1}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 w-full md:max-w-[45%] relative">
            <div className='flex justify-between items-center mb-4'>
              <div>
                <p className="text-[18px] font-extrabold">{selectedImageIndex === 0 ? 'Queues' : 'Zap'}</p>
              </div>
              <div className="flex space-x-4">
                <button onClick={prevImage} className="focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={nextImage} className="focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button onClick={closeModal} className="focus:outline-none">
                  <img src={XImage} alt="Close" className="h-6 w-6" />
                </button>
              </div>
            </div>
            {modelImgs[selectedImageIndex] && (
              <img
                src={modelImgs[selectedImageIndex]}
                alt={`Project ${selectedImageIndex + 1}`}
                className="w-full mb-[30px]"
              />
            )}
            {description[selectedImageIndex] && (
              <p className='text-[15px] mb-6'>{description[selectedImageIndex].des}</p>
            )}
            {description[selectedImageIndex] && description[selectedImageIndex].link && (
              <p className='break-words'>See prototype on twitter ☛<a href={description[selectedImageIndex].link} target="_blank" rel="noreferrer" className="text-black underline ">{description[selectedImageIndex].link}</a></p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkProjectImg;
