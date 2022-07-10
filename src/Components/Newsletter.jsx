import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto  grid lg:grid-cols-3 px-4  '>
          <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow </h1>
             <p>Signup to our newsletter and stay upto date </p>
          </div>
          <div className='my-4'>
          <div  className='flex flex-col md:flex-row items-center justify-center w-full'>
              <input className='w-full p-3 flex text-black rounded-md' type="email" placeholder='Enter Your email'/>
              <button className='bg-[#00df9a] hover:bg-[#f3f3f3] hover:text-[#000000] rounded-md font-medium  w-[200px] ml-4 my-6  mx-auto py-3 text-black'>Get Started</button>

          </div>
         <p>We care about the protection of your data. Read our <span className='text-[#00df9a] underline' >Privacy Policy</span></p>
        </div>

     </div>
    </div>
  )
}

export default Newsletter