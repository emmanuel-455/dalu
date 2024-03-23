import React from 'react';
import Asterisk from "../asset/Asterisk.png";
import SideNavContent from './SideNavContent';
import './SideNavbar.css'; 

function SideNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isRotated, setIsRotated] = React.useState(false); 

  function handleClick() {
    setIsOpen(!isOpen); 
    setIsRotated(!isRotated);
  }

  return (
    <div className='md:hidden block'>
      <img src={Asterisk} onClick={handleClick} alt="" className={isRotated ? 'rotated' : 'same'} />
      {isOpen && <SideNavContent isOpen={isOpen} />}
    </div>
  );
}

export default SideNavbar;

