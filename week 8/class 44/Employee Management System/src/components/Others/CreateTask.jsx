import React, { useContext, useState } from "react";
import { Authcontext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { user, setUser } = useContext(Authcontext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const Handelsubmit = (e) => {
    e.preventDefault();
    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    };

    const updatedEmployees = user.employeesdata.map((employee) => {
      if (employee.firstname === assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskSummary: {
            ...employee.taskSummary,
            newTask: employee.taskSummary.newTask + 1,
          },
        };
      }
      return employee;
    });

    setUser({ ...user, employeesdata: updatedEmployees });

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");

    console.log("Task created successfully");
  };

  return (
    <div className="flex  justify-center items-center p-4 md:p-10">
      <form
        onSubmit={Handelsubmit}
        className="flex flex-col gap-4 bg-[#1C1C1C] p-4 md:p-8 rounded-md shadow-md w-full max-w-[900px]"
      >
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm mt-5 block">Task Title</label>
            <input
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
              type="text"
              className="bg-transparent border border-gray-300 rounded-md p-2 w-full"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <label className="text-sm mt-5 block">Date</label>
            <input
              onChange={(e) => setTaskDate(e.target.value)}
              value={taskDate}
              type="date"
              className="bg-transparent border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label className="text-sm mt-5 block">Assign to</label>
            <input
              onChange={(e) => setAssignTo(e.target.value)}
              value={assignTo}
              type="text"
              className="bg-transparent border border-gray-300 rounded-md p-2 w-full"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <label className="text-sm mt-5 block">Category</label>
            <input
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              type="text"
              className="bg-transparent border border-gray-300 rounded-md p-2 w-full"
              placeholder="Design or Dev or Etc..."
            />
          </div>
        </div>

        <div>
          <label className="text-sm block">Description</label>
          <textarea
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
            className="bg-transparent border border-emerald-400 rounded-md p-2 w-full"
            rows="5"
          ></textarea>
        </div>

        <button className="bg-emerald-400 p-2 mt-2 rounded-md w-full md:w-auto self-center">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
