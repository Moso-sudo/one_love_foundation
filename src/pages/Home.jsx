
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events from '../components/Events'
import HeroSection from '../components/HeroSection'
import React from 'react'
import Newsletter from '../components/Newsletter'
import Collections from '../components/Collections'
import Story from '../components/Story'

const Home = () => {
  return (
    <div>
 
 
      <Navbar/>
      <HeroSection/>
      <Story/>
      <Events/>
      <Newsletter/>
      <Collections/>
      
      <Footer/>

     
    </div>
  )
}

export default Home
