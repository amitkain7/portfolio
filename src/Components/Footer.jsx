import React from 'react'
import {AiOutlineGithub , AiFillMail } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='py-5 mt-3  flex flex-wrap justify-center items-center gap-2 md:gap-10  '>
        <p>Turn your imagination into reality...</p>
        < p className='flex gap-3'>
            <a className='text-2xl text-gray-600 hover:scale-110 hover:text-black' href="https://github.com/amitkain7"><AiOutlineGithub/></a>
            
            <a  className='text-2xl text-gray-600 hover:scale-110 hover:text-blue-700' href="mailto:kainturaamit862@gmail.com"><AiFillMail/></a>
        </p>
    </div>
  )
}

export default Footer