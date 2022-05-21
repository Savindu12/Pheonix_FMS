import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          We are glad to offer you with a platform where you can get all the relevant details in the most convenient way.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>User login</h3>
              <p className='text-lg pt-2 pb-4'>
                Quick and easy access to our flight management system. 
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Flight booking</h3>
              <p className='text-lg pt-2 pb-4'>
                Fully automated flight booking system.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Seat reservations</h3>
              <p className='text-lg pt-2 pb-4'>
                Reserve your seats in the most convenient way.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Flight details</h3>
              <p className='text-lg pt-2 pb-4'>
                Get updated with all the flight details at the earliest possible time. 
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Payment procedures</h3>
              <p className='text-lg pt-2 pb-4'>
                All payments are processed through a highly secured payment gateway.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Friendly community</h3>
              <p className='text-lg pt-2 pb-4'>
                Our friendly community is ready to assist you with anything you require. 
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Profile updates</h3>
              <p className='text-lg pt-2 pb-4'>
                All profiles are being updated and managed automatically.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>privacy policy</h3>
              <p className='text-lg pt-2 pb-4'>
                All information is protected from unauthorized access and used only within the system.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllInOne;
