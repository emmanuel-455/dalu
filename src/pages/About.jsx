import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import AboutContent from '../components/AboutContent';
import SideNavbar from '../components/SideNavbar';
import Footer from '../components/Footer';

function About() {
  // Disable scrolling
  document.body.style.overflow = 'hidden';

  return (
    <div className='pl-[25px] md:flex'>
      <div className='md:inline-block py-5 md:border-r md:w-[14rem] flex justify-between items-center'>
        <Logo logo="chidalu ugwu" />
        <div className='hidden md:block'><Navbar /></div>
        <div className='md:hidden pr-[25px]'><SideNavbar /></div> 
      </div>
      <AboutContent
        header="about"
        abt="I'm a visual designer passionate about crafting engaging app and website experiences. I make illustrations and draw in my spare time integrating them into in my work whenever I can. You can find some of my art on Instagram ✎☻ and on Twitter ✘ where i post just about anything. I also gather valuable resources and inspiration on Are.na ✶✶ and log my cinematic adventures on Letterboxd ✱."
        reachout="You can reach me at ➪ chidalu.ugwu@icloud.com"
      />
      <div className='absolute bottom-0 left-[15%] md:left-[40%]  text-[#adadad]'>
        <Footer />
      </div>
    </div>
  );
}

export default About;
