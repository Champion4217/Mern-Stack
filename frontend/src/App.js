import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Services from './Pages/Services.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import { CssVarsProvider } from "@mui/joy/styles";
import Footer from './components/Footer.jsx';
import ProtectedRoute from './Pages/ProtectedRoute.jsx';
import Logout from './Pages/Logout.jsx';

const App = () => {
  return (
    <CssVarsProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes: Login and Signup */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Protected Route: Only accessible if logged in */}
          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/logout' element={<Logout />} />
          </Route>

          {/* Redirect to login if no route matches */}
          <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
        
        {/* Footer will now only show if the user is logged in */}
        <Footer />
      </BrowserRouter>
    </CssVarsProvider>
  );
};

export default App;
