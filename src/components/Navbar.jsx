import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  useEffect(() => {
    // Retrieve the active link from localStorage when the component mounts
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the activeLink state with the clicked link
    // Store the active link in localStorage
    localStorage.setItem('activeLink', link);
  };

  return (
    <div className='pr-[6rem] border-r'>
      <ul className='h-screen'>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "about" ? "font-extrabold border-b-[3px]" : ""} w-[50px] border-black`}
            onClick={() => handleLinkClick("about")}>
          <Link to="/">about</Link> {/* Use Link instead of anchor tag */}
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "works" ? "font-extrabold border-b-[3px]" : ""} w-[50px] border-black`}
            onClick={() => handleLinkClick("works")}>
          <Link to="/work">works</Link> {/* Use Link instead of anchor tag */}
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "media" ? "font-extrabold border-b-[3px]" : ""} w-[50px] border-black`}
            onClick={() => handleLinkClick("media")}>
          <Link to="/media">media</Link> {/* Use Link instead of anchor tag */}
        </li>
        {/* Add similar Link elements for other routes */}
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "resume" ? "font-extrabold border-b-[3px]" : ""} w-[60px] border-black`}
            onClick={() => handleLinkClick("resume")}>
          <Link to="/resume">resume</Link> {/* Use Link instead of anchor tag */}
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "email" ? "font-extrabold border-b-[3px]" : ""} w-[50px] border-black`}
            onClick={() => handleLinkClick("email")}>
          <Link to="/email">email</Link> {/* Use Link instead of anchor tag */}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
