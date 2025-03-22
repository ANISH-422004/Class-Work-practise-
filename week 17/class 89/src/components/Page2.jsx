import React, { useReducer } from "react";

const initailState = { count: 0 };

function CounterReducer(state, action) {
  switch (action.type) {
    case "increament":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      throw new Error("unknown action");
  }
}

const Page2 = () => {
  const [state, dispatch] = useReducer(CounterReducer, initailState);

  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center bg-white text-black">
      <h1>
        Count: <strong>{state.count} </strong>
      </h1>
    <div className="flex gap-5">
    <button    onClick={()=>{dispatch({type:"increament"})}}  className="px-10 py-5 rounded-md bg-blue-500">Increament</button>
      <button  onClick={()=>{dispatch({type:"decrement"})}}  className="px-10 py-5 rounded-md bg-green-500">Decreament</button>
      <button  onClick={()=>{dispatch({type:"reset"})}}  className="px-10 py-5 rounded-md bg-red-500">Reset</button>
    </div>
    </div>
  );
};

export default Page2;
