import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import Alltasks from "../Others/Alltasks";

const AdminDashboard = (props) => {
  // console.log(props.changeuser);
  
  return (
    <div className="p-5 md:p-10 min-h-screen w-full">
    <Header changeuser={props.changeuser}/>

    <CreateTask/>
    <Alltasks/>
    
    
    
    </div>
  );
};

export default AdminDashboard;
