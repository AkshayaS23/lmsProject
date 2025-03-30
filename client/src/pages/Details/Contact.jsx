import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";

const Contact = () => {
    return (
        <div className='bg-gray-900 text-white p-10 min-h-screen '>
            <div className='text-white p-10 bg-white rounded-lg shadow-lg max-w-xl mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-6 text-blue-500'>Contact Us</h1>
                <p className='text-lg text-gray-600 text-center'>Have questions or need support? <br/>We're here to help! Reach out to us using the following methods:</p>
                <div className='mt-6'>
                    <p className='text-gray-600 text-center'><strong>Email:</strong> support@stackflow.com</p>
                    <p className='text-gray-600 text-center'><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p className='text-gray-600 text-center'><strong>Address:</strong> 123 Learning Street, Education City, USA</p>
                </div>
                <p className='mt-6 text-lg text-gray-600 text-center'>Follow us on social media for updates and announcements:</p>
                <div className='flex justify-center space-x-4 mt-4 mb-20'>
                   <a href="https://facebook.com"> <img src={assets.facebook_icon} alt="facebook_icon" /></a>
                   <a href="https://twitter.com"><img src={assets.twitter_icon} alt="twitter_icon" /></a>
                   <a href="https://www.instagram.com/"><img src={assets.instagram_icon} alt="instagram_icon" /></a>
                           
                </div>
        </div>
        <Footer/>
      </div>
    );
  };
  
export default Contact
