import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ Extract `id` from the URL

  useEffect(() => {
    // ✅ Fetch user data when component mounts
    axios.get(`http://localhost:3000/getauser/${id}`) // Use correct backend URL
      .then((response) => {
        setName(response.data.name); // ✅ Set the state with fetched data
        setAge(response.data.age);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]); // ✅ Run only when `id` changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/update/${id}`, { name, age }); // ✅ Send updated data
      alert("User updated successfully!");
      navigate("/users"); // ✅ Redirect to users page after updating
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Update User</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter name"
            />
          </div>

          {/* Age Field */}
          <div>
            <label className="block text-gray-700 font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter age"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
