import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex justify-between mt-10 gap-2 ">
      <div className=" px-9 py-6 w-[45%] bg-orange-400 rounded-xl">
        <h2 className="text-4xl font-bold">0</h2>
        <h3 className="text-2xl font-semibold">NewTask</h3>
        </div>
        <div className=" px-9 py-6 w-[45%] bg-blue-400 rounded-xl">
        <h2 className="text-4xl font-bold">0</h2>
        <h3 className="text-2xl font-semibold">NewTask</h3>
        </div>
        <div className=" px-9 py-6 w-[45%] bg-green-400 rounded-xl">
        <h2 className="text-4xl font-bold">0</h2>
        <h3 className="text-2xl font-semibold">NewTask</h3>
        </div>
        <div className=" px-9 py-6 w-[45%] bg-yellow-400 rounded-xl">
        <h2 className="text-4xl font-bold">0</h2>
        <h3 className="text-2xl font-semibold">NewTask</h3>
        </div>
        
    </div>
  );
};

export default TaskListNumber;
