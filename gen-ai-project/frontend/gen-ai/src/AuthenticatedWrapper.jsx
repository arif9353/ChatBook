// AuthenticatedWrapper.jsx
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom';

const AuthenticatedWrapper = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // or a loading spinner if you have one
  }

  if (!isAuthenticated) {
    // Redirect unauthenticated users
    return <Navigate to="/home2" replace />;
  }

  // If the user is authenticated, render the children
  return children;
};

export default AuthenticatedWrapper;
