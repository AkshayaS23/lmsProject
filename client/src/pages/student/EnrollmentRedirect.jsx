import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'; // ✅ IMPORT THIS
import Loading from '../../components/student/Loading';
import { toast } from 'react-toastify';

const EnrollmentRedirect = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser(); // ✅ USE IT HERE

  useEffect(() => {
    if (!isLoaded) return; // ✅ Wait for Clerk to load
    if (!isSignedIn) {
      toast.error("Please sign in to view enrollments");
      return;
    }

    toast.success("Enrollment successful! 🎉");

    const timer = setTimeout(() => {
      navigate('/my-enrollments');
    }, 1500);

    return () => clearTimeout(timer);
  }, [isLoaded, isSignedIn, navigate]);

  return <Loading />;
};

export default EnrollmentRedirect;
