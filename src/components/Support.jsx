import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-6xl pt-5 text-amber-500 uppercase text-center'>Support</h2>
              <h3 className='text-4xl font-bold py-6 text-center'>Finding the right team</h3>
              <p className='py-4 text-3xl text-slate-300 text-center'>You can always reach out to our team for support. Get all your issues clarified with the assistance of our members. We are more than happy to provide the best solutions and options to all your questions.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-amber-600 text-indigo rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Account Support</h3>
                      <p className='text-gray-600 text-xl'>Get support for any issue related to your account. We assure the safety of your user account and all payments are proceeded through a secured payment gateway.</p>
                  </div>
                  <div className='bg-amber-400 pl-8 py-4 hover:bg-slate-500'>
                      <p className='flex items-center text-indigo-600 hover:text-white'>Contact Us <ArrowSmRightIcon className='w-6 ml-3' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-amber-600 text-indigo rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>Do not hesitate to contact us if you face any issue when logging in to our system, booking flights, reserving flights or any other system-related errors.</p>
                  </div>
                  <div className='bg-amber-400 pl-8 py-4 hover:bg-slate-500'>
                      <p className='flex items-center text-indigo-600 hover:text-white'>Contact Us <ArrowSmRightIcon className='w-6 ml-3' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-amber-600 text-indigo rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Get updated with all our news releases and contact us for further information. Feel free to check out our latest collection of destinations and offers.</p>
                  </div>
                  <div className='bg-amber-400 pl-8 py-4 hover:bg-slate-500'>
                      <p className='flex items-center text-indigo-600 hover:text-white'>Contact Us <ArrowSmRightIcon className='w-6 ml-3' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
