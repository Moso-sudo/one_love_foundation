import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-4 gap-4 text-gray-300'>
        <div>
            <h1 className='md:flex bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-medium p-4'>One Love Foundation</h1>

            <div className='flex justify-between md:w-[75%] my-6  '>
            < FaDribbbleSquare size={30}/>
            <  FaFacebookSquare size={30}/>
            < FaGithubSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            
        </div>
        </div>
        <div className=' flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400 text-2xl  pb-4'>Solutions</h6>
                <ul>
                <li className='p-1'>Analytics</li>
                    <li className='p-1'>Marketing</li>
                    <li className='p-1'>Commerce</li>
                    <li className='p-1'>Insights</li>
                </ul>
            </div>

        </div>
       
            <div>
                <h6 className='font-medium text-gray-400 text-2xl pb-4'>Solutions</h6>
                <ul>
                <li className='p-1'>Analytics</li>
                    <li className='p-1'>Marketing</li>
                    <li className='p-1'>Commerce</li>
                    <li className='p-1'>Insights</li>
                </ul>
            
        </div>
        
            <div>
                <h6 className='font-medium text-gray-400 text-2xl  pb-4'>Solutions</h6>
                <ul >
                    <li className='p-1'>Analytics</li>
                    <li className='p-1'>Marketing</li>
                    <li className='p-1'>Commerce</li>
                    <li className='p-1'>Insights</li>
                </ul>
        

        </div>
      
      
    </div>
  )
}

export default Footer
