import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src= {assets.logo_dark1} alt="logo" className='w-25 lg:w-40'/>
          <p className='mt-5 text-left md-text-left text-sm text-white/80'>Empowering learners and educators through high-quality education, bridging knowledge gaps, fostering skill development, and creating opportunities for growth in a dynamic and evolving digital learning environment..</p>
        </div>
        <div className='flex flex-col ml-40 md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
          <li className='hover:text-blue-400 transition duration-300'><Link to="/" onClick={handleHomeClick}>Home</Link></li>
          <li className='hover:text-blue-400 transition duration-300'><Link to="/about">About us</Link></li>
          <li className='hover:text-blue-400 transition duration-300'><Link to="/contact">Contact us</Link></li>
          <li className='hover:text-blue-400 transition duration-300'><Link to="/privacy-policy">Privacy policy</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='md:flex flex-col items-center gap-2 pt-4'>
            <input type="email" placeholder='Enter Your Email'
            className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
            <button 
          className={`w-24 h-9 text-white rounded transition duration-300 ${
            subscribed ? 'bg-green-600' : 'bg-blue-600'
          }`}
          onClick={() => setSubscribed(true)}
          disabled={subscribed}>
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
          </div>
           
        </div>

      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 © Stackflow. All Right Reserved.</p>
    </footer>
  )
}

export default Footer
