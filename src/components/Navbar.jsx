import React,{useState} from 'react';
import { Link} from "react-router-dom"
import { TfiAlignRight, TfiClose } from "react-icons/tfi";


const Navbar = () => {
  const [toogle, setToggle]= useState(false);
  const handleclick=(toogle);
  return (
   
    <div className='hidden md:flex flex-row justify-around  mt-8 bg-red shadow-lg pb-4 top-0 sticky z-10 absolute'>
        <div className=' bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl'>
            <h1> <Link to="/">One Love Foundation </Link></h1>
        </div>
        <div className=' gap-4 text-lg' >
            <ul className='0 flex flex-row gap-6'>
              
                <li className='hover:text-blue-800'><Link to="/">Home </Link></li>
                <li className='hover:text-blue-800'><Link to="/about">About</Link></li>
                <li className='hover:text-blue-800'><Link to="/gallery">Gallery </Link></li>
                <li className='hover:text-blue-800'><Link to="/events">Events </Link></li>
                <li className='hover:text-blue-800'><Link to="/news">News </Link></li>
                <li className='hover:text-blue-800 duration-200'><Link to="/contact">Contact</Link></li>
                <TfiAlignRight />
                <TfiClose />
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
