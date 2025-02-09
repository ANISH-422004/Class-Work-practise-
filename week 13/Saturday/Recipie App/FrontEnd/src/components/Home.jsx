import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      {/* ✅ Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">🍽️ RecipeZone</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 font-semibold hover:text-green-600 transition">Home</Link>
          <Link to="/login" className="text-gray-700 font-semibold hover:text-green-600 transition">login</Link>
          <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Create Account</Link>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl font-extrabold text-green-700">
          Discover & Share <span className="text-green-900">Delicious Recipes</span> 🍲
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mt-4">
          Welcome to <span className="font-semibold">RecipeZone</span> – your go-to destination for discovering amazing recipes from around the world. 
          Find your next favorite meal, share your own recipes, and connect with fellow food lovers! 
        </p>

        {/* ✅ CTA Button */}
        <Link to="/register">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 transition">
            Join Now for Free
          </button>
        </Link>
        <Link to="/feed">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 transition">
            Explore Recipies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
