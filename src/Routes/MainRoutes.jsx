import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound/>}></Route> 
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default MainRoutes;
