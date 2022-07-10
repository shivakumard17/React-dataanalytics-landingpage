import {React , useState }from 'react';
import {AiOutlineClose ,AiOutlineMenu} from "react-icons/ai";



function NavBar() {

      const [nav , setNav]=useState(true);

      const handleNav=()=>{
        setNav(!nav);
      }


  return (
    <div className="flex    justify-between items-center  h-24 max-w-[1240px] mx-auto px-4  text-white">
        
        <h1 className='w-full text-3xl font-bold text-[#00df9a]  '>React.</h1>
        <ul className=' hidden md:flex'>
           <li className='p-4 hover:text-[#00df9a]'>Home</li>
           <li className='p-4 hover:text-[#00df9a]'>Company</li>
           <li className='p-4 hover:text-[#00df9a]'>Resources</li>
           <li className='p-4 hover:text-[#00df9a]'>About</li>
           <li className='p-4 hover:text-[#00df9a]  '>Contact</li>

        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav? <AiOutlineClose size={20} />:<AiOutlineMenu size={20} />}
          
        </div>

        <div className={!nav?'fixed left-0 top-0 w-[60%] border-r  border-gray-900 h-full bg-black ease-in-out duration-500  md:hidden':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 pt-3 '>React.</h1>
           <ul className='p-3 ' >
           <li className='p-3 hover:text-[#00df9a]  border-b border-gray-900'>Home</li>
           <li className='p-3 hover:text-[#00df9a]  border-b border-gray-900'>Company</li>
           <li className='p-3 hover:text-[#00df9a]  border-b border-gray-900'>Resources</li>
           <li className='p-3 hover:text-[#00df9a]  border-b border-gray-900'>About</li>
           <li className='p-3 hover:text-[#00df9a] '>Contact</li>

        </ul></div>


    </div>
  )
}

export default NavBar