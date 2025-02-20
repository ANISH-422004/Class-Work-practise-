import React from "react";
import igLogo from "../assets/InstaLogo.webp";
import { IoHomeSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FiMessageCircle } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { Link } from "react-router-dom";


const SideNav = () => {
  return (
    <div className=" w-64 bg-white h-screen shadow-md flex flex-col p-4 space-y-6">
      {/* Profile Section */}
      <div className="flex items-center space-x-3 p-2">
        <img className="w-40" src={igLogo} alt="" />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <Link
          to="/feed"
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100"
        >
          <IoHomeSharp /> <span>Home</span>
        </Link>
        <Link className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
          <CiSearch /> <span>Search</span>
        </Link>
        <Link className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
          <MdOutlineExplore />
          <span>Explore</span>
        </Link>
        <Link className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
          <SiYoutubeshorts />
          <span>Reels</span>
        </Link>
        <Link className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
          <FiMessageCircle /> <span>Messages</span>
        </Link>
        <Link className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
          <FaHeart /> <span>Notifications</span>
        </Link>
        <Link
          to="/create-post"
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100"
        >
          <FaPlus />
          <span>Create</span>
        </Link>
        <Link  
        to="/profile"
        className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
          <CgProfile />
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
