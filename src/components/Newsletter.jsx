import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-black py-16 w-full'>
        <div className=' max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='text-white md:text-5xl sm:text-4xl text-xl'>Get notified of our Upcoming Events</h1>
                <p className='text-white'>sign up for newsletter and stay upto date</p>
            </div>
            <div className='my-4'> 
              <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
              <input type="email"  placeholder='Enter your emeil' className='p-3 flex w-full rounded-md text-black' />
              <button className='mx-4 bg-gradient-to-r from-pink-500  w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-black'>Submit</button>
              </div>
              <p className='text-white'>we care about the protection of your data. Read our <span className='text-[#00df9a] underline'>privacy policy</span> </p>
     
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
