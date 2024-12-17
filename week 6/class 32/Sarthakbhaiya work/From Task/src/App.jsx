import React from "react";

const App = () => {
  return (
    <div className="bg-violet-950  h-screen w-full py-5">
      <form className="flex flex-col items-center gap-5  h-[30%]">
        <input
          type="text "
          className="w-[80%] h-[25%] bg-violet-900 rounded-xl border border-violet-200  text-white text-lg font-mono"
          placeholder=" Enter Name"
        />
        <input
          type="text "
          className="w-[80%] h-[25%] bg-violet-900 rounded-xl border border-violet-200  text-white text-lg font-mono"
          placeholder=" Enter Description"
        />
        <input
          type="text "
          className="w-[80%] h-[25%] bg-violet-900 rounded-xl border border-violet-200  text-white text-lg font-mono"
          placeholder=" Enter Image"
        />
        <input
          type="submit"
          className="bg-black text-blue-600 border p-1 w-[30%] font-mono  font-bold text-xl  active:bg-slate-900  active:text-blue-200 "
        />
      </form>
      <div className="h-[70%] w-full g-red-100 overflow-y-auto flex justify-center  flex-wrap p-5 gap-5" >
        <div className="cards w-[250px] h-[350px] bg-red-200 ">
          
        </div>

      </div>
    </div>
  );
};

export default App;
