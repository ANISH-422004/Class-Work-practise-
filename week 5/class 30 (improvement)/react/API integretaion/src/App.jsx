import React, { useState } from "react";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import Services from "./components/Services";

const App = () => {


  const addproduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronics",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="px-20 ">
      <nav className="  text-lg font-semibold flex items-center justify-center gap-5 mt-10">
        <Link to="/">HOME</Link>
        <Link to="/show">SHOW</Link>
        <Link to="/services">SERVICES</Link>
        
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/show" element={<Show/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
