import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Kodr from "./pages/Kodr";
import NavBar from "./Components/NavBar";
import  Coursedetails from './pages/Coursedetails'
import Mentordescription from "./pages/Mentordescription";
const App = () => {


  return (
    <div>
      <NavBar></NavBar>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:coursename" element={<Coursedetails/>} />
        <Route path="/courses/:coursename/:mentor" element={<Mentordescription/>} />
        <Route path="/about" element={<About />} />
        <Route path="/kodr" element={<Kodr />} />
      </Routes>
    </div>
  );
};

export default App;
