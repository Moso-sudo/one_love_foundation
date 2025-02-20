import React from 'react'
import teamImg from '../assets/team.jpeg'
import teamsImg from '../assets/logo.jpeg'
import { ReactTyped } from "react-typed";
import bgImg from "../assets/team.jpeg"
const HeroSection = () => {
  return (
    <div className=' relative bg-black  '>
               
        <div className=' h-screen mt-[-96px] w-full mx-auto text-center flex flex-col justify-center mb-8 '>
        {/* <img className=' absolute justify-center max-w-[800px] mx-auto  pt-16 w-full h-full object-cover mix-blend-overlay opacity-[90%]  ' src={bgImg} alt=""  /> */}
            <h1  data-aos="fade-up" data-aos-delay-100 className=' md:text-6xl font-semibold sm:text-4xl text-fuchsia-900 text-3xl md:py-6'>Our community strives to</h1>
            <ReactTyped strings={['alleviate poverty,', 'promote education', 'enhance health and well-being',]}
                className=' text-white fond-bold md:text-4xl sm:text-4xl text-xl md:pl-4 pl-2' 
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            <div className='grid mx-auto items-center grid-row md:w-[800px] '>
         
                <p data-aos="fade-up" data-aos-delay="300" className='md:text-2xl text-white sm:text-4xl text-xl items-center py-4 '>
               One love Foundation is a charity organization deeply committed to promoting positive change through various community-driven initiatives. As an organization founded on the values of unity, love, and empowerment.
            
                </p> 
            </div>
            <div className='flex itemsp-center'>
         
           
            <button data-aos="fade-up" data-aos-delay="700"  className='text-fuchsia-50 text-2xl   bg-fuchsia-900 w-[200px] rounded-md my-6 mx-auto font-medium  py-3  text-lg hover:scale-105 duration-300'>Learn More </button>
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
