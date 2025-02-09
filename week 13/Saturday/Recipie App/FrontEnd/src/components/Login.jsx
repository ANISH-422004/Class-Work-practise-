import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Home from "./Home";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  axios.defaults.withCredentials = true;

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/user/login`, formData)
      .then((result) => {
        console.log(result);
        alert("Login successful!");
        navigate("/feed");
      })
      .catch((e) => {
        alert(e.response.data.massage);
        console.log(e);
      });

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Welcome Back! 🍽️
        </h2>
        <button
          onClick={() => navigate("/")}
          className="absolute top-5 left-5 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaHome/>
        </button>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Enter your password"
              />
              {/* Show/Hide Password Button */}
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-600 hover:text-gray-900"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
