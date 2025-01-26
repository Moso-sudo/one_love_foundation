import React from 'react'
import serviceIcon1 from "../assets/team1.jpg";
import serviceIcon2 from "../assets/team2.jpeg";
import serviceIcon3 from "../assets/team3.jpeg";
import serviceIcon4 from "../assets/team4.jpeg";

const Services = () => {
  return (
    <>


    
      <div className="  mt-[20px]">
        <div className=" flex flex-col pt-[60px] text-center ">
          <h1 className="text-4xl font-bold">Our Focus</h1>
          <p className=" w-[600px] text-center mx-auto pt-4 text-2xl">
          Our main focus is providing basic needs for children- water, food, clothes, home, and education. See how we do it
          </p>
        </div>
        <div className="w-full bg-white justify-between items-center grid md:grid-cols-3 max-w-[1240px] px-4 py-16">
          <div className='hover:shadow-lg'>
            <img
              src={serviceIcon1}
              alt=""
              className="w-[250px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">CHURCH VISITS</h2>
            <p className=" text-center w-150 px-2">
              User interface (UI) design refers to the aesthetic elements by
              which people interact with a product, such as buttons, icons, menu
              bars, typography, colors, and more. User experience (UX) design
              refers to the experience a user has when interacting with a
              product.
            </p>
          </div>
          <div className='hover:shadow-lg'>
            <img
              src={serviceIcon2}
              alt=""
              className="w-[250px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">CHARITY EVENT</h2>
            <p className=" text-center w-150 px-2">
              Web design refers to the design of websites that are displayed on
              the internet. It usually refers to the user experience aspects of
              website development rather than software development.
            </p>
          </div>
          <div className='hover:shadow-lg'>
         
            <img
              src={serviceIcon4}
              alt=""
              className="w-[250px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">MENTORSHIP PROGRAMME</h2>
            <p className=" text-center w-150 px-2">
              A logo is a symbol or design used to identify a company or
              organization, as well as its products, services, employees, etc.
              In its simplest definition, a logo identifies. It's how your
              company is recognized and remembered among others. It also
              functions as the face of your business.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className=" w-full bg-white justify-between items-center grid md:grid-cols-3 max-w-[1240px] px-4 py-16">
          <div className='hover:shadow-lg'>
            <img
              src={serviceIcon1}
              alt=""
              className="w-[250px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">CHURCH VISITS</h2>
            <p className=" text-center w-150 px-2">
              User interface (UI) design refers to the aesthetic elements by
              which people interact with a product, such as buttons, icons, menu
              bars, typography, colors, and more. User experience (UX) design
              refers to the experience a user has when interacting with a
              product.
            </p>
          </div>
          <div className='hover:shadow-lg'>
            <img
              src={serviceIcon2}
              alt=""
              className="w-[250px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">CHARITY EVENT</h2>
            <p className=" text-center w-150 px-2">
              Web design refers to the design of websites that are displayed on
              the internet. It usually refers to the user experience aspects of
              website development rather than software development.
            </p>
          </div>
          <div className='hover:shadow-lg'>
         
            <img
              src={serviceIcon4}
              alt=""
              className="w-[250px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">MENTORSHIP PROGRAMME</h2>
            <p className=" text-center w-150 px-2">
              A logo is a symbol or design used to identify a company or
              organization, as well as its products, services, employees, etc.
              In its simplest definition, a logo identifies. It's how your
              company is recognized and remembered among others. It also
              functions as the face of your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services