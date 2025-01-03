import React from "react";
import {useDispatch , useSelector } from 'react-redux'
import { add ,del} from "./store/reduceres/TasksSlice";
import { useState } from "react";




const App = () => {
  const dispatch = useDispatch()
  const [taskname, setTaskname] = useState('')
  const tasks = useSelector(state => state.tasks)

  const createTask =()=>{
    
    dispatch(add(taskname))
    setTaskname('')
  }

  const deleteTask =(clickedidx)=>{
    dispatch(del(clickedidx))
    // console.log(clickedidx);
    
  }

  console.log(tasks.tasks);



  return (
    <div className="h-screen w-full bg-violet-950 p-5 flex flex-col items-center">
        <div className="flex gap-2 w-[60%] justify-between ">
          <input value={taskname} onChange={(e)=>{setTaskname(e.target.value)}} type="text" placeholder="New Task ..." className="rounded-full w-[80%] px-4 "/>
          <button className="border border-violet-400 text-violet-400 p-1 rounded"
            onClick={()=>{createTask()}}
          >Addtask</button>
        </div>
        <div className="flex flex-col gap-2 w-[60%] h-full bg-slate-900  border border-violet-300 rounded mt-5 p-2 overflow-y-auto ">
          {
            tasks.tasks.map((task,idx)=>{
              return(
                <div className=" border border-violet-400 p-2 rounded flex justify-between">
                    <h1 className="text-white font-mono">{task}</h1>
                    <button className="border border-red-600 text-red-600 p-1  rounded"
                      onClick={()=>{
                        deleteTask(idx)
                      }}
                    >Delete</button>
                </div>
              )
            })
          }
        </div>
    </div>
  );
};

export default App;
