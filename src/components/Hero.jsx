import React from 'react'
// import {
//     CloudUploadIcon,
//     DatabaseIcon,
//     PaperAirplaneIcon,
//     ServerIcon,
// } from '@heroicons/react/solid'

// import bgImg from '../assets/bg.jpg'

// const Hero = () => {
//   return (
//     <div name='home' className='w-full h-screen bg-zinc-300 flex flex-col justify-between'>
//         <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
//             <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
//                 <p className='text-2xl'>Sri Lanka's Best </p>
//                 <h1 className='py-3 text-5xl md:text-7xl font-bold'>Pheonix    Airline</h1>
//                 <p className='text-2xl'>Flight Everywhere beyond your limits.</p>
//                 <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
//             </div>
//              <div className='im1'>
//                 <img src={bgImg} alt="/" />
//             </div> 
//             {/* <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
//             mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
//             border border-slate-300 rounded-xl text-center shadow-xl'>
//                 <p>Data Services</p>
//                 <div className='flex justify-between flex-wrap px-4'>
//                     <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> App Security</p>
//                     <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
//                     <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
//                     <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
//                 </div>
//             </div>  */}
//         </div>
//     </div>
//   )
// }

// export default Hero

import mountainImage from "../assets/bg.jpg";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url("${mountainImage}")`,
    backgroundSize: "cover",
  };

  return (
    <div className="App rounded-b-lg">
      <div className=" text-white object-center bg-center rounded-b-lg " style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-40 py-10  rounded-b-lg">
          <div className=" max-w-xl h-full grid grid-cols-1 gap-20 rounded-b-lg">
            <div className="w-full">
            </div>
            <h2></h2>
            <h2></h2>
            <h1 className="text-7xl font-bold ">
              Host your space, share your world
            </h1>
            <p className="text-3xl">
              Everyone has oceans to fly. Good 
              traveler has no fixed plans and is not 
              intent on arriving, Pheonix is the beyond 
              of your boundary
            </p>
            <button className="bg-amber-600  py-4 px-8 text-2xl rounded-md w-48 mb-10 hover:bg-transparent text-black ml-px">
              Explore Us
            </button>
          </div>
        </div>
      </div>
{/* 
      <div className="px-8 py-16">
        <div className="max-w-md mb-16">
          <h2 className="text-5xl">
            Your next chapter, made possible by Hosting
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <div>
            <h3 className="text-2xl font-bold mb-2">Share what you love</h3>
            <p className="text-lg">
              Indulge your love for design when you host Airbnb guests, who are
              drawn to authentic travel in creatively curated spaces.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Host how you want to</h3>
            <p className="text-lg">
              Airbnb gives you the tools and support to earn extra income, be
              your own boss and invest in your passions.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;