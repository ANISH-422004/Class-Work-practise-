import React, { useContext } from "react";
import { Authcontext } from "../../context/AuthProvider";

const Alltasks = () => {
  const { user } = useContext(Authcontext);
  console.log(user);

  return (
    <div className="bg-[#1c1c1c] px-5 mt-5 rounded shadow-md">
      {/* Header Row */}
      <div className="bg-emerald-400 py-2 px-4 mt-2 flex justify-between items-center rounded ">
        <h2 className="w-1/5 text-white">Name</h2>
        <h3 className="w-1/5 text-blue-700">New Task</h3>
        <h5 className="w-1/5 text-yellow-500">Active Task</h5>
        <h5 className="w-1/5 text-white">Status</h5>
        <h5 className="w-1/5 text-red-500">Failed</h5>
      </div>

      {/* Data Rows */}
      <div id="alltasks" className="overflow-y-auto h-[40vh]">
        {user.employeesdata.map((e, idx) => (
          <div
            key={idx}
            className="border border-emerald-400 py-2 px-4 mt-2 flex flex-col md:flex-row justify-between items-center rounded"
          >
            {/* Desktop View */}
            <h2 className="w-full md:w-1/5 text-white">{e.firstname}</h2>
            <h3 className="w-full md:w-1/5 text-blue-700 text-center md:text-left">
              NewTask : {e.taskSummary.newTask}
            </h3>
            <h5 className="w-full md:w-1/5 text-yellow-500 text-center md:text-left">
              ActiveTask: {e.taskSummary.active}
            </h5>
            <h5 className="w-full md:w-1/5 text-white text-center md:text-left">
              CompletedTask : {e.taskSummary.completed}
            </h5>
            <h5 className="w-full md:w-1/5 text-red-500 text-center md:text-left">
              FiailedTask: {e.taskSummary.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alltasks;
