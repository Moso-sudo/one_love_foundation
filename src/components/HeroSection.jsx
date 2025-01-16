import React from 'react'
import teamImg from '../assets/team.jpeg'
import teamsImg from '../assets/logo.jpeg'

const HeroSection = () => {
  return (

    <div className='flex flex-row  h-screen rounded my-[6px] gap-2 items-center object-fit justify-around bg-gradient-to-t from-pink-100 to-violet 100  '>
      <div className=' text-center  w-[500px] '>
        <p className=' text-4xl text-center font-roboto'>Together, we form a community  by a common purpose-to make the world a better place for all.</p>
        <p className='text-lg pt-4 '>Be a part of our movement? <a className='py-2 px-6 m-3 bg-[#318CE7] rounded-full text-xl text-white cursor-pointer' href='../components/register'>Register</a></p>
      </div>
      <div className=" w-[600px] rounded  opacicity-[50%]">
        <img src={teamImg} alt="" />

      </div>


    </div>



  )
}
export default HeroSection
