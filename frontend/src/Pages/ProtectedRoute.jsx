import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/auth";


const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  else{
    return <Outlet />
  }

  return children;
};

export default ProtectedRoute;
