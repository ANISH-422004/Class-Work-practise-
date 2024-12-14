import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import Userdetail from "../components/Userdetail";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<Userdetail />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
