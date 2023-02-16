import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import fr from '../fr.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }

  return (
    <div className='flex w-full bg-white justify-between items-center h-20 pl-4 pr-4 sticky top-0 z-10'>   
      <div>
        <img src={fr} className={logo ? 'hidden' : 'block pt-2 w-20- h-20'} alt="logo" />
      </div>
      <ul className='hidden md:flex'>
        <li className='hover:underline hover:text-bold'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:underline hover:text-bold'>
          <Link to='events' smooth={true} duration={500}>
            Events
          </Link>
        </li>
        <li className='hover:underline hover:text-bold'>
          <Link to='gallery' smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
        <li className='hover:underline hover:text-bold'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
      </ul>
      <div className='hidden md:flex  hover:bg-transparent'>
        <ul>
        <li className='hover:underline hover:text-bold'>
          <Link to='contact' smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <FiMenu size={20} />}
      </div>

      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'} >
        <ul>
            <h1>FIESTA <br /> <h2 className='text-lg'>Republic</h2> </h1>
            <li className='border-b'>
              <Link to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='border-b'>
              <Link to='events' smooth={true} duration={500}>
                Events
              </Link>
            </li>
            <li className='border-b'>
              <Link to='gallery' smooth={true} duration={500}>
                Gallery
              </Link>
            </li>
            <li className='border-b'>
              <Link to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='border-b'>
              <Link to='contact' smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar;
