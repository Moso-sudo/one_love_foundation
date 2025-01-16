import React from 'react'
import serviceIcon1 from "../assets/team1.jpg";
import serviceIcon2 from "../assets/team2.jpeg";
import serviceIcon3 from "../assets/team3.jpeg";
import serviceIcon4 from "../assets/team4.jpeg";

const Services = () => {
  return (
    <>
      <div className="section   mt-[50px]">
        <div className=" flex flex-col pt-[120px] text-center ">
          <h1 className="text-4xl"></h1>
          <p className=" w-[600px] text-center mx-auto pt-4 text-2xl">
            UI/UX design,Web design, Web development, Graphic design, Business
            card, Brand guide, Packaging design and logo design
          </p>
        </div>
        <div className="flex md:flex-row sm:flex-col xsm:flex-col gap-4 justify-around pt-[60px] mx-[60px]">
          <div className='hover:shadow-lg'>
            <img
              src={serviceIcon1}
              alt=""
              className="w-[250px] align-center m-auto"
            />
            <h2 className="text-center mx-auto text-3xl py-4">UI/UX Design</h2>
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
            <h2 className="text-center mx-auto text-3xl py-4">Web Design</h2>
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
            <h2 className="text-center mx-auto text-3xl py-4">Logo Design</h2>
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