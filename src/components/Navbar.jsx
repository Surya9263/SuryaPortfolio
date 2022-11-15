import React from 'react'
import Logo from "../assets/SS-LOGO.png"
import {FaBars,FaTimes,FaLinkedin,FaGithub} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {BsFillTelephoneForwardFill} from "react-icons/bs"
import { useState } from 'react'
import {Link} from "react-scroll"
import pdf from "../assets/Surya-Srivastava-Resume.pdf"
const Navbar = () => {

    const [nav,setNav]=useState(false);
    const handleClick=()=>setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' >
        <div>
            <img src={Logo} alt="Logo" style={{width:"80px"}} />
        </div>
        {/* menu */}
        
            <ul className='hidden md:flex gap-5' >
            <div className='relative group'>
                <div className='absolute -inset-0.5  rounded-lg blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                <li className='relative bg-[#0a192f] rounded-lg leading-none px-7 py-4'><Link to="home" smooth={true} duration={500}>
                <span className=' text-gray-300 group-hover:text-indigo-400 transition duration-200' >Home</span>
                </Link></li></div>

                <div className='relative group'>
                    <div className='absolute -inset-0.5  rounded-lg blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                <li className='relative bg-[#0a192f] rounded-lg leading-none px-7 py-4'><Link to="about" smooth={true} duration={500}>
                    <span className='text-gray-300 group-hover:text-indigo-400 transition duration-200' >About</span>
                </Link></li></div>

                <div className='relative group'>
                <div className='absolute -inset-0.5  rounded-lg blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                <li className='relative bg-[#0a192f] rounded-lg leading-none px-7 py-4'><Link to="skills" smooth={true} duration={500}>
                <span className='text-gray-300 group-hover:text-indigo-400 transition duration-200' >Skills</span>
                </Link></li></div>
                
                <div className='relative group'>
                <div className='absolute -inset-0.5  rounded-lg blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                <li className='relative bg-[#0a192f] rounded-lg leading-none px-7 py-4'><Link to="work" smooth={true} duration={500}>
                <span className='text-gray-300 group-hover:text-indigo-400 transition duration-200' >Work</span>
                </Link></li></div>
                
                <div className='relative group'>
                <div className='absolute -inset-0.5  rounded-lg blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                <li className='relative bg-[#0a192f] rounded-lg leading-none px-7 py-4'><Link to="contact" smooth={true} duration={500}>
                <span className='text-gray-300 group-hover:text-indigo-400 transition duration-200' >Contact</span>
                </Link></li></div>

                <div className='relative group'>
                <div className='absolute -inset-0.5  rounded-lg blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                <li className='relative bg-[#0a192f] rounded-lg leading-none px-7 py-4'><a href={pdf} download to="contact" smooth={true} duration={500}>
                <span className='text-gray-300 group-hover:text-indigo-400 transition duration-200' >Resume</span>
                </a></li></div>
            </ul>
        
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav?<FaBars/>:<FaTimes/>}
        </div>
        {/* mobile menu */}
        <ul className={!nav?"hidden":"absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
        </ul>
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0' >
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/surya-srivastava-81a6b7176/" >
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' rel="noreferrer" target="_blank" href="https://github.com/Surya9263">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' rel="noreferrer" target="_blank" href="mailto:suryasrivastava724@gmail.com">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href={pdf} download className='flex justify-between items-center w-full text-gray-300' rel="noreferrer" target="_blank">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3f7a91]'>
                    <a className='flex justify-between items-center w-full text-gray-300'>
                        +91-7247067481 <BsFillTelephoneForwardFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar