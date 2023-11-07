import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Technology from '../Components/Technology'
import Project from '../Components/Project'
import Footer from '../Components/Footer'
import About from '../Components/About'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Project/>
   <Technology/>
   <About/>
   <Footer/>
   </>
  )
}

export default Home