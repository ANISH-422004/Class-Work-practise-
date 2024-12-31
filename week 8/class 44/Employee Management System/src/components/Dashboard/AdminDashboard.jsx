import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import Alltasks from "../Others/Alltasks";

const AdminDashboard = () => {
  return (
    <div className="p-10 min-h-screen w-full">
      <Header />

    <CreateTask/>
    <Alltasks/>
    
    
    
    </div>
  );
};

export default AdminDashboard;
