import React, { useReducer, useState } from "react";
import { initailStateForTodo } from "../app/states/TodoState";
import { TodoReducer } from "../app/reducers/TodoReducer";


const Page3 = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(TodoReducer, initailStateForTodo);

  console.log(state);
  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center bg-white text-black">
      <h1>TODO</h1>

      <div>
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
          type="text"
          className="bg-slate-200 "
        />
        <button
          onClick={() => {
            dispatch({ type: "add", payload: todo });
            setTodo("");
          }}
          className="bg-green-300 p-2 rounded-md ml-2"
        >
          Add Todo
        </button>
      </div>
      {state && (
        <div className="max-w-md w-full max-h-[400px] overflow-y-auto">
          {state.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between gap-10 py-2  m-5 px-10 bg-slate-400"
              >
                <h1>{item.todo}</h1>
                <button
                  className="bg-red-300 p-2 rounded-md"
                  onClick={() => {
                    dispatch({ type: "remove", payload: item.id });
                  }}
                >
                  Remove
                </button>
                <input
                  type="checkbox"
                  checked={item.complete}
                  onChange={() => {
                    dispatch({ type: "toggle", payload: item.id });
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Page3;
