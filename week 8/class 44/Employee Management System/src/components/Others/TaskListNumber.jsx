import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-4 mt-10">
      {/* New Task */}
      <div className="flex flex-col items-center justify-center px-4 py-6 w-full sm:w-[45%] md:w-[22%] bg-orange-400 rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold">{data.taskSummary.newTask}</h2>
        <h3 className="text-xl md:text-2xl font-semibold">New Task</h3>
      </div>
      {/* Completed Task */}
      <div className="flex flex-col items-center justify-center px-4 py-6 w-full sm:w-[45%] md:w-[22%] bg-blue-400 rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold">{data.taskSummary.completed}</h2>
        <h3 className="text-xl md:text-2xl font-semibold">Completed Task</h3>
      </div>
      {/* Accepted Task */}
      <div className="flex flex-col items-center justify-center px-4 py-6 w-full sm:w-[45%] md:w-[22%] bg-green-400 rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold">{data.taskSummary.active}</h2>
        <h3 className="text-xl md:text-2xl font-semibold">Accepted Task</h3>
      </div>
      {/* Failed Task */}
      <div className="flex flex-col items-center justify-center px-4 py-6 w-full sm:w-[45%] md:w-[22%] bg-yellow-400 rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold">{data.taskSummary.failed}</h2>
        <h3 className="text-xl md:text-2xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
