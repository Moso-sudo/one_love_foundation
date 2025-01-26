import React,{useState} from 'react';
import { Link} from "react-router-dom"
import { IoCloseOutline } from "react-icons/io5";
                       
import { AiOutlineAlignLeft } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] =useState(false);
  const handleToggle  =()=>{
    setToggle(!toggle)
  }
  return (
   
   <>
   <div className=' text-white flex flex-row  justify-between shadow-lg px-4 items-center mx-auto top-0 z-index-[-10]'>
        <div className='md:flex bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-medium p-4'>
            <h1> <Link to="/">One Love Foundation </Link></h1>
        </div>
        <div className=' hidden md:flex' >
            <ul className='flex  gap-6 font-medium'>
              
                <li className='hover:text-blue-800'><Link to="/">Home </Link></li>
                <li className='hover:text-blue-800'><Link to="/about">About</Link></li>
                <li className='hover:text-blue-800'><Link to="/gallery">Gallery </Link></li>
                <li className='hover:text-blue-800'><Link to="/events">Events </Link></li>
                <li className='hover:text-blue-800'><Link to="/news">News </Link></li>
                <li className='hover:text-blue-800 duration-200'><Link to="/contact">Contact</Link></li>
               
            </ul>
        </div>
        <div className="block md:hidden text-white" onClick={handleToggle}>
      {!toggle ? <AiOutlineAlignLeft size= {20}/> : <IoCloseOutline size= {20}  /> }
     </div>
        
    </div>


     <div className={!toggle ? 'md:hidden fixed left-0 h-full top-0 w-[80%]  bg-black border-r border-r-gray-900  ease-in-out duration-500': 'fixed left-[-100%] bg-[#000300'}>
     <div className='md:flex bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-medium p-4'>
            <h1> <Link to="/">One Love Foundation </Link></h1>
        </div>
            <ul className='pt-[70px] z-index[-1000] text-white px-8 '>
              
                <li className='p-2 hover:text-blue-800'><Link to="/">Home </Link></li>
                <li className='p-2 hover:text-blue-800'><Link to="/about">About</Link></li>
                <li className='p-2 hover:text-blue-800'><Link to="/gallery">Gallery </Link></li>
                <li className='p-2 hover:text-blue-800'><Link to="/events">Events </Link></li>
                <li className='p-2 hover:text-blue-800'><Link to="/news">News </Link></li>
                <li className='p-2 hover:text-blue-800' ><Link to="/contact">Contact</Link></li>
               
            </ul>
        </div>
   </>
    
  )
}

export default Navbar
