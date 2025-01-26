import React from 'react'

const Collections = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-xw-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src="" alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>one granded User</p>
                    <p className='py-2 border-b mx-8'>send upto 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-black'>Add to cart</button>

            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
                <img src="" alt="" className='w-20 mx-auto mt-[-3rem] bg-transparent'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>one granded User</p>
                    <p className='py-2 border-b mx-8'>send upto 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-black '>Add to cart</button>

            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src="" alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
                <p className='text-center text-4xl font-bold'>$249</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>one granded User</p>
                    <p className='py-2 border-b mx-8'>send upto 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-black'>Add to cart</button>

            </div>

        </div>
      
    </div>
  )
}

export default Collections
