import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import team3 from "../assets/team3.jpeg"


const Barner = () => {
  return (
    <>
    <div className=' flex px-6 py-8 sm:py-0 bg-gray-100 duration-300  j mx-auto'>
        <div className='min-h-[700px] flex  justify-around relative'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative  px-6 '>
                 {/* image section */}
             <div className='order-2 sm:order-1'>
                <img data-aos="fade-left" data-aos-delay="200"  className="max-h-[500px] rounded-md" src= {team3} alt="" />
             </div>
               {/* hero text section */}
               <div className='order-1 sm:order-2 space-y-5 lg:pr-20'>
                <h1 data-aos="fade-up" data-aos-delay="250" className='text-4xl text-fuchsia-900 font-semibold md:text-5xl pr-2'> Youth empowerment.
                       
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className='text-lg' >The foundation understands that young people represent the future of society and is committed to providing them with the tools and opportunities they need to lead change in their communities. The foundation runs leadership development programs, sports activities, and arts initiatives to help young people build self-confidence, resilience, and a sense of purpose. These programs are designed to foster collaboration, creativity, and critical thinking, encouraging young people to become active participants in shaping their futures and the future of their communities.</p>
                <div className='flex gap-6'>
                  <button data-aos="fade-up" data-aos-delay="400" className="bg-fuchsia-800  w-[200px] rounded-md my-6 font-medium  py-3 text-gray-200 text-lg hover:scale-105 duration-300"> check out activities </button>
                
                </div>
               </div>
            
            </div>
            
        </div>

    </div>
      
    </>
  )
}

export default Barner
