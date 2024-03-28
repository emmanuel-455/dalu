
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNavbar';
import Logo from '../components/Logo';
import HomeContent from '../components/HomeContent';


function Home() {
  

  return (
    <div>
     
        <div className='px-[25px] md:flex'>
          <div className='md:inline-block py-5 md:w-[14rem] flex justify-between md:border-r items-center'>
            <Logo logo="chidalu ugwu" />
            <div className='hidden md:block'><Navbar /></div>
            <div className='md:hidden'><SideNavbar /></div> 
          </div>
            <div>
            <HomeContent />
          </div>
        </div>
      
    </div>
  );
}

export default Home;
