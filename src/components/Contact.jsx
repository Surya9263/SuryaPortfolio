import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen flex justify-center items-center p-4 bg-[#0a192f]'>
        <form method='POST' action="https://getform.io/f/6de0bb27-f00d-4d6f-9d35-e799b33e3680" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                {/* <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - suryasrivastava724@gmail.com</p> */}
            </div>
            <input className='p-2 bg-[#ccd6f6] placeholder:red' type="text" placeholder='Name' name="name"/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email"/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact