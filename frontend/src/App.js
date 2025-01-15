import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Services from './Pages/Services.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Navbar from './components/Navbar.jsx';
import { CssVarsProvider } from "@mui/joy/styles";

const App = () => {
  return (
    <CssVarsProvider>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
};

export default App;
