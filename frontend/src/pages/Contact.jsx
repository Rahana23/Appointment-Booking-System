import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className="text-gray-700 font-medium">US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-10 justify-center mb-28 text-sm'>
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />
        <div className='flex flex-col items-start gap-6 justify-center'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>54709 Williams Station <br /> Suite 350, Washington,USA</p>
          <p className='text-gray-500'>Tel: (+1)-222-345-6789 <br />Email: bookingsystem@gmail.com</p>
          <p className='flex flex-col items-start gap-6 justify-center'>Careers</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm rounded-full hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact