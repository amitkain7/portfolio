import React from 'react'
import {BiLogoReact  } from 'react-icons/bi'  
import {BsDatabaseFill} from 'react-icons/bs'
const Technology = () => {
  return (
    <div id='tech' className='  mt-10 mx-10'>
      <h1 className='text-2xl md:text-4xl font-semibold  my-3'>Technology</h1>
      <p className='text-xl tracking-wide text-gray-500' >I've worked with a range a technologies in the web development world. <br />From FrontEnd Library like React  language  Html , Css, JavaScript , and in BackEnd Node ,Mongodb ,Express</p>
      <div className=' flex justify-between md:justify-start gap-6 my-4  '>
        <div >
         <BiLogoReact className='text-4xl  hover:text-blue-500 hover:scale-110'/>
          <h1 className='text-xl md:text-3xl font-bold my-2'>Front End</h1>
          <p className='tracking-wider text-gray-300'>Experience with React.js </p>

        </div>
        <div>
           <BsDatabaseFill className='text-4xl hover:text-green-500 hover:scale-110' />
          <h1 className='text-xl md:text-3xl font-bold my-2 '>Back End</h1>
          
          <p className='tracking-wider text-gray-300'>Experience with Node.js & Mongo</p>
        </div>
        
      </div>

    </div>
  )
}

export default Technology