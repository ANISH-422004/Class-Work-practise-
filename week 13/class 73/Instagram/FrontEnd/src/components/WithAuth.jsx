import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../views/Loader/Loader";
import { FaInstagram } from "react-icons/fa";

const WithAuth = ({ children }) => {
  //children --> wrapedComponent
  
  //1️⃣ What is children in React?
  // In React, children is a special prop that is automatically passed to every component. It represents everything inside the opening and closing tags of a component.
  //children is a special prop automatically provided by React.
  //It represents everything inside a component's opening and closing tags.
  //React components are just functions that return JSX. The children prop allows components to be flexible and reusable by wrapping and rendering other components.

  // **** children is just a prop that React provides if you use JSX inside the component’s opening and closing tags. ****

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
          onClick={() => navigate("/login")}
          className="flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-md hover:opacity-90 transition duration-300"
        >
          <FaInstagram className="text-xl" />
          Sign in with Instagram
        </button>
      </div>
    );
  }

  return children; // 👈 Renders whatever was inside <WithAuth>...</WithAuth>
};

export default WithAuth;
