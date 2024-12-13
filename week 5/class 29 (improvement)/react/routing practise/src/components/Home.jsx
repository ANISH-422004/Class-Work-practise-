import React from "react";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className=" w-[40%]  p-6 flex flex-col gap-2 ">
        <h1 className="text-5xl font-sans text-rose-200"> Home </h1>
        <p className="text-zinc-400 font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          cupiditate atque recusandae autem laudantium officiis accusamus
          voluptatibus iure voluptas fuga.
        </p>
        <button className="w-40 bg-rose-300 p-2 rounded-lg">More</button>
      </div>
    </div>
  );
};

export default Home;
