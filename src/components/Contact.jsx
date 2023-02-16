import React from 'react'
import {BsInstagram, BsWhatsapp, BsTwitter} from 'react-icons/bs'

const Contact = () => {
  return (
    <div name='contact'>
      <h1 className='text-2xl pt-10'>Contact Us</h1>
      <div className='grid md:grid-cols-3 divide-x divide-black pt-10'>
        <div>
            <h1 className='text-xl font-normal pb-2'>PHONE</h1>
            <p className='font-bold pb-6'>+91 8982568710</p>
        </div>
        <div>
            <h1 className='text-xl font-normal pb-2'>E-MAIL</h1>
            <p className='font-bold pb-6'>fiestarepublic@gmail.com</p>
        </div>
        <div>
            <h1 className='text-xl font-normal pb-2'>SOCIALS</h1>
            <div className=' flex justify-center'>
                <BsInstagram className='px-2 w-10 h-10 cursor-pointer'/>
                <BsTwitter className='px-2 w-10 h-10 cursor-pointer'/>
                <BsWhatsapp className='px-2 w-10 h-10 cursor-pointer'/>
            </div>
        </div>
        
      </div>
      <div className='flex  justify-center pt-10 pb-10'>
      <div className='bg-slate-100 rounded-lg border border-slate-800 p-10 w-3/4'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-xl font-semibold'>Subscribe to our Newsletter</h1>
                <p className=''>Subscribe to our Newsletter to get updates on all the exclusive events</p>
                <input text='text' placeholder='Your email address' className='border-2 rounded-xl w-auto h-8 px-4'></input>
                <button className='rounded-xl'>Subscribe</button>
                <p className='text-sm  underline underline-offset-auto hover:font-semibold cursor-pointer'>No thanks</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
