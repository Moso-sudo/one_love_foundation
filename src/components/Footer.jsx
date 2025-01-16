import React from 'react'
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=' mt-8  bg-gradient-to-t from-violet-800 to-violet-600'>
     <div className='flex flex-row justify-around p-8 '>
      <div>
        {/* <img src={logo} alt="" /> */}
        <h1 className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>One Love Foundation</h1>
      </div>
      <div>
        <h1 className='text-2x  pb-3'>Useful links</h1>
        <ul className=''>
          <li><a href="">About</a></li>
          <li><a href="">contact</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Events</a></li>
          
        </ul>

      </div>
      <div className='text-2xl '>
        <h1>let's connect</h1>
        <div className="flex flex-row gap-10 mt-8 ">
          <a href="">
            <CiFacebook className="size-[30px] [#fdfdfd]" />
          </a>
          <a href="">
            <FaXTwitter className="size-[30px] [#fdfdfd]" />
          </a>
          <a href="">
            <CiInstagram className="size-[30px] text-3xl text-[#fdfdfd]" />
          </a>
        </div>
      </div>
     

      
    </div>

<hr class="px-2  bg-[#fdfdfd] border-1 dark:bg-[#fdfdfd]"/>
<div className=' flex flex-row mx-[150px] justify-between my-8 pb-8'>
    <div>
      <p className=''></p>
      <p className=''>&copy; 2024 all rights reserved</p></div>
  <div>
  <p className="">oneLoveFoundation</p>
  </div>
        <div>
        <p className='' > made with ❤️ by Moso</p>
        </div>
        

      </div>
    </div>
   
  )
}

export default Footer