import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';


const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Ticket Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-7'>The right price for your research.</h3>
          <p className='text-3xl'>
            Enjoy your journey with the most reasonable prices that you can find. Fly ttero the most popular destinations with the best discounts and deals. 
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-8 p-10 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-amber-200 text-indigo-900 rounded-2xl text-lg'>Standard (Economy Class) </span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$990<span className='text-xl text-slate-500 flex flex-col justify-end'>/One Way</span></p>
            </div>
            <p className='text-3xl py-8 text-slate-500'> From Sri Lanka to Switzerland</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Cheaper fares</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Free foods and snacks</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Inflight entertainment</p>
                <button className='w-full py-4 my-4'>Start Book</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-8 p-10 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-amber-200 text-indigo-900 rounded-2xl text-lg'>Premium (Business Class)</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$1500<span className='text-xl text-slate-500 flex flex-col justify-end'>/One Way</span></p>
            </div>
            <p className='text-3xl py-8 text-slate-500'>From Sri Lanka to Switzerland</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Prority boarding</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Amenities & Facilities </p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Inflight entertainment</p>
                <button className='w-full py-4 my-4'>Start Book</button>
            </div>
          </div>
        </div>
         <div className='grid md:grid-cols-2'>
         <div className='bg-white text-slate-900 m-8 p-10 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-amber-200 text-indigo-900 rounded-2xl text-lg'>Standard (Economy Class) </span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$980<span className='text-xl text-slate-500 flex flex-col justify-end'>/One Way</span></p>
            </div>
            <p className='text-3xl py-8 text-slate-500'> From Sri Lanka to Japan</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Cheaper fares</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Free foods and snacks</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Inflight entertainment</p>
                <button className='w-full py-4 my-4'>Start Book</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-8 p-10 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-amber-200 text-indigo-900 rounded-2xl text-lg'>Premium (Business Class)</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$1200<span className='text-xl text-slate-500 flex flex-col justify-end'>/One Way</span></p>
            </div>
            <p className='text-3xl py-8 text-slate-500'>From Sri Lanka to Japan</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Additional Baggage Allowance</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Fine Dining</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Inflight entertainment</p>
                <button className='w-full py-4 my-4'>Start Book</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Pricing;
