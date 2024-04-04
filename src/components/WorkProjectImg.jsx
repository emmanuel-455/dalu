import React, { useState } from 'react';
import Queue from "../asset/Rectangle 4.png";
import Zap from "../asset/Rectangle 3.png";
import View from "../asset/Rectangle 5.png";
import China from "../asset/Rectangle 7.png";
import Ninja from "../asset/Rectangle 8.png";
import Station from "../asset/Rectangle 9.png";
import QueueBig from "../asset/Queue img.png";
import zap from "../asset/zap.png";
import Asterisk from "../asset/Asterisk.svg";

function WorkProjectImg(props) {
  const images = [Queue, Zap, View, China, Ninja, Station];
  const modelImgs = [zap, QueueBig];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const description = [
    {
      des: "Queues is a little experiment that I worked on so I could learn to use origami studio, a versatile prototyping tool that makes other prototyping tools look ridiculous",
      link: "See prototype on twitter ☛ https://x.com/lynxz000/status/1748377071246627252?s=20",
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
          <div className="bg-white p-8 w-full md:max-w-[40%] relative">
            <button onClick={nextImage} className="absolute top-0 right-[40px] mt-2 focus:outline-none">
              {'>'}
            </button>
            <button onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none">
              <img src={Asterisk} alt="Close" className="h-6 w-6" />
            </button>
            <button onClick={prevImage} className="absolute top-0 right-[80px] mt-2 focus:outline-none">
              {'<'}
            </button>
            <img
              src={modelImgs[selectedImageIndex]}
              alt={`Project ${selectedImageIndex + 1}`}
              className="w-full mb-4"
            />
            <p>{description[selectedImageIndex].des}</p>
            {description[selectedImageIndex].link && (
              <a href={description[selectedImageIndex].link} target="_blank" rel="noreferrer" className="text-black">{description[selectedImageIndex].link}</a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkProjectImg;
