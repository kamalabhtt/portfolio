import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer"

function App () {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden text-white ">
       
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Footer />
      
    </div>
  )
}

export default App
