import React from 'react';
import Footer from '../../components/student/Footer';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className='bg-gray-900 text-white p-10 min-h-screen '>
        <div className='text-white p-10 bg-white rounded-lg shadow-lg max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-6 text-blue-500'>Privacy Policy</h1>
        <p className='text-lg text-gray-600'>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our services.</p>
        <h2 className='mt-6 text-2xl font-semibold text-blue-400'>Information We Collect</h2>
        <p className='text-gray-600'>We may collect personal information such as your name, email address, and payment details when you register for our services.</p>
        <h2 className='mt-6 text-2xl font-semibold text-blue-400'>How We Use Your Information</h2>
        <p className='text-gray-600'>We use your information to provide and improve our services, process payments, and communicate important updates.</p>
        <h2 className='mt-6 text-2xl font-semibold text-blue-400'>Your Rights</h2>
        <p className='text-gray-600'>You have the right to request access to your personal data, make corrections, or request deletion of your data.</p>
        <p className='mt-6 text-lg text-gray-600 text-center'>For more details, contact us at <strong><Link to ='https://mail.google.com'>privacy@stackflow.com</Link></strong>.</p>
        </div>
        <Footer/>
    </div>
    
  );
};

export default PrivacyPolicy
