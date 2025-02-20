import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav";
import axios from "axios";
import Loader from "../Loader/Loader";
import { FaHeart } from "react-icons/fa6";
import { LiaCommentSolid } from "react-icons/lia";
import { IoShareSocial } from "react-icons/io5";

const PersonalFeed = () => {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem("userId"); // Get logged-in user ID

  useEffect(() => {
    axios
      .get("http://localhost:3000/feed", {
        headers: {
          authorization: "bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Handle Like Toggle



  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md">
        <SideNav />
      </div>

      {/* Feed Section */}
      <div className="flex-grow ml-64 p-4 overflow-y-auto h-screen flex justify-center">
        {posts.length === 0 ? (
          <Loader />
        ) : (
          <main className="w-full max-w-md pt-5">
            {posts.map((post) => {
              const isLiked = post.likes.includes(userId); // Check if user liked the post

              return (
                <div key={post._id} className="bg-white shadow-md rounded-lg mb-2">
                  {/* Profile Section */}
                  <div className="flex items-center p-3">
                    <img
                      src={post.author?.profileIamge}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="ml-3 font-semibold">{post.author?.name}</span>
                  </div>

                  {/* Post Media */}
                  <img src={post.media} alt="Post" className="w-full object-cover" />

                  {/* Post Actions */}
                  <div className="p-3">
                    <div className="flex items-center space-x-4 text-2xl">
                      {/* Like Button with Color Toggle */}
                      <button onClick={() => handleLike(post._id)}>
                        <FaHeart color={isLiked ? "red" : "black"} />
                      </button>
                      <button>
                        <LiaCommentSolid />
                      </button>
                      <button>
                        <IoShareSocial />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{post.likes.length} Likes</p>
                    <p className="mt-1">
                      <span className="font-semibold">{post.username} </span>
                      {post.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </main>
        )}
      </div>
    </div>
  );
};

export default PersonalFeed;
