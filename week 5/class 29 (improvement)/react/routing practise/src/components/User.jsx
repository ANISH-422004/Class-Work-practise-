import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="w-full flex flex-col items-center  ">
      <div className="flex  w-[20%] flex-col gap-3 my-5 pb-5  border-grey border-b-4">
        <Link
          to="/user/anish"
          className="p-3  bg-red-300 text-2xl hover:bg-red-400 rounded"
        >
          Anish
        </Link>
        <Link
          to="/user/simi"
          className="p-3  bg-red-300 text-2xl hover:bg-red-400 rounded"
        >
          Simi
        </Link>
        <Link
          to="/user/agniv"
          className="p-3  bg-red-300 text-2xl hover:bg-red-400 rounded"
        >
          Agniv
        </Link>
        



      </div>
      <Outlet/>
      
    </div>
  );
};

export default User;
