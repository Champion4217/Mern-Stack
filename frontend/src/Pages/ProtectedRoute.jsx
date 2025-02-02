import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/auth";


const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  return <Outlet />
  
};

export default ProtectedRoute;
