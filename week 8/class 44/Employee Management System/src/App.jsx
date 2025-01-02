import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { Authcontext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null); // This variable decide which panel to show admin or employee dashboard.
  const [loggendInUserData, setloggendInUserData] = useState(null);
  const Authdata = useContext(Authcontext);
  console.log(Authdata);

  useEffect(() => {
    // localStorage.clear()

    const loggedInUser = localStorage.getItem("loggedinuser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      // console.log(userData);
      setuser(userData.role)
      setloggendInUserData(userData.data)
    }
  }, []);



  const handelLogin = (email, password) => {
    if (email === "admin@example.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedinuser", JSON.stringify({ role: "admin" }));
    }
    
    else if (Authdata) {
          const employee = Authdata.user.employeesdata.find(
            (e) => e.password == password && e.email == email
          );
          if (employee) {
            setuser("employee");
            setloggendInUserData(employee);
            localStorage.setItem(
              "loggedinuser",
              JSON.stringify({ role: "employee" , data:employee })
            );
          }
    }
    
    else {
      alert("invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user == "admin" && <AdminDashboard changeuser={setuser} data={loggendInUserData} />}
      {user == "employee" && <EmployeeDashboard changeuser={setuser} data={loggendInUserData} />}
    </>
  );
};

export default App;
