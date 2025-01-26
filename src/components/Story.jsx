import React from 'react'
import team from "../assets/team.jpeg"

const Story = () => {
  return (
    <div className='w-full bg-white justify-between items-center grid md:grid-cols-2 max-w-[1240px] px-4 py-16'>
      <div className='w-8/12 w-[500px] '>
        <img src={team} alt="" className='rounded-2xl'/>
      </div>
      <div className=' mx-auto px-4'>
        <p>
       <p className=' text-2xl [#00df9a] font-bold py-4 md:text-5xl'> Our Story</p> 
        <p className='text-lg'>
         One Love Foundation, founded in 2022, emerged with a mission to address pressing social issues, including poverty, education, and mental health. Established by a group of passionate advocates, the foundation aimed to create lasting change through community-driven initiatives and support for vulnerable populations. From its inception, it focused on providing educational scholarships, food relief, and mental health awareness programs. Through partnerships and volunteer efforts, the One Love Foundation has worked to foster unity and resilience, embodying its belief in collective action for a more just and compassionate world. The foundation continues to expand its impact, touching lives within Trans Nzoia County.

        </p>
       </p>
         <button className='bg-black w-[200px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white'>Read More ...</button>
      </div>
      


    
    </div>
  )
}

export default Story
