import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import logo from '../logo.svg'
import Dropdown from './Dropdown'

const Events = () => {
  return (
    <div name='events'>
      <h1 className='text-2xl pt-16'>Events</h1>
      <div className='bg-gray-200 rounded-lg m-10 mx-24 text-black flex flex-wrap mb-8 flex-row'>
        <div className='bg-black rounded-lg'>
          <img src={logo} className='rlative w-auto md:max-w-xs' alt='logo' />
        </div>
        <div className='p-8'>
          <h2 className='text-xs'>Art Festival 2023</h2>
        </div>
        <div>
            <Dropdown />
        </div>
        
      </div>
      <section>
        <div className='bg-gray-200 rounded-lg m-10 mx-24 text-black flex flex-wrap mb-8 flex-row'>
          <div className='bg-black rounded-lg'>
            <img src={logo} className='relative w-full md:max-w-xs md:max-h-full-48 object-cover' alt="logo" />
          </div>
          <div className='relative flex flex-col p-4'>
            <h1 className='text-3xl mb-2'>Art festival</h1>
          </div>
          <div className='bg-black text-white'>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
