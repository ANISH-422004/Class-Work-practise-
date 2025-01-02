import React, { useContext } from "react";
import { Authcontext } from "../../context/AuthProvider";

const Alltasks = () => {
  const {user,setUser} = useContext(Authcontext);
    console.log(user);
    
  return (  
    <div  className="bg-[#1c1c1c] px-5 mt-5 h-40   rounded">
      <div  className="bg-emerald-400 py-2 px-4 mt-2 flex justify-between items-center rounded ">
        <h2 className="w-1/5  text-white">Name</h2>
        <h3 className="w-1/5  text-blue-700">New Task</h3>
        <h5 className="w-1/5  text-yellow-500">Active Task</h5>
        <h5 className="w-1/5  text-white">Status</h5>
        <h5 className="w-1/5  text-red-500">Failed</h5>
      </div>

      <div id="alltasks" className="overflow-y-auto h-[20vh]">
        {user.employeesdata.map((e,idx) => {
          return (
            <div id="employesslist "  key={idx}className="border border-emerald-400 py-2 px-4 mt-2 flex justify-between items-center rounded  ">
              <h2 className="w-1/5  text-white">{e.firstname}</h2>
              <h3 className="w-1/5  text-blue-700">{e.taskSummary.active}</h3>
              <h5 className="w-1/5  text-yellow-500">{e.taskSummary.newTask}</h5>
              <h5 className="w-1/5  text-white">{e.taskSummary.completed}</h5>
              <h5 className="w-1/5  text-red-500">{e.taskSummary.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltasks;
