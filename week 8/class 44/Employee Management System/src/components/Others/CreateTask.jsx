import React from "react";

const CreateTask = () => {
  return (
    <div className="">
      <form className="flex justify-between items-start gap-2 bg-[#1C1C1C] mt-5 py-2 px-10 rounded">
        <div>
          <h3 className="text-sm mt-5 ">Task Title</h3>
          <input
            type="text"
            className="bg-transparent border border-gray-300 rounded-md p-1 w-[30vw]"
            placeholder="Make a UI desgine"
          />

          <h3 className="text-sm mt-5 ">Date</h3>
          <input
            type="date"
            className="bg-transparent border border-gray-300 rounded-md p-1 w-[30vw]"
          />

          <h3 className="text-sm mt-5 ">Assigine to</h3>
          <input
            type="text"
            className="bg-transparent border border-gray-300 rounded-md p-1 w-[30vw]"
            placeholder="Employee Name"
          />

          <h3 className="text-sm mt-5 ">Category:</h3>
          <input
            type="text"
            className="bg-transparent border border-gray-300 rounded-md p-1 w-[30vw]"
            placeholder="Desgine or Dev or Etc.."
          />
        </div>

        <div className=" w-[35%] flex flex-col justify-center">
          <h3>Description</h3>
          <textarea
            className="bg-transparent border border-emerald-400 rounded"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <button className="bg-emerald-400 p-2 mt-2 rounded-lg ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
