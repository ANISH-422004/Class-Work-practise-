import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { Authcontext } from "./context/AuthProvider";

const App = () => {
  
  const [user, setuser] = useState(null);
  const Authdata =   useContext(Authcontext)
  console.log(Authdata);
  
  const handelLogin = (email, password) => {
    if (email === "admin@me.com" && password == "123") {
      console.log("this is Admin");
      setuser("admin")
    } else if (Authdata && Authdata.employeesdata.find((e)=>e.password == password && e.email == email)) {
      console.log("this is User1");
      setuser("employee")
    } else {
      alert("invalid Credentials");
    }
  };
  // handelLogin("admin@me.com", "123");

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user == "admin" ? <AdminDashboard/> : <EmployeeDashboard/>}  
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
