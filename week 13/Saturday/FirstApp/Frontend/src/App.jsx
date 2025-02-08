import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./components/Create";
import UserCards from "./components/UserCards";
import Update from './components/Update'

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getalluser")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  }, []);

  return (
    <div className="min-h-screen w-full h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Navbar */}
      <nav className="bg-blue-600  w-full max-w-3xl p-4 rounded-lg shadow-md flex gap-10">
        <Link to="/createuser" className="text-white font-semibold hover:underline">
          ➕ Create User
        </Link>
        <Link to="/users" className="text-white font-semibold hover:underline">
          👥 Show Users
        </Link>
      </nav>

      {/* Routes */}
      <div className="w-full max-w-3xl mt-6">
        <Routes>
          <Route path="/createuser" element={<Create />} />
          <Route path="/users" element={<UserCards users={users} />} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
