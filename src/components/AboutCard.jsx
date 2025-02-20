import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import team3 from "../assets/team11.jpeg"


const AboutCard = () => {
  return (
    <>
    <div className='m-8 flex px-6 py-6 sm:py-0 dark:bg-black dark:text-white duration-300  mx-auto'>
        <div className=' flex  justify-around relative'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative  px-6 '>
                 {/* image section */}
             <div className='order-2 sm:order-1'>
                <img data-aos="fade-left" data-aos-delay="600"  className="max-h-[400px] rounded-md" src= {team3} alt="" />
             </div>
               {/* hero text section */}
               <div className='order-1 sm:order-2 space-y-5 lg:pr-20'>
                <h1 data-aos="fade-up" data-aos-delay="600" className='text-4xl text-fuchsia-900 font-semibold pr-2'> About One Love Foundation
                       
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" >One Love Foundation is a multifaceted charity 
                  organization that is engaged in a wide range of initiatives aimed at improving the lives 
                  of individuals and communities. Through its programs in education, healthcare, social 
                  development, poverty alleviation, and advocacy, the foundation works to create a more just,
                   equitable, and sustainable world. Whether through providing critical resources, empowering
                    individuals, or raising awareness about important issues, the One Love Foundation continues 
                    to make a significant impact, demonstrating the 
                  power of collective action and the enduring importance of love and unity in addressing 
                  global challenges.</p>
                
               </div>
            
            </div>
            
        </div>

    </div>
      
    </>
  )
}

export default AboutCard
