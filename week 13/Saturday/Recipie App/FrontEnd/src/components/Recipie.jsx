import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Recipie = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/recipe/create", formData)
      .then((result) => {
        console.log("Recipe Created:", result.data);
        alert("Recipe added successfully!");
        navigate("/feed"); // ✅ Redirect to the Recipe Feed page
      })
      .catch((err) => {
        console.error("Error creating recipe:", err);
        alert("Failed to create recipe. Please try again.");
      });

    setFormData({
      title: "",
      image: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Create a New Recipe 🍽️
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title Field */}
          <div>
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter recipe title"
            />
          </div>

          {/* Image URL Field */}
          <div>
            <label className="block text-gray-700 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Paste image URL"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter recipe description"
              rows="3"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recipie;
