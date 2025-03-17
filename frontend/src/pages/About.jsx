import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Appointo, an efficient and user-friendly Bank Appointment Booking System designed to streamline banking services. Our platform allows customers to schedule appointments online, reducing wait times and ensuring smooth operations at the bank.

With features like priority-based booking, first-come-first-serve scheduling, Aadhaar verification, and an AI-powered chatbot, we aim to provide a seamless and hassle-free banking experience.

Our goal is to enhance customer satisfaction by minimizing queues and offering a structured appointment system for various banking needs such as account opening, loan consultation, document verification, and more.

Join us in making banking services more accessible, convenient, and time-efficient!

</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Appointo is to create a seamless banking experience for every user. We aim to bridge the gap between users and bank, making it easier for you to access the services you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted banking professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Recommend the nearest or least crowded bank branch for faster service.</p>
        </div>
      </div>

    </div>
  )
}

export default About
