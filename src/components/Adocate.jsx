import React from 'react'

const Advocate= () => {
  return (
    <div className='flex flex-row  items-center justify-center md:flex-col bg-black py-16 w-full'>
        <div className=' max-w-[12400px] mx-auto  grid md: '>
            <div className=' w-[400px] md:w-[1000px]'>
                <h1 data-aos="fade-right" data-aos-delay="700" className='flex mx-auto text-white font-semibold text-center md:3xl text-lg'> "One Love Foundation continues to make a significant impact, demonstrating the power of collective action and the enduring importance of love and unity in addressing  challenges youths face."</h1>
               
            </div>
            <div className='my-4 '>
             
              <p  right-0 data-aos="fade-up" data-aos-delay="400" className= ' mx-auto justify-end grid text-white'> <p className='bg-clip-text text-transparent font-semibold text-lg bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 text-xl'>Community Advocate </p> <span className='text-lg font-semibold text-white '>~Enock Sitati</span> </p>
     
            </div>
        </div>
      
    </div>
  )
}

export default Advocate
