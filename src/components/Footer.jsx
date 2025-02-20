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
    <div className='bg-black justify-between   py-8 px-4 grid lg:grid-cols-3  '>
        <div>
            <h1 className='md:flex text-fuchsia-900 text-2xl md:text-4xl font-bold pb-6'>One Love Foundation</h1>

    
        </div>
        <div className=' flex flex-col '>
            <div>
                <h6 className='font-medium text-fuchsia-900 text-2xl  pb-4'>Useful links</h6>
                <ul className='text-lg text-white'>
                <li className='p-1'>Home</li>
                    <li className='p-1'>About</li>
                    <li className='p-1'>Gallery</li>
                    <li className='p-1'>Events</li>
                    <li className='p-1'>Contact</li>
                </ul>
            </div>

        </div>  

        <div className='flex flex-col   my-2  '>
          <h6 className='font-medium text-fuchsia-900 text-2xl pb-4'>Let us connect</h6>
          <div className='flex gap-4 mt-4 text-white flex-row'>
            <FaDribbbleSquare size={30}/>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>

          </div>
        </div>
    </div>
  )
}

export default Footer
