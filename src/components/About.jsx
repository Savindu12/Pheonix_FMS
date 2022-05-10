import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-6xl font-bold'>Trusted by Travelers across the World</h2>
                <p className='text-3xl py-7 text-gray-500'>Come with us travel to your destination with supreme facilities. </p> 
                <p className='text-4xl py-4 text-gray-700'>We are rise as Pheonix and we are Pheonix Airline </p>
                <p className='text-4xl py-4 text-gray-700'></p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-orange-400' >
                    <p className='text-6xl font-bold text-amber-600 hover:text-white'>100%</p>
                    <p className='text-gray-500 mt-3 hover:text-white'>Comments</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl hover:bg-orange-400' >
                    <p className='text-6xl font-bold text-amber-600 hover:text-white'>24/7</p>
                    <p className='text-gray-500 mt-2 hover:text-white'>Working Hours</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-orange-400' >
                    <p className='text-6xl font-bold text-amber-600 hover:text-white'>100K</p>
                    <p className='text-gray-500 mt-2 hover:text-white'>Customers</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About