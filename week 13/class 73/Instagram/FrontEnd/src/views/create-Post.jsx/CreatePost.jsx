import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import SideNav from '../../components/SideNav';

const CreatePost = () => {
  const [media, setMedia] = useState('');
  const [mediaPreview, setMediaPreview] = useState('');
  const [caption, setCaption] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
      setMediaPreview(URL.createObjectURL(file));
    }
  };

  const handleGenerateCaption = async () => {
    try {
      const response = await axios.get('http://localhost:3000/ai/generateCaption');
      setCaption(response.data.caption);
    } catch (error) {
      setError('Failed to generate caption.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!media) {
      setError('Please select a media file.');
      return;
    }

    const formData = new FormData();
    formData.append('media', media);
    formData.append('caption', caption);

    try {
      await axios.post('http://localhost:3000/posts/create', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
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
        <div className="bg-white p-5 rounded-lg shadow-md w-[400px] relative">
          {/* Create Caption Button (Top Right) */}
          <Link
            onClick={handleGenerateCaption}
            className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 text-sm rounded-md hover:bg-pink-600"
          >
            AICaption
          </Link>

          <h2 className="text-center text-xl font-semibold mb-4">Create Post</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="file"
              accept="image/*, video/*"
              onChange={handleFileChange}
              className="border p-2 rounded-md w-full"
            />

            {mediaPreview && (
              <div className="w-full flex justify-center">
                {media.type?.startsWith('image/') ? (
                  <img src={mediaPreview} alt="Preview" className="object-cover w-[320px] h-[400px] rounded-md" />
                ) : (
                  <video controls className="object-cover w-[320px] h-[400px] rounded-md">
                    <source src={mediaPreview} type={media.type} />
                  </video>
                )}
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
