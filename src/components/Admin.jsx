import { PaperClipIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import bgImg from '../assets/Plogo.png'
import { MenuIcon, XIcon } from '@heroicons/react/outline';




const Admin = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)



  return (
    <>
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

    <div>
      <h3></h3><br/>
    </div>



    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-20">
      <div className="px-5 py-5 sm:px-6">
        <h3 className="text-4xl leading-6 font-medium text-gray-900 text-center underline-offset-8 uppercase">Admin Information</h3>
        <p className="mt-5 max-w-3xl text-lg text-gray-500 text-center">Personal details of Admin.</p>
      </div>
      <div className="border-t border-amber-600">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 ">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Savindu Dhamsara</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Admin Role</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Management</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">SavinduDhamsara@pheonix.com</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Admin Availability</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Daytime and OT Hours</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">Staff_Status.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-amber-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">User_Status.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-amber-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>

    </>
  )
}

export default Admin