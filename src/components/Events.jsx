import React from 'react'
import serviceIcon1 from "../assets/team1.jpg";
import serviceIcon2 from "../assets/team2.jpeg";
import { TbRibbonHealth } from "react-icons/tb";
import serviceIcon3 from "../assets/team3.jpeg";
import serviceIcon4 from "../assets/team4.jpeg";
import { IoMdSchool } from "react-icons/io";
import { PiBowlFood } from "react-icons/pi";
import { MdCampaign } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
import { TbSocial } from "react-icons/tb";


const data=[
  {
    title: "CHURCH VISITS",
    description:''
  }
]

const Services = () => {
  return (
    <>


    
      <div className="mx-4 bg-white   mt-[20px]">
        <div className=" flex flex-col pt-[60px] text-center ">
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-fuchsia-900 text-4xl md:text-6xl font-bold">Our Agenda</h1>
          <p data-aos="fade-up" data-aos-delay="300" className=" font-medium text-center mx-auto pt-4 text-3xl">
          Our main focus is to
          </p>
        </div>
        <div className="w-full gap-8 justify-between items-center grid md:grid-cols-3 max-w-[1240px] px-4 py-16 ">
          <div className='rounded-md hover:shadow-lg pb-6'>
          <IoMdSchool   className='text-6xl text-fuchsia-900 bg-clip  mx-auto' />
            {/* <img data-aos="fade-up" data-aos-delay="300"
              src={serviceIcon1}
              alt=""
              className="w-[250px] align-center m-auto"
            /> */}
            <h2 data-aos="fade-up" data-aos-delay="350" className="text-center mx-auto text-2xl font-bold  py-4">Promote education</h2>
            <p data-aos="fade-up" data-aos-delay="400" className="text-lg text-center w-150 p-6  rounded-md">
             One Love Foundation prioritizes initiatives that provide access to quality education for children and adults alike.  
            The charity runs scholarships and grants programs to support students from low-income backgrounds in accessing higher education
            </p>
          </div>
          <div className='hover:shadow-lg pb-6'>
          <TbRibbonHealth className='text-6xl text-fuchsia-900 bg-clip  mx-auto '/>
            <h2 data-aos="fade-up" data-aos-delay="350" className="text-center mx-auto text-2xl font-bold  py-4">Healthcare access </h2>
            <p data-aos="fade-up" data-aos-delay="400" className="text-lg justify-center text-center w-150 px-2 rounded-md">
            In many areas where the foundation operates, healthcare infrastructure 
            is limited or nonexistent, which exacerbates health inequalities. To address this, 
            the foundation supports 
            medical outreach programs that bring healthcare services directly to underserved communities.
            </p>
          </div>
          <div className='hover:shadow-lg pb-6'>
          <PiBowlFood className='text-fuchsia-900 text-6xl  mx-auto' />
         
            {/* <img data-aos="fade-up" data-aos-delay="300"
              src={serviceIcon4}
              alt=""
              className="w-[250px] align-center m-auto"
            /> */}
            <h2 data-aos="fade-up" data-aos-delay="350" className="text-center mx-auto text-2xl font-bold  text-black py-4"> poverty and hunger</h2>
            <p data-aos="fade-up" data-aos-delay="400" className="text-lg text-center w-150 px-2  rounded-md">
            The organization works on multiple fronts to alleviate food insecurity and support 
            families in need. One of the key components of this effort is the distribution of food 
            packages and meals to individuals and families who are struggling to meet their basic 
            nutritional needs.
            </p>
          </div>
        </div>
    

      
        <div className=" w-full bg-white justify-between items-center grid md:grid-cols-3 max-w-[1240px] px-4 py-16">
          <div className='hover:shadow-lg pb-6'>
          <MdCampaign  className='text-fuchsia-900 text-6xl  mx-auto'/>
            {/* <img data-aos="fade-up" data-aos-delay="300"
              src={serviceIcon1}
              alt=""
              className="w-[250px] align-center m-auto"
            /> */}
            <h2 data-aos="fade-up" data-aos-delay="350" className="text-center mx-auto text-2xl font-bold  py-4"> advocacy and awareness-raising campaigns</h2>
            <p data-aos="fade-up" data-aos-delay="400" className="text-lg  text-center w-150 px-2  rounded-md">
            The foundation recognizes that lasting change often requires shifting public perception and 
            challenging entrenched societal norms. As part of its commitment to social justice, 
            One Love Foundation 
            engages in campaigns that promote equality, human rights, and environmental sustainability
            </p>
          </div>
          <div className='hover:shadow-lg pb-6'>
          <PiHandshakeLight  className='text-fuchsia-900 text-6xl  mx-auto'/>
            {/* <img data-aos="fade-up" data-aos-delay="300"
              src={serviceIcon2}
              alt=""
              className="w-[250px] align-center m-auto"
            /> */}
            <h2 data-aos="fade-up" data-aos-delay="350" className="text-center mx-auto text-2xl font-bold  py-4">Building Partnership</h2>
            <p data-aos="fade-up" data-aos-delay="400" className="text-lg  text-center w-150 px-2 rounded-md">
             One Love Foundation also prioritizes building strong partnerships with other organizations and stakeholders to amplify its impact. 
            The foundation recognizes that many of the issues it addresses are complex and require collective action.
            </p>
          </div>
          <div className='hover:shadow-lg pb-6'>
          <TbSocial  className='text-fuchsia-900 text-6xl  mx-auto' />
{/*          
            <img data-aos="fade-up" data-aos-delay="300"
              src={serviceIcon4}
              alt=""
              className="w-[250px] align-center m-auto"
            /> */}
            <h2 data-aos="fade-up" data-aos-delay="300" className="text-center mx-auto text-2xl font-bold py-4">Social Development</h2>
            <p data-aos="fade-up" data-aos-delay="300" className="text-lg  text-center w-150 px-2  rounded-md">
            The foundation recognizes that many communities face systemic challenges that 
            prevent them from realizing their full potential. Through initiatives aimed at 
            fostering economic empowerment, social inclusion, and cultural development,
             the foundation helps marginalized populations access opportunities and resources to thrive.
            </p>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Services