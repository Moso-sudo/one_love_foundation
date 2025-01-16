import React from 'react'
import  Home from "./pages/Home";
import  Contact from "./pages/Contact";
import  News from "./pages/News";
import  Events from "./pages/Events";
import  About from "./pages/About";
import  Gallery from "./pages/Gallery";
import { Route, Routes} from 'react-router-dom';



const  App=()=> {

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
