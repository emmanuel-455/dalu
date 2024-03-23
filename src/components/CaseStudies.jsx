import React from 'react';
import CaseProp from './CaseProp';

function CaseStudies(props) {
  return (
    <div className='md:pl-16 mt-7'>
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
