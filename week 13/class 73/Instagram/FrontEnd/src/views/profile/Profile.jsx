import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Profile = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/profile`, {
        headers: {
          authorization: "bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.user);
        setuser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return user ? (
<div className="flex flex-col items-center p-4">
  {/* Profile Header */}
  <div className="flex items-center w-full max-w-2xl justify-between mb-6">
    <div className="flex items-center space-x-4">
      <img
        src={user?.profileIamge}
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h1 className="text-lg font-semibold">{user.name}</h1>
        <div className="text-sm text-gray-500">
          &bull; {user.posts?.length} posts &bull; {user.followers?.length}{" "}
          followers &bull; {user.following?.length} following
        </div>
      </div>
    </div>
    {/* Three Dot Menu with Hamburger */}
    <div className="relative">
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className="text-2xl cursor-pointer" />
      </button>
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md">
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              localStorage.setItem("token","")
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  </div>

  {/* Instagram-like Posts Section */}
  <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 w-full max-w-3xl">
    {user?.posts?.map((post, i) => (
      <div key={i} className="relative group">
        <img
          src={post.media}
          alt={`post ${i}`}
          className="w-full h-52  sm:h-48 md:h-72 object-cover"
        />

      </div>
    ))}
  </div>
</div>

  ) : (
    <Loader />
  );
};

export default Profile;
