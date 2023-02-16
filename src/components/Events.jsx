import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import logo from '../logo.svg'

const Events = () => {
  return (
    <div name='events'>
      <h1 className='text-2xl pt-16'>Events</h1>
      <div className='justify-center md-flex'>
        <div className=' w-[1083px] h-[365px] font-bold bg-stone-300 rounded-lg m-4 md-flex'>
          <div className='flex items-center'>
            <div className='md-flex bg-black rounded-lg'>
              <img src={logo} className='w-[270px] h-[365px] md-flex' alt='Logo' />
            </div>
            <div className='-rotate-90 bg-black rounded-lg w-[365px] h-[35px] p-2 md-flex'>
              <p className='text-white '>Fiesta Republic 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
