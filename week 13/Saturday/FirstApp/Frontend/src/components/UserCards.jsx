import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const UserCards = ({ users }) => {
  const deleteHandeler = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then(() => {
        window.location.reload();
        console.log("userDeleted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-screen ">
      {users.length > 0 ? (
        users.map((user, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded p-4 mb-4 flex justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-700">Age: {user.age}</p>
            </div>
            <div>
              <button
                className="bg-red-500 text-white p-1 rounded m-1"
                onClick={() => {
                  deleteHandeler(user._id);
                }}
              >
                Delete
              </button>
              <Link
                className="bg-blue-500 text-white p-1 rounded"
                to = {`http://localhost:5173/update/${user._id}`}
              >
                Update
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default UserCards;
