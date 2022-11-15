import React from 'react'
import takeitnowImg from "../assets/zara1.png"
import shopImg from "../assets/SHOP.COM.png"
import myhoursImg from "../assets/myhours.png"
import theHinduImg from "../assets/theHindu.png"
import SingleProject from './SingleProject'



const Work = () => {
  return (
    // <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
    //     {/* container */}
    //     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    //         <div className='pb-8'>
    //             <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
    //             <p className='py-6'>Checkout some of my recent work</p>
    //         </div>
            
    //         <div 
    //         className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
    //             {/* first card */}
    //             <div style={{backgroundImage:`url(${ZARA})`}}
    //             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
    //                 {/* hover effects */}
    //                 <div className='opacity-0 group-hover:opacity-100'>
    //                     <span className='text-2xl font-bold text-white tracking-wider'>
    //                         ZARA.COM [CLONE]
    //                     </span>
    //                     <span className='text-2xl text-pink-600'>[HTML, CSS, JavaScript]</span>
    //                     <div className='pt-8 text-center'>
    //                         <a href="https://bucolic-dango-38b34e.netlify.app/" target="_blank">
    //                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>                                
    //                         </a>
    //                         <a href="https://github.com/ashelake/truculent-pie-36" target="_blank">
    //                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>                                
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* second card */}
    //             <div style={{backgroundImage:`url(${shop})`}}
    //             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
    //                 {/* hover effects */}
    //                 <div className='opacity-0 group-hover:opacity-100'>
    //                     <span className='text-2xl font-bold text-white tracking-wider'>
    //                         SHOP.COM [CLONE]
    //                     </span>
    //                     <span className='text-2xl text-pink-600'>[HTML, CSS, JavaScript]</span>
    //                     <div className='pt-8 text-center'>
    //                         <a href="https://vocal-marigold-0a794e.netlify.app/" target="_blank">
    //                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>                                
    //                         </a>
    //                         <a href="https://github.com/Kartikey0813/Masai_CyberPunks" target="_blank">
    //                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>                                
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //                {/* third card */}
    //                <div style={{backgroundImage:`url(${hindu})`}}
    //             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
    //                 {/* hover effects */}
    //                 <div className='opacity-0 group-hover:opacity-100'>
    //                     <span className='text-2xl font-bold text-white tracking-wider flex'>
    //                         THEHINDU.COM [CLONE]
    //                     </span>
    //                     <span className='text-2xl text-pink-600'>[React JS, News.io API, module CSS]</span>
    //                     <div className='pt-8 text-center'>
    //                         <a href="https://thehinduclone.netlify.app/" target="_blank">
    //                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>                                
    //                         </a>
    //                         <a href="https://github.com/Surya9263/overjoyed-field-1627/tree/main/the_hindu" target="_blank">
    //                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>                                
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div name="work" id='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-2 py-20'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
            <h2 className='py-4'>{`What I've Built`}</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <SingleProject title={"Take It Now"} bgImage={takeitnowImg} demo={"https://takeitnow.vercel.app/"} code={"https://github.com/Surya9263/flashy-burst-4121"} tech={"Next JS | Typescript | Chakra UI | mongoDB | jsonwebtoken"} />
            <SingleProject title={"My Hours"} bgImage={myhoursImg} demo={"https://myhour.vercel.app/"} tech={"React JS | Chakra UI | Redux | React-router"} code={"https://github.com/Surya9263/hideous-crack-5602"}/>
            <SingleProject title={"SHOP.COM"} bgImage={shopImg} demo={"https://vocal-marigold-0a794e.netlify.app/"} tech={"HTML | CSS | Javascript"} code={"https://github.com/Kartikey0813/Masai_CyberPunks"} />
            <SingleProject title={"Take It Now"} bgImage={theHinduImg} demo={"https://thehinduclone.netlify.app/"} tech={"React JS | CSS | React-router | Rest API"} code={"https://github.com/Surya9263/overjoyed-field-1627"} />
            </div>
        </div>
    </div>
  )
}

export default Work