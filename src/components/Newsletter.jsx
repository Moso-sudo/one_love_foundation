import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-black py-16 w-full'>
        <div className=' max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 data-aos="fade-right" data-aos-delay="700" className='text-white md:text-4xl sm:text-4xl text-xl'>Get notified of our Upcoming Events</h1>
                <p data-aos="fade-up" data-aos-delay="300"  className='text-white'>sign up for newsletter and stay upto date</p>
            </div>
            <div className='my-4'> 
              <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
              <input data-aos="fade-up" data-aos-delay="400" type="email"  placeholder='Enter your emeil' className='p-3 flex w-full rounded-md text-black' />
              <button data-aos="fade-up" data-aos-delay="400"  className='mx-4 bg-clip text-white bg-fuchsia-900  w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-black'>Submit</button>
              </div>
              <p data-aos="fade-up" data-aos-delay="400" className='text-white'>Send us your email so stay updated about our events <span className='text-fuchsia-900 underline'>Stay updated</span> </p>
     
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
