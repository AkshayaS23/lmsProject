import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation();
  const [subscribed, setSubscribed] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className='bg-gray-900 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row justify-between px-6 md:px-36 py-10 gap-10 border-b border-white/30'>

        {/* Logo and Description */}
        <div className='flex flex-col items-start w-full md:w-1/3'>
          <img src={assets.logo_dark1} alt="logo" className='w-25 lg:w-40' />
          <p className='mt-5 text-sm text-white/80'>
            Empowering learners and educators through high-quality education, bridging knowledge gaps, fostering skill development, and creating opportunities for growth in a dynamic and evolving digital learning environment.
          </p>
        </div>

        {/* Company Links */}
        <div className='flex flex-col items-start w-full md:w-1/3'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex flex-col space-y-2 text-sm text-white/80'>
            <li className='hover:text-blue-400 transition duration-300'><Link to="/" onClick={handleHomeClick}>Home</Link></li>
            <li className='hover:text-blue-400 transition duration-300'><Link to="/about">About us</Link></li>
            <li className='hover:text-blue-400 transition duration-300'><Link to="/contact">Contact us</Link></li>
            <li className='hover:text-blue-400 transition duration-300'><Link to="/privacy-policy">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='flex flex-col items-start w-full md:w-1/3'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/80 mb-4'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex flex-col sm:flex-row items-center w-full gap-3'>
            <input
              type="email"
              placeholder='Enter Your Email'
              className='border border-gray-500/30 bg-gray-800 text-gray-300 placeholder-gray-500 outline-none w-full sm:w-2/3 h-10 rounded px-3 text-sm'
            />
            <button
              className={`w-full sm:w-auto h-10 px-4 text-sm text-white rounded transition duration-300 ${subscribed ? 'bg-green-600' : 'bg-blue-600'}`}
              onClick={() => setSubscribed(true)}
              disabled={subscribed}
            >
              {subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>
        Copyright 2025 © Stackflow. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
