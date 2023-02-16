import React from 'react'
import bgImg from '../assets/about.jpg'
import {BsInstagram, BsWhatsapp, BsTwitter} from 'react-icons/bs'

const About = () => {
  return (
    <div name='about'>
      <h1 className='text-2xl pt-20'>About</h1>
        <div className='grid md:grid-cols-2 max-w-[1340px] m-10'>
            <div className='flex flex-col justify-center md:items-center w-full px-2'>
              <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className='icon flex flex-col justify-center md:items-center w-full px-2'>
                <img src={bgImg} className='rounded-lg' alt="about" />
            </div>
      </div>
    </div>
  )
} 

export default About
