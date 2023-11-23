import { Route, Routes } from "react-router-dom";
import React from 'react';
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Projects } from "../pages/Projects";


export const RoutesMain = () => {

   return (
      <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} /> */}
      </Routes>
   );
};