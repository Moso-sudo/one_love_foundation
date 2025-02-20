import React from 'react'
import team from "../assets/team.jpeg"

const Story = () => {
  return (
    <div className=' mx-auto bg-white rounded-md  justify-between items-center grid md:grid-cols-2 py-6'>
      <div data-aos="fade-up" data-aos-delay="300" className='w-[400px] md:w-[500px] px-4'>
        <img src={team} alt="" className='rounded-2xl'/>
      </div>
      <div className=' mx-auto px-4 grid items-center'>
        <p>
       <p data-aos="fade-up" data-aos-delay="400" className=' text-4xl text-fuchsia-900 font-bold py-4 md:text-5xl'> Our Story</p> 
        <p data-aos="fade-up" data-aos-delay="400"className='text-xl text-black '>
         One Love Foundation, founded in 2018, emerged with a mission to address pressing social issues, including poverty, education, and mental health. Established by a group of passionate advocates, the foundation aimed to create lasting change through community-driven initiatives and support for vulnerable populations. From its inception, it focused on providing educational scholarships, food relief, and mental health awareness programs. Through partnerships and volunteer efforts, the One Love Foundation has worked to foster unity and resilience, embodying its belief in collective action
          for a more just and compassionate world. The foundation continues to expand its impact, touching lives within Trans Nzoia County.

        </p>
       </p>
         <button data-aos="fade-up" data-aos-delay="500"className='w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 bg-black text-gray-200  w-[200px] '>Read More ...</button>
      </div>
      


    
    </div>
  )
}

export default Story
