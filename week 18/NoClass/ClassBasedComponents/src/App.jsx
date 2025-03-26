import React from "react";
import UserClass from "./components/UserClass"; // Correct import path

const App = () => {
  console.log("Parent Component Running");
  return (

    <div className="p-10 flex justify-center items-center  gap-4">
      <UserClass  name ={"anish"} age={21} />
      <UserClass  name ={"aginv"} age={20} />
      <UserClass  name ={"simi"} age={20} />
    </div>
  );
};

export default App;
