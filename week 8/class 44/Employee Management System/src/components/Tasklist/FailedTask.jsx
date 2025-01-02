import React from "react";

const FailedTask = ({task}) => {
  return (
    <>
      <div className=" h-[50vh] w-80 bg-red-400 rounded-xl ml-2 flex-shrink-0 p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center ">
          <h1 className="bg-red-600 rounded-xlw px-2">{task.category}</h1>
          <h3 className="text-sm font-mono">{task.taskDate}</h3>
        </div>
        <h1 className="mt-5 text-2xl font-bold">{task.taskTitle}</h1>
        <p className="text-lg font-light ">{task.taskDescription}</p>
        <div className="mt-4">
          <button className="bg-orange-300 px-2 py-1 text-sm rounded-sm w-full">
            Complete Again
          </button>
        </div>
      </div>
    </>
  );
};

export default FailedTask;
