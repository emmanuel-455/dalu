import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 

function Navbar() {
  const [activeLink, setActiveLink] = useState(""); 
  const location = useLocation(); 

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const handleLinkClick = (link) => {
    if (link === "home") {
      return;
    }
    setActiveLink(link);
    localStorage.setItem('activeLink', link);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("");
    }
  }, [location]);

  return (
    <div className='mt-24'>
      <ul className='h-screen'>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "home" ? "font-extrabold border-b-[3px]" : ""} w-[45px] border-black`}
            onClick={() => handleLinkClick("home")}>
          <Link to="./"></Link> 
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "about" ? "font-extrabold border-b-[3px]" : ""} w-[45px] border-black`}
            onClick={() => handleLinkClick("about")}>
          <Link to="/about">about</Link> 
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "works" ? "font-extrabold border-b-[3px]" : ""} w-[45px] border-black`}
            onClick={() => handleLinkClick("works")}>
          <Link to="/work">works</Link> 
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "media" ? "font-extrabold border-b-[3px]" : ""} w-[102px] border-black`}
            onClick={() => handleLinkClick("media")}>
          <Link to="/media">media diary</Link> 
        </li>
        
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "resume" ? "font-extrabold border-b-[3px]" : ""} w-[60px] border-black`}
            onClick={() => handleLinkClick("resume")}>
          <Link to="/resume">resume</Link> 
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "email" ? "font-extrabold border-b-[3px]" : ""} w-[50px] border-black`}
            onClick={() => handleLinkClick("email")}>
          <Link to="/email">email</Link> 
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
