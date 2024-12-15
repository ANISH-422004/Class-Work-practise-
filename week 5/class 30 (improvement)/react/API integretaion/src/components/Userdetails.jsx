import React, { useContext } from "react";
import { UserContext } from "./Context";
import { useNavigate, useParams } from "react-router-dom";

const Userdetails = () => {
  const { Users, setUsers } = useContext(UserContext);
  const routenum = useParams();
  const navigate =  useNavigate()
//   console.log(Users[routenum.id]);

  return (
    <div className="flex justify-center">
      <div className="w-[90%] h-[20vh] ">
            <h1 className="text-lg text-red-300 text-center font-bold">id : {Users[routenum.id].id}</h1>
            <h1 className="text-lg text-red-300 text-center font-bold">name : {Users[routenum.id].username}</h1>
            <h1 className="text-lg text-red-300 text-center font-bold">city : {Users[routenum.id].city}</h1>
            <button onClick={()=>navigate(-1)} className="bg-red-500 p-1 rounded-lg">Go Back</button>
      </div>
    </div>
  );
};

export default Userdetails;
