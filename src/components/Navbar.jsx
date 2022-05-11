import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'

import bgImg from '../assets/Plogo.png'
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-400 fixed drop-shadow-lg'>
      <div className='px-5 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <img className='w-full px-10' src={bgImg} alt="/" />
          <ul className='hidden md:flex text-xl'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>Flights</Link></li>
          <li><Link to="/Dashboard" smooth={true} offset={-50} duration={500}>Dashboard</Link></li>
          <li><Link to="Packages" smooth={true} offset={-100} duration={500}>Packages</Link></li>
          <li><Link to="Contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-20'>
          <button className='border-none bg-transparent text-black mr-4 text-xl'>
            Sign In
          </button>
          <button className='px-8 py-3 text-xl'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>Flights</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;