import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setfirst] = useState("small data");
  const [second, setsecond] = useState("large data");
  useEffect(() => {
    console.log("comp is created ");

    return () => {
      console.log("comp is deleted ");
    };
  },[first  ]);
  return (
    <div>
      <h1>{first}</h1>
      <button
        onClick={() => setfirst("small data changed")}
        className="p-2 bg-rose-200 my-1  rounded active:bg-red-400"
      >
        {" "}
        click to change small data
      </button>

      <h1>{second}</h1>
      <button
        onClick={() => setsecond("large data changed")}
        className="p-2 bg-rose-200 my-1  rounded active:bg-red-400"
      >
        click to change large data
      </button>
    </div>
  );
};

export default Services;
