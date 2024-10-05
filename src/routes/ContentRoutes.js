import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'; 
import AboutUs from '../pages/AboutUs.js';
import Properties from '../pages/Properties';
import Services from '../pages/Services';
import Error from '../pages/Error'; 
import ContactUs from '../pages/ContactUs';

function ContentRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="*" element={<Error />} /> 
    </Routes>
  );
}

export default ContentRoutes;
