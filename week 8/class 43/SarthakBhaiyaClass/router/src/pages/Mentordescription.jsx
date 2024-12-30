import React from "react";
import { useParams } from "react-router-dom";

function Mentordescription() {
    let mentorname=useParams().mentor
    console.log(mentorname);
    
    
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <h1 className="text-5xl  ">{mentorname}'s Description page</h1>
    </div>
  );
}

export default Mentordescription;
