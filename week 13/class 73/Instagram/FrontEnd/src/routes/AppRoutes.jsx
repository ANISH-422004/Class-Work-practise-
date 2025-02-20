import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../views/register/Register";
import Login from "../views/login/Login";
import Profile from "../views/profile/Profile";
import WithAuth from "../components/WithAuth";
import CreatePost from "../views/create-Post.jsx/CreatePost";
import PersonalFeed from "../views/PersonalFeed/PersonalFeed";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<WithAuth><Profile /></WithAuth>} />
      <Route path="/create-post" element={<WithAuth><CreatePost/></WithAuth>} />
      <Route path="/feed" element={<WithAuth><PersonalFeed/></WithAuth>} /> 
    </Routes>
  );
};

export default AppRoutes;
