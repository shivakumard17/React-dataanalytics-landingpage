import React from 'react'
import Laptop from '../Assets/Laptop.svg'

function Analytics() {
  return (
    <div className='w-full  bg-white py-16 px-4'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBORD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl fon-bold'>Manage Data Analytics Centraly</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ad dolore exercitationem magni quisquam earum harum doloremque quo adipisci, pariatur in voluptate quam blanditiis porro atque placeat error voluptatem! Cumque.</p>
          <button className='bg-[#000000] hover:bg-[#00df9a] rounded-md font-medium  w-[200px] my-6  mx-auto md:mx-0 py-3 hover:text-black text-[#00df9a]'>Get Started</button>


        </div>
     
        </div> 
    </div>
  )
}

export default Analytics