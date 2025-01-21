import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));  

  const storetokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // Update token state
  };

  const LogoutUser = () => {
    setToken(''); // Clear token state
    localStorage.removeItem("token");
  };

  const isLoggedIn = !!token; // Reactively computed from token

  console.log("isLoggedIn:", isLoggedIn);

  return (
    <AuthContext.Provider value={{ storetokenInLS, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
