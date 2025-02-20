import React from 'react'

const Collections = () => {
  return (
    <div className='w-full py-[20px] px-4 bg-white'>
        <h1  data-aos="fade-up" data-aos-delay="500" className=' grid text-center md:w-[800px] font-lg text-fuchsia-900 flex mx-auto justify-center text-4xl md:py-6 '>One Love Shop</h1>
        <p data-aos="fade-up" data-aos-delay="300"  className='md:w-[800px] bg-clip-text justify-center items-center mx-auto text-2xl p-4'> We sell our Branded Wears in order to raise funds for activities undertaken by One Love Foundation </p> 
        <div className='max-xw-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        
            <div data-aos="fade-up" data-aos-delay="600" className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src="" alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Polo neck</h2>
                <p   className='text-center text-2xl font-bold'>Ksh.1000</p>
                <div className='text-center font-medium'>
                <p  className='py-2 border-b mx-8'>large,white, </p>
                <p   className='py-2 border-b mx-8'>aVailable</p>
                </div>
                <button   className='bg-fuchsia-900 w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white'>Add to cart</button>

            </div>
            <div data-aos="fade-up" data-aos-delay="600"  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
                <img src="" alt="" className='w-20 mx-auto mt-[-3rem] bg-transparent'/>
                <h2 className='text-2xl font-bold text-center py-8'>Cap</h2>
                <p className='text-center text-2xl font-bold'>Ksh. 500</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>gray, </p>
                    <p className='py-2 border-b mx-8'>aVailable</p>
                </div>
                <button className='bg-fuchsia-900 w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white '>Add to cart</button>

            </div>
            <div data-aos="fade-up" data-aos-delay="600" className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src="" alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>T-shirt</h2>
                <p className='text-center text-2xl font-bold'>Ksh. 800</p>
                <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'>large,gray, </p>
                <p className='py-2 border-b mx-8'>aVailable</p>
                </div>
                <button className='bg-fuchsia-900 w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white'>Add to cart</button>

            </div>

        </div>
      
    </div>
  )
}

export default Collections
