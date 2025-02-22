import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import SideNav from "../../components/SideNav"; // Import the SideNav component

const Profile = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/profile`, {
        headers: {
          authorization: "bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const LogOutHandeler = () => {
    axios
      .get(`http://localhost:3000/users/logout`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", "");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        // Even if logout call fails, you might want to remove token and redirect
        localStorage.removeItem("token");
        navigate("/login");
      });
  };

  return user ? (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar (Fixed & Full Height) */}
      <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md">
        <SideNav />
      </div>

      {/* Profile Content (Centered & Scrollable) */}
      <div className="ml-64 flex-grow p-6 flex justify-center overflow-y-auto h-screen">
        <div className="w-full max-w-3xl">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={user?.profileIamge}
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h1 className="text-lg font-semibold">{user.name}</h1>
                <div className="text-sm text-gray-500">
                  &bull; {user.posts?.length} posts &bull;{" "}
                  {user.followers?.length} followers &bull;{" "}
                  {user.following?.length} following
                </div>
              </div>
            </div>

            {/* Three Dot Menu with Hamburger */}
            <div className="relative">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars className="text-2xl cursor-pointer" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md z-10">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => LogOutHandeler()}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Instagram-like Posts Section */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {user?.posts?.map((post, i) => (
              <div key={i} className="relative">
                <img
                  src={post.media}
                  alt={`post ${i}`}
                  className="w-full h-48 sm:h-52 md:h-72 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Profile;
