import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SideNav from '../../components/SideNav'; // Importing SideNav

const CreatePost = () => {
  const [media, setMedia] = useState('');
  const [caption, setCaption] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Post submitted:', { media, caption });
    
    try {
      await axios.post('http://localhost:3000/posts/create', { media, caption }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      navigate('/profile');
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <SideNav />

      {/* Create Post Form */}
      <main className="flex justify-center items-center h-screen flex-grow bg-gray-100">
        <div className="bg-white p-5 rounded-lg shadow-md w-[400px]">
          <h2 className="text-center text-xl font-semibold mb-4">Create Post</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Media URL"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            {media && (
              <div className="w-full flex justify-center">
                <img
                  src={media}
                  alt="Preview"
                  className="object-cover w-[320px] h-[400px] rounded-md" // 4:5 aspect ratio
                />
              </div>
            )}
            <textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="border p-2 rounded-md w-full resize-none h-20"
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Post
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
