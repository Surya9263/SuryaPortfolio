import React from 'react'
import {Link} from "react-scroll"

const SingleProject = ({title,bgImage,demo,code,tech}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[rgba(112,157,255,0.8)] to-[hsla(24,7%,6%,0.8)]'>
                    <img className='rounded-xl group-hover:opacity-10' src={bgImage} alt="/" />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
                        <div className="flex gap-5">
                            <a href={demo} rel="noreferrer" target="_blank" className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Demo</a>
                            <a href={code} rel="noreferrer" target="_blank" className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Code</a>
                        </div>
                    </div>
                </div>
  )
}

export default SingleProject