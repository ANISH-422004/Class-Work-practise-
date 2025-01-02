import React, { useContext, useState } from "react";
import NewTask from "../Tasklist/NewTask";
import { Authcontext } from "../../context/AuthProvider";

const CreateTask = () => {

const {user,setUser} = useContext(Authcontext);
// console.log(user.employeesdata);


  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [task, setTask] = useState({});

  const Handelsubmit = (e) => {
    e.preventDefault();
  
    // Create a new task object
    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      taskDate: taskDate,
      category: category,
    };
  
    // Create a new copy of employeesdata
    const updatedEmployees = user.employeesdata.map((employee) => {
      if (employee.firstname === assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask], // Add the new task immutably
          taskSummary: {
            ...employee.taskSummary,
            newTask: employee.taskSummary.newTask + 1, // Increment task summary count
          },
        };
      }
      return employee; // No changes for other employees
    });
  
    // Update the user state with the updated employees data
    setUser({ ...user, employeesdata: updatedEmployees });
  
    // Reset form fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  
    console.log("Task created successfully");
  };
  

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          Handelsubmit(e);
        }}
        className="flex justify-between items-start gap-2 bg-[#1C1C1C] mt-5 py-2 px-10 rounded"
      >
        <div>
          <h3 className="text-sm mt-5 ">Task Title</h3>
          <input
            onChange={(e) => {
              let cv = e.target.value;
              setTaskTitle(cv);
            }}
            value={taskTitle}
            type="text"
            className="bg-transparent border border-gray-300 rounded-md p-1 w-[30vw]"
            placeholder="Make a UI desgine"
          />

          <h3 className="text-sm mt-5 ">Date</h3>
          <input
            onChange={(e) => {
              let cv = e.target.value;
              setTaskDate(cv);
            }}
            value={taskDate}
            type="date"
            className="bg-transparent border border-gray-300 rounded-md p-1 w-[30vw]"
          />

          <h3 className="text-sm mt-5 ">Assigine to</h3>
          <input
            onChange={(e) => {
              let cv = e.target.value;
              setAssignTo(cv);
            }}
            value={assignTo}
            type="text"
            className="bg-transparent border border-gray-300 rounded-md p-1 w-[30vw]"
            placeholder="Employee Name"
          />

          <h3 className="text-sm mt-5 ">Category:</h3>
          <input
            onChange={(e) => {
              let cv = e.target.value;
              setCategory(cv);
            }}
            value={category}
            type="text"
            className="bg-transparent border border-gray-300 rounded-md p-1 w-[30vw]"
            placeholder="Desgine or Dev or Etc.."
          />
        </div>

        <div className=" w-[35%] flex flex-col justify-center">
          <h3>Description</h3>
          <textarea
            onChange={(e) => {
              let cv = e.target.value;
              setTaskDescription(cv);
            }}
            value={taskDescription}
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
