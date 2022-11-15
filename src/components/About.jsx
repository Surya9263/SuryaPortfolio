import React from 'react'
import image from "../assets/SuryaImg.jpeg"
const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full' >
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4' >
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div> 
                <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-2 '>
                        <img className='object-cover shadow-lg rounded-lg' src={image} alt="" />
                    </div>
                    <div style={{}}>
                    <p className="leading-5  bg-gradient-to-r from-indigo-400 to-transparent  px-12 decoration-clone sm:leading-9">Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions. I'm an Analytical and detailed-oriented aspiring Full Stack Web Developer. Proficient in writing production-ready code using ReactJS, redux, and CSS on the frontend, NodeJS, and Express on the backend to build single-page applications. Passionate about coding and strongly interested in working in a product-based company. </p>  
                    </div>
        </div>
        </div>
    </div>
  )
}

export default About