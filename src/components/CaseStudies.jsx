import React from 'react';
import CaseProp from './CaseProp';
import BB from '../asset/logos_dribbble-icon.svg'
import twitter from "../asset/logos_twitter.svg"

function CaseStudies(props) {
  return (
    <div className='mt-7 pr-[25px] md:pr-0'>
      <h1 className="text-[20px] md:text-[24px] font-extrabold mb-2">case studies</h1>
      {/* Map over casestudy data and render each case study */}
      {props.casestudy.map((study) => (
        <CaseProp
          key={study.id}
          project={study.project}
          year={study.year}
          image={study.image}
          date={study.date}
          next={study.next}
        />
      ))}
      <div>
        <p className=' font-extrabold mb-2 text-[20px]'>want to see more?</p>
        <div className='flex items-center'>
          <a href="https://dribbble.com/leo_lynxz/shots"><button className=' border flex mr-4 items-center border-black px-4 text-[16px] font-extrabold rounded-full py-2'><p className='mr-2'>Dribble</p> <img src={BB} alt="" /></button></a>
          <a href="https://twitter.com/lynxz000"><button className=' border flex items-center border-black px-4 text-[16px] font-extrabold rounded-full py-2'><p className='mr-2'>Twitter</p> <img src={twitter} alt="" /></button></a>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
