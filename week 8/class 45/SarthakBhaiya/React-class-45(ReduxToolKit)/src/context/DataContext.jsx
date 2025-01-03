import React, { createContext, useState } from "react";

const Datacontext = createContext();

const DataContext = (props) => {
  console.log(props.children);
  const [data, setdata] = useState("helloWorld");

  return <Datacontext.Provider>{props.children}</Datacontext.Provider>;
};

export default DataContext;
