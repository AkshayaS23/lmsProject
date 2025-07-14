import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/student/Loading';
import { toast } from 'react-toastify';

const EnrollmentRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("Enrollment successful! 🎉");
    
    const timer = setTimeout(() => {
      navigate('/my-enrollments');
    }, 1500); // Redirect after 1.5 seconds

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return <Loading />;
};

export default EnrollmentRedirect;
