import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/student/Loading';
import { toast } from 'react-toastify';

const EnrollmentRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("✅ EnrollmentRedirect mounted");
    toast.success("Enrollment successful! 🎉");
    
    const timer = setTimeout(() => {
      console.log("⏭ Redirecting now");
      navigate('/my-enrollments');
    }, 1500); // Redirect after 1.5 seconds

    return () => clearTimeout(timer); 
  }, [navigate]);

  return <Loading />;
};

export default EnrollmentRedirect;
