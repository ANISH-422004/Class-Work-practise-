import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users/login", { email, password })
      .then((res) => {
        console.log(res);
        setError("");
        localStorage.setItem("token", res.data.token);
        navigate("/profile");
      })
      .catch((e) => {
        console.error(e);
        setError(e.response?.data?.errors || "Something went wrong!");
      });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="bg-white p-8 shadow-lg rounded-lg w-96 border border-gray-200">
        {/* Instagram Logo (Placeholder) */}
        <h1 className="text-4xl font-bold text-center font-serif text-gray-800">
          Instagram
        </h1>

        {/* Signup Text */}
        <p className="text-gray-500 text-center mt-2">
          Login to see photos and videos from your friends.
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="mt-4 flex flex-col">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Mobile Number or Email"
            className="p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          {error &&
            (Array.isArray(error) ? (
              error.map((e, i) => (
                <p key={i} className="text-red-500 text-sm text-center">
                  {e.msg + " !"}
                </p>
              ))
            ) : (
              <p className="text-red-500 text-sm text-center">{error + " !"}</p>
            ))}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
          >
            Sign up
          </button>
        </form>

        {/* Terms & Policies */}
        <p className="text-xs text-gray-500 text-center mt-4 ">
          <Link to="/register" className="hover:text-blue-400">
            Don't Have a Account ?{" "}
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
