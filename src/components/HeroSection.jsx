import React from 'react'
import teamImg from '../assets/team.jpeg'
import teamsImg from '../assets/logo.jpeg'
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div className='bg-black text-white '>
        <div className='max-w-[800px] h-screen mt-[-96px] w-full mx-auto text-center flex flex-col justify-center'>
         
            <h1 className='md:text-5xl sm:text-4xl text-3xl md:py-6'>Our community strives to</h1>
            <ReactTyped strings={['alleviate poverty,', 'promote education', 'enhance health and well-being',]}
                className='md:text-3xl sm:text-4xl text-xl md:pl-4 pl-2' 
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            <div className='flex flex-row'>
                <p className='md:text-2xl sm:text-4xl text-xl items-center py-4 text-gray-500'>The organization also focuses on community development, fostering cultural awareness, and empowering individuals through volunteerism and capacity-building. Fundraising and resource mobilization are key to sustaining its programs and maximizing impact, ensuring that help reaches those in need.
            
                </p> 
            </div>
            <div className='flex itemsp-center'>
         
            <h1 className='md:text-lg -auto'>Become a family  of one love foundation?</h1>
            <button className='bg-gradient-to-r from-pink-500 to-violet-500 w-[200px] rounded-md my-6 mx-auto font-medium  py-3 text-white text-lg'>Register</button>
            </div>
            

        </div>
      
    </div>

    // <div className='w-full bg-white justify-between items-center grid md:grid-cols-2 max-w-[1240px] px-4 py-16 '>
    //   <div className=' text-center  w-[500px] '>
    //     <p className=' text-4xl text-center font-roboto'>Together, we form a community  by a common purpose-to make the world a better place for all.</p>
    //     <p className='text-lg pt-4 '>Be a part of our movement? <a className='py-2 px-6 m-3 bg-[#318CE7] rounded-full text-xl text-white cursor-pointer' href='../components/register'>Register</a></p>
    //   </div>
    //   <div className=" w-8/12 w-[500px] ">
    //     <img  className='rounded-2xl' src={teamImg} alt="" />

    //   </div>


    // </div>



  )
}
export default HeroSection
