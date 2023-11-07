import React, { useState } from 'react'
import logo from '../assets/logoGradient.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import {RxHamburgerMenu} from 'react-icons/rx'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
    const [isShow ,setIsShow] = useState(false)
    const blur = {
            'backdrop-filter': 'blur(30px)'
    }
    return (
        <div className='flex  justify-around items-center sticky top-0  h-16  shadow-md  z-10 w-full'style={blur} >
            <div className=' flex  items-center cursor-pointer gap-2 '>
                <img src={logo} alt='logo' width={40} />
                <h1 className='  tracking-wide text-sm md:text-xl  hover:text-hoverColor'><AnchorLink href='#hero'>Amit Kaintura</AnchorLink></h1>
            </div>
            <div className=''>
                <ul className=' flex gap-4 text-sm md:text-xl list-none'>
                    <li><AnchorLink href='#project'>Project</AnchorLink></li>
                    <li><AnchorLink href='#tech'>Technology</AnchorLink></li>
                    <li><AnchorLink href='#about'>About</AnchorLink></li>
                </ul>
            </div>
            <div className=' hidden md:block'>
                <div className='flex text-xl gap-4 '>
                    <a className='hover:scale-125 hover:text-purple-700' href="https://github.com/amitkain7"><AiFillGithub /></a>
                    <a className='hover:scale-125  hover:text-blue-700' href="https://www.linkedin.com/in/amit-kaintura-000b7518b"><AiFillLinkedin /></a>
                    <a className='hover:scale-125 hover:text-gray-800 ' href="https://twitter.com/Alex13836155?t=Wdce5wqDR4Vj9ppTTTi-RA&s=09"><RiTwitterXLine /></a>
                </div>
            </div>
            <div className='relative md:hidden cursor-pointer'>
              <RxHamburgerMenu onClick={() => setIsShow(!isShow)}/>
             {isShow && <DropDown/>}
            </div>
          

        </div>
    )
}

export default Navbar

const DropDown = () => {
    return (
        <ul className='list-none absolute right-2 top-8 w-16 p-1 rounded-lg  bg-hoverColor block '>
        <li className='py-1 text-black hover:bg-slate-600 rounded-lg '><a href="https://github.com/amitkain7"><AiFillGithub /></a></li>
        <li className='py-1 text-black hover:bg-slate-600 rounded-lg '><a href="in/amit-kaintura-000b7518b"><AiFillLinkedin /></a></li>
        <li className='py-1 text-black hover:bg-slate-600 rounded-lg '><a href="https://twitter.com/Alex13836155?t=Wdce5wqDR4Vj9ppTTTi-RA&s=09"><RiTwitterXLine /></a></li>
    </ul>
    )
}