import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { loading, currentUser } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // Spinner while loading
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f7e1b5]">
        <div className="w-16 h-16 border-4 border-[#53310e] border-t-[#f7e1b5] rounded-full animate-spin"></div>
      </div>
    );
  }

  return currentUser ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
