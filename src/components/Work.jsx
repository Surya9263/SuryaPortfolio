import React from 'react'
import ZARA from "../assets/ZARA.png"
import shop from "../assets/SHOP.COM.png"
import hindu from "../assets/theHindu.png"


const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Checkout some of my recent work</p>
            </div>
            
            <div 
            className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                {/* first card */}
                <div style={{backgroundImage:`url(${ZARA})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ZARA.COM [CLONE]
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://bucolic-dango-38b34e.netlify.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>                                
                            </a>
                            <a href="https://github.com/ashelake/truculent-pie-36" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>                                
                            </a>
                        </div>
                    </div>
                </div>
                {/* second card */}
                <div style={{backgroundImage:`url(${shop})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            SHOP.COM [CLONE]
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://vocal-marigold-0a794e.netlify.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>                                
                            </a>
                            <a href="https://github.com/Kartikey0813/Masai_CyberPunks" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>                                
                            </a>
                        </div>
                    </div>
                </div>
                   {/* third card */}
                   <div style={{backgroundImage:`url(${hindu})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            THEHINDU.COM [CLONE]
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://thehinduclone.netlify.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>                                
                            </a>
                            <a href="https://github.com/Surya9263/overjoyed-field-1627/tree/main/the_hindu" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work