import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/register", {
        name,
        email,
        password,
      });
      console.log(result);
      alert("Register Successful !");
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center  bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navbar */}
      <nav className="bg-gray-900 py-4 shadow-lg w-full">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Token Auth Project</h1>
          <div className="space-x-6">
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link to="/login" className="hover:text-gray-300 transition">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300 transition">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Registration Form */}
      <div className="bg-white p-8 mt-4 rounded-lg shadow-lg w-full max-w-sm text-gray-900">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-700">Already Have an Account?</p>
          <Link to="/login">
            <button className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-2 hover:bg-gray-300 transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
