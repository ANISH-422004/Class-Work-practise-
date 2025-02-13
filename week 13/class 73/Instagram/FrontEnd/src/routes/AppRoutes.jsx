import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Register from "../views/register/Register";
import Login from "../views/login/Login";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login"  element={<Login/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
