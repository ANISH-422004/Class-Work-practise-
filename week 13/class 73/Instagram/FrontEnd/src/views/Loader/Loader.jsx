import React from "react";
import loader from "../../assets/Load.gif";
const Loader = () => {
  return (
    <div className="w-full h-scree flex bg-white items-center justify-center">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
