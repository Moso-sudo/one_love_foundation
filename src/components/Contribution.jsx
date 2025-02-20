import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import team3 from "../assets/team3.jpeg"


const Contribution = () => {
  return (
    <>
    <div className=' overflow-none mx-auto items-center justify-center flex grid md:grid-cols-2 px-6 py-4 sm:py-0 bg-gray-200 duration-300 mx-auto'>
        <div className='grid md:min-h-[700px] '>
            <div className='grid gap-6 items-center px-6 '>
            
               {/* hero text section */}
               <div className='order-1 sm:order-2 space-y-5 '>
                <h1 data-aos="fade-up" data-aos-delay="600" className='text-2xl text-fuchsia-900 font-semibold pr-2 mx-auto'> Transparency & Accountability
                       
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className='text-gray-900 mx-auto justify-center ' >The organization is dedicated to ensuring that its resources are used effectively and efficiently to achieve its mission. Through regular reporting, impact assessments, and financial audits, the foundation ensures that donors and supporters can trust that their contributions are making a real difference in the lives of those who need it most. This commitment to transparency fosters a culture of trust and accountability, enabling the foundation to build lasting relationships with its supporters and beneficiaries alike.</p>
                <div className='flex gap-6'>
                  <button data-aos="fade-up" data-aos-delay="300" className="bg-fuchsia-900 w-[200px] rounded-md my-6 font-medium  py-3 text-gray-200 text-lg hover:scale-105 duration-300 mx-auto"> Contribute </button>
                
                </div>
             
               </div>
            
            </div>
                   
        </div>
        
            

    </div>
      
    </>
  )
}

export default Contribution
