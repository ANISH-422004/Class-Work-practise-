import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const ShowRecipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {id} = useParams()
  const [recipe, setrecipe] = useState(null)

  console.log(id)
  useEffect(()=>{
    axios.get(`http://localhost:3000/recipe/getArecipie/${id}`).then((response)=>{console.log(response.data.massage)
        setrecipe(response.data.massage)
    }).catch((err)=>{console.log(err)})
  },[])


  return recipe ? (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* ✅ Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaArrowLeft className="w-6 h-6 text-green-600" />
        </button>

        {/* ✅ Recipe Title */}
        <h2 className="text-3xl font-bold text-green-600 mb-4">{recipe.title}</h2>

        {/* ✅ Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-lg shadow-md"
        />

        {/* ✅ Recipe Description */}
        <p className="text-gray-700 mt-4">{recipe.description}</p>
      </div>
    </div>
  ):(
    <h1>Loading...</h1>
  )
};

export default ShowRecipe;
