import React from 'react'
import devImage from '../assets/pg.png'

const Hero = () => {
   
  return (
    <div id='hero' className='flex items-center ml-4 mt-6  gap-4 md:justify-around md:ml-0'>
      <div className='p-4'>
        <h1 className='text-3xl md:text-4xl font-semibold tracking-wide my-2 cursor-default '  >Welcome To  <br /> My Personal Portfolio</h1>
        <a className='py-1 rounded-xl w-full bg-purple-500 text-white mt-6 hover:scale-105 transition block text-center ' href="https://drive.google.com/file/d/14O-ajPJdiNxXWugJlZg2gXldf5kyfsJU/view?usp=sharing">Resume</a>
      </div>
      <div className='hidden md:block  h-100 p-4  '>
        <img className=' h-3/4 mt-2 lg:h-full ' src={devImage} alt='DevImage'  />

      </div>


    </div>
  )
}

export default Hero