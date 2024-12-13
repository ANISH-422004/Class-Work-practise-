import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Userdetail = () => {
  const dynamicurlpart = useParams();
  // console.log(dynamicurlpart.name);
  const navigate = useNavigate()
//   console.log(navigate);
    
  const HandelGoBack = () => {
 
    // code to submit form in database then redirected to other page
    // console.log(dynamicurlpart.name  );
    // navigate("/user")
    navigate(-1)

    
  }


  return (
    <div className="w-full flex justify-center">
      <div className=" w-[40%]  p-6 flex flex-col gap-2 ">
        <h1 className="text-5xl font-sans text-rose-200 uppercase">
          {" "}
          {dynamicurlpart.name}{" "}
        </h1>
        <p className="text-zinc-400 font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          cupiditate atque recusandae autem laudantium officiis accusamus
          voluptatibus iure voluptas fuga.
        </p>
        <button  onClick={HandelGoBack} className="w-40 bg-rose-300 p-2 rounded-lg">Go Back</button>
      </div>
    </div>
  );
};

export default Userdetail;
