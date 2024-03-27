import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNavbar';
import Logo from '../components/Logo';
import HomeContent from '../components/HomeContent';
import FirstPage from '../components/FirstPage';

function Home() {
  const [showFirstPage, setShowFirstPage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFirstPage(false);
      navigate('./');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      {showFirstPage ? (
        <FirstPage />
      ) : (
        <div className='px-[25px] w-full md:flex'>
          <div className='md:inline-block py-5 md:w-[17rem] flex justify-between items-center'>
            <Logo logo="chidalu ugwu" />
            <div className='hidden md:block'><Navbar /></div>
            <div className='md:hidden'><SideNavbar /></div> 
          </div>
          <HomeContent />
        </div>
      )}
    </div>
  );
}

export default Home;
