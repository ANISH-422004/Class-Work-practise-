import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../views/register/Register";
import Login from "../views/login/Login";
import Profile from "../views/profile/Profile";
import WithAuth from "../components/WithAuth";

const ProfileWithAuth = WithAuth(Profile); // Define it outside the component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<ProfileWithAuth />} />
      {/* This now correctly passes props */}
    </Routes>
  );
};

export default AppRoutes;
