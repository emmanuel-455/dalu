import React from 'react';
import CaseProp from './CaseProp';

function CaseStudies(props) {
  return (
    <div className='mt-7'>
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
    </div>
  );
}

export default CaseStudies;
