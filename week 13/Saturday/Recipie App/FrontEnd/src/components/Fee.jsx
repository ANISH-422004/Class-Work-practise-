import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Dummy data (Replace with API data)
const recipes = [
  {
    id: 1,
    title: "Pumpkin Soup 🎃",
    image: "https://source.unsplash.com/600x400/?pumpkin,soup",
    description: "A delicious and creamy pumpkin soup perfect for fall!",
  },
  {
    id: 2,
    title: "Classic Spaghetti 🍝",
    image: "https://source.unsplash.com/600x400/?pasta",
    description: "A rich tomato-based spaghetti recipe with fresh basil.",
  },
];

const Fee = () => {
  const navigate = useNavigate();


  const logoutHandler = () => {
    axios.get("http://localhost:3000/user/logout", { withCredentials: true })
      .then(() => {
        alert("Logged out successfully!");
        navigate("/")
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      {/* ✅ Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">🍽️ Food Recipe</h1>
        <div className="space-x-6">
          <Link
            to="/create"
            className="text-gray-700 font-semibold hover:text-green-600 transition"
          >
            Create
          </Link>
          <Link
            to="/saved"
            className="text-gray-700 font-semibold hover:text-green-600 transition"
          >
            Saved Recipes
          </Link>
          <button
            onClick={() => {
              logoutHandler();
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            LogOut
          </button>
        </div>
      </nav>

      {/* ✅ Recipes Section */}
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Recipes</h2>

        {/* ✅ Recipe Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-xl font-semibold text-green-700 hover:underline"
                >
                  {recipe.title}
                </Link>
                <p className="text-gray-600 mt-2">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fee;
