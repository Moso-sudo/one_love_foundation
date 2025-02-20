import React, { useEffect } from 'react'
import  Home from "./pages/Home";
import  Contact from "./pages/Contact";
import  News from "./pages/News";
import  Events from "./pages/Events";
import  About from "./pages/About";
import  Gallery from "./pages/Gallery";
import { Route, Routes} from 'react-router-dom';
import AOS from  "aos";
import "aos/dist/aos.css";




const  App=()=> {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing: "ease-in-sine",
      delay:100
    });
    AOS.refresh();
}, [])

return(
    <Routes>
       <Route path="/" index element={<Home/>}/>
       <Route  path="/about" element={<About/>}/>
       <Route path="/gallery" element={<Gallery/>}/>
       <Route path="/events"element={<Events/>}/>
       <Route path="/news" element={<News/>}/>
       <Route  path="/contact" element={<Contact/>}/>
    </Routes >
 


 
     
    

     
  )
}

export default App
