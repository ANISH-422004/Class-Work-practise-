import React from "react";
import UserClass from "./components/UserClass"; // Correct import path
import Page1Class from "./components/Page1Class.jsx";
const App = () => {
  console.log("Parent Component Running");
  return (
    <div>
      <div className="p-10 flex justify-center items-center  gap-4">
        <UserClass name={"anish"} age={21} />
        <UserClass name={"aginv"} age={20} />
        <UserClass name={"simi"} age={20} />
      </div>

      <Page1Class />    
    </div>
  );
};

export default App;
