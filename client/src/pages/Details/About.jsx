import React from 'react';
import Footer from '../../components/student/Footer';

const About = () => {
  return (
    <div className='bg-gray-900 text-white p-10 min-h-screen text-center'>
      <h1 className='text-4xl font-extrabold text-blue-400 mb-6'>About Us</h1>
      <p className='text-lg text-gray-300 leading-relaxed'>
        We are a leading online learning platform dedicated to providing high-quality educational content for learners worldwide. Our mission is to bridge the gap between knowledge and opportunity by offering a wide range of courses across various disciplines.
      </p>
      <p className='text-lg text-gray-300 leading-relaxed mt-4'>
        Our team consists of experienced educators, industry professionals, and technology experts who create engaging and effective learning experiences. With interactive lessons, real-world projects, and a supportive community, we ensure that our learners receive the best education possible.
      </p>
      <p className='text-lg text-gray-300 leading-relaxed mt-4 mb-20'>
        Join us on this journey of knowledge and growth!
      </p>
      <Footer/>
    </div>
  );
};

export default About
