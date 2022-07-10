import React from 'react'
import single from '../Assets/single.png'
import double from '../Assets/double.png'
import triple from '../Assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto  grid md:grid-cols-3 gap-8'>
        {/* card1 */}
        
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  ' >
           <img  class='w-20 mx-auto mt-[-3rem] bg-white  ' src={single} alt='/'/>
           <h2 className='text-2xl font-bold  text-center py-8'>Single</h2>
           <p className='text-center text-4xl font-bold'>$99.9</p>
           <div className='text-center font-medium'>
           <p className='py-2 border-b mx-8 mt-8'>250Gb Storage</p>
           <p className='py-2 border-b mx-8 '>1 Granted user</p>
           <p className='py-2 border-b mx-8 '>Send upto 2Gb</p>

           </div>
           <button className='bg-[#00df9a] hover:bg-[#030303] rounded-md font-medium  w-[200px] my-6  mx-auto py-3  hover:text-[#00df9a] text-black'>Start Trail</button>

        </div>
       {/* card2 */}
       <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8  rounded-lg hover:scale-105 duration-300  ' >
           <img  class='w-20 mx-auto mt-[-3rem] bg-transparent ' src={double} alt='/'/>
           <h2 className='text-2xl font-bold  text-center py-8'>Double</h2>
           <p className='text-center text-4xl font-bold'>$149.9</p>
           <div className='text-center font-medium'>
           <p className='py-2 border-b mx-8 mt-8'>500Gb Storage</p>
           <p className='py-2 border-b mx-8 '>3 Granted user</p>
           <p className='py-2 border-b mx-8 '>Send upto 8Gb</p>

           </div>
           <button className='bg-[#020202] hover:bg-[#00df9a] rounded-md font-medium  w-[200px] my-6  mx-auto py-3 text-[#00df9a] hover:text-[#030303]'>Start Trail</button>

        </div>
      {/* card-3 */}
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  ' >
           <img  class='w-20 mx-auto mt-[-3rem] bg-white  ' src={triple} alt='/'/>
           <h2 className='text-2xl font-bold  text-center py-8'>Triple</h2>
           <p className='text-center text-4xl font-bold'>$199.9</p>
           <div className='text-center font-medium'>
           <p className='py-2 border-b mx-8 mt-8'>800Gb Storage</p>
           <p className='py-2 border-b mx-8 '>6 Granted user</p>
           <p className='py-2 border-b mx-8 '>Send upto 10Gb</p>

           </div>
           <button className='bg-[#00df9a] hover:bg-[#030303]  rounded-md font-medium  w-[200px] my-6 hover:text-[#00df9a] mx-auto py-3 text-black'>Start Trail</button>

        </div>





      </div>
    </div>
  )
}

export default Cards