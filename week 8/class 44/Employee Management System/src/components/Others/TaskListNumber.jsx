import React from "react";

const TaskListNumber = ({data}) => {
  // console.log(data);
  

  return (
    <div className="flex justify-between mt-10 gap-2 ">
      <div className=" px-9 py-6 w-[45%] bg-orange-400 rounded-xl">
        <h2 className="text-4xl font-bold">{data.taskSummary.newTask}</h2>
        <h3 className="text-2xl font-semibold">NewTask</h3>
        </div>
        <div className=" px-9 py-6 w-[45%] bg-blue-400 rounded-xl">
        <h2 className="text-4xl font-bold">{data.taskSummary.completed}</h2>
        <h3 className="text-2xl font-semibold">Completed Task</h3>
        </div>
        <div className=" px-9 py-6 w-[45%] bg-green-400 rounded-xl">
        <h2 className="text-4xl font-bold">{data.taskSummary.active}</h2>
        <h3 className="text-2xl font-semibold">Accepted Task</h3>
        </div>
        <div className=" px-9 py-6 w-[45%] bg-yellow-400 rounded-xl">
        <h2 className="text-4xl font-bold">{data.taskSummary.failed}</h2>
        <h3 className="text-2xl font-semibold">Failed Task</h3>
        </div>
        
    </div>
  );
};

export default TaskListNumber;
