import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaChartBar } from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/dashboard")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
        <h2 className="text-2xl font-bold text-center mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <Link
            to="/"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-md transition"
          >
            <FaHome /> <span>Home</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-md transition"
          >
            <FaUser /> <span>Profile</span>
          </Link>
          <Link
            to="/analytics"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-md transition"
          >
            <FaChartBar /> <span>Analytics</span>
          </Link>
          <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition w-full mt-6">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Navbar */}
        <header className="bg-white shadow-md py-4 px-6 flex justify-between">
          <h1 className="text-2xl font-semibold">Token Auth Project</h1>
          <p className="text-gray-600">Welcome, User</p>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <h2 className="text-xl font-semibold">Users</h2>
              <p className="text-3xl font-bold text-blue-600">120</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <h2 className="text-xl font-semibold">Active Sessions</h2>
              <p className="text-3xl font-bold text-green-600">45</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <h2 className="text-xl font-semibold">Requests</h2>
              <p className="text-3xl font-bold text-purple-600">876</p>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
            <ul className="space-y-3">
              <li className="border-b pb-2">
                ✅ User <strong>JohnDoe</strong> logged in.
              </li>
              <li className="border-b pb-2">
                🔄 Refresh token was issued for <strong>JaneDoe</strong>.
              </li>
              <li className="border-b pb-2">
                ❌ Unauthorized request blocked.
              </li>
              <li className="border-b pb-2">
                📝 New user <strong>Mike123</strong> registered.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
