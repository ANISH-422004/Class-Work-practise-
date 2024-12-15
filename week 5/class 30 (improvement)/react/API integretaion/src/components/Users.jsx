import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Context";

const Users = () => {
  const { Users, setUsers } = useContext(UserContext);
//   console.log(Users, setUsers);

  return (
    <div className=" bg-slate-50 flex flex-col gap-2 items-center mt-5">
      <h1 className="text-3xl">UserList</h1>
      <div className=" flex flex-col gap-4">
        {Users.map((user) => {
          return (
            <Link  key={user.id} className=" bg-red-300 text-xl p-1 rounded-lg text-center capitalize  " to={`/users/${user.id}`}>
              {user.username}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
