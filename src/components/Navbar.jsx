import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import fr from '../fr.svg';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }

  return (
    <div className='flex w-full bg-white justify-between items-center h-20 px-4 sticky top-0 z-10'>   
      <div>
        <img src={fr} className={logo ? 'hidden' : 'block pt-2 h-16 w-14'} alt="logo" />
      </div>
      <div>
      <h1 onClick={handleNav} className={logo ? 'hidden' : 'block text-xl '}>FIESTA <br/> <h2 className='text-xs'>Republic</h2></h1>
      </div>
      
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Events</li>
        <li>Gallery</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className='hidden md:flex'>
        <button>Log In</button>
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <FiMenu size={20} />}
      </div>

      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'} >
        <ul>
            <h1>FIESTA <br /> <h2 className='text-lg'>Republic</h2> </h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Events</li>
            <li className='border-b'>Gallery</li>
            <li className='border-b'>About</li>
            <li className='border-b'>Contact Us</li>
            <div className='flex flex-col'>
                <button className='my-6'>Log In</button>
            </div>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar;
