import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../views/Loader/Loader";
import { FaInstagram } from "react-icons/fa";


const WithAuth = (WrappedComponent) => {
  return function ProtectedComponent(props) {
    // Accept props here
    const [isAuthorized, setIsAuthorized] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token || token.trim() === "") {
        setIsAuthorized(false);
        return;
      }

      axios
        .get("http://localhost:3000/users/authenticate", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("Authentication Response:", response.data);
          setIsAuthorized(response.data.message === "Authenticated");
        })
        .catch((error) => {
          console.error("Authentication Error:", error.response?.data || error);
          setIsAuthorized(false);
        });
    }, []);

    if (isAuthorized === null) {
      return <Loader />;
    }

    if (!isAuthorized) {
      return (
        <div className="unauthorized w-full h-screen flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl">Unauthorized! Please log in.</h1>
          <button
          onClick={()=>{navigate('/login')}}
          className="flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-md hover:opacity-90 transition duration-300">
            <FaInstagram className="text-xl" />
            Sign in with Instagram
          </button>
        </div>
      );
    }

    // Pass down all props to WrappedComponent
    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
