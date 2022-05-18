import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'

import bgImg from '../assets/Plogo.png'
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-gradient-to-r from-zinc-900 via-orange-200 to-neutral-100 fixed drop-shadow-lg'>
      <div className='px-5 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <img className='w-96 h-full px-15 ml-10' src={bgImg} alt="/" />
          <ul className='hidden md:flex text-xl ml-20 pl-20'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to='/Admin'>Admin</Link></li>
          <li><Link to="Packages" smooth={true} offset={-100} duration={500}>Staff</Link></li>
          <li><Link to="Contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-20'>
          <button className='border-none bg-transparent text-black mr-4 text-xl'>
            Sign Up
          </button>
          <button className='px-8 py-3 text-xl'>Sign In</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link to="Admin" smooth={true} offset={-50} duration={500}>Admin</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Packages</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign Up</button>
            <button className='px-8 py-3'>Sign </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
