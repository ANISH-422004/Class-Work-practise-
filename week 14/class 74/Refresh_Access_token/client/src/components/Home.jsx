import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navbar */}
      <nav className="bg-gray-900 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Token Auth Project</h1>
          <div className="space-x-6">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
            <Link to="/register" className="hover:text-gray-300 transition">Register</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold mb-4">Access and Refresh Token Project</h2>
        <p className="text-lg max-w-2xl">
          Access and refresh tokens are used for authentication and session management. 
          The access token is short-lived and used to authenticate API requests, while the refresh token 
          is long-lived and helps generate new access tokens without requiring a re-login.
        </p>
      </section>
    </div>
  );
};

export default Home;
