import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth";


const Logout = () => {
  const navigate = useNavigate();
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser(); 
    navigate("/login"); 
  }, [LogoutUser, navigate]);

  return null; 
};

export default Logout;
