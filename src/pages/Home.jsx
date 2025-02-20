
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events from '../components/Events'
import HeroSection from '../components/HeroSection'
import React from 'react'
import Newsletter from '../components/Newsletter'
import Collections from '../components/Collections'
import Story from '../components/Story'
import Comment from '../components/Comment'
import Barner from '../components/Barner'
import Advocate from '../components/Adocate'
import Contribution from '../components/Contribution'

const Home = () => {
  return (
    <div className='bg-black '>
 
 
      <Navbar/>
      <HeroSection/>
      <Story/>
      <Comment/>
      <Barner/>
      <Advocate/>
      <Contribution/>
      <Events/>
      <Newsletter/>
      <Collections/>
      
      <Footer/>

     
    </div>
  )
}

export default Home
