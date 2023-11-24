import { Route, Routes } from "react-router-dom";
import React from 'react';
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const RoutesMain = () => {

   return (
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
      </Routes>
   );
};