import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom

function Navbar() {
  const [activeLink, setActiveLink] = useState(""); // State to track active link
  const location = useLocation(); // Get the current location using useLocation()

  useEffect(() => {
    // Retrieve the active link from localStorage when the component mounts
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const handleLinkClick = (link) => {
    // If the clicked link is "home", return early
    if (link === "home") {
      return;
    }
    setActiveLink(link); // Update the activeLink state with the clicked link
    // Store the active link in localStorage
    localStorage.setItem('activeLink', link);
  };

  // Check if the current location is the home page, and hide the active link
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("");
    }
  }, [location]);

  return (
    <div className='pr-[6rem] mt-24'>
      <ul className='h-screen'>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "home" ? "font-extrabold border-b-[3px]" : ""} w-[45px] border-black`}
            onClick={() => handleLinkClick("home")}>
          <Link to="./"></Link> {/* Use Link instead of anchor tag */}
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "about" ? "font-extrabold border-b-[3px]" : ""} w-[45px] border-black`}
            onClick={() => handleLinkClick("about")}>
          <Link to="/about">about</Link> {/* Use Link instead of anchor tag */}
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "works" ? "font-extrabold border-b-[3px]" : ""} w-[45px] border-black`}
            onClick={() => handleLinkClick("works")}>
          <Link to="/work">works</Link> {/* Use Link instead of anchor tag */}
        </li>
        <li className={`py-[px] mb-[10px] text-[15px] ${activeLink === "media" ? "font-extrabold border-b-[3px]" : ""} w-[108px] border-black`}
            onClick={() => handleLinkClick("media")}>
          <Link to="/media">media diary</Link> {/* Use Link instead of anchor tag */}
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
