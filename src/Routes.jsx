import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeCom from "./Components/home";
import ProjectsCom from "./Components/projectsCom";
import AboutCom from "./Components/aboutCom";
import ContactCom from "./Components/contactCom";

const Routerr = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeCom />} />
        <Route path="/projects" element={<ProjectsCom />} />
        <Route path="/about" element={<AboutCom />} />
        <Route path="/contact" element={<ContactCom />} />
        <Route path="/" element={<HomeCom />} />
      </Routes>
    </div>
  );
};

export default Routerr;
