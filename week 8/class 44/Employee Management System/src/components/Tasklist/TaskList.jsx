import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data);

  return (
    <div
      id="tasklist"
      className="w-full h-[50%] mt-10 rounded-xl py-5 flex flex-nowrap  overflow-x-auto"
    >
      {data.tasks.map((task, idx) => {
        if (task.active) {
          return <AcceptTask task={task} key={idx} />;
        }

        if (task.newTask) {
          return <NewTask task={task} key={idx} />;
        }

        if (task.completed) {
          return <CompleteTask task={task} key={idx} />;
        }

        if (task.failed) {
          return <FailedTask task={task} key={idx} />;
        }
      })}

      {/* <AcceptTask />
      <NewTask />
      <FailedTask />
      <CompleteTask /> */}
    </div>
  );
};

export default TaskList;
