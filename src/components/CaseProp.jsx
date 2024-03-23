import React from 'react';

function CaseProp(props) {
  return (
    <div className='flex'>
      <div>
        <p>{props.project}</p>
        <p>{props.year}</p>
        <p><a href="h">{props.date}</a></p>
      </div>
      <div>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

export default CaseProp;

