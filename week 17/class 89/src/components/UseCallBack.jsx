import React, { useState, useCallback } from 'react';
import NavBar from './ChildComponent/NavBar';

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Initial Name");

  console.log("Rerendered UseCallBack.jsx");

  // Memoizing the callback function to prevent re-creation on each render
  const handleClick = useCallback(() => {
    console.log('Callback function executed');
  }, []); 
  // Empty dependency array ensures this function reference remains the same 
  // *** remove dep array then understand why nav bar is re-rendering ***

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-800 to-blue-500 text-white p-5'>
      <h1 className='text-2xl mb-4'>useCallback Example</h1>
      <NavBar name={name} handleClick={handleClick} />
      <button
        className='mt-4 px-4 py-2 bg-white text-black rounded'
        onClick={() => setCount(count + 1)}
      >
        Increment Count: {count}
      </button>
      <button
        className='mt-4 px-4 py-2 bg-gray-300 text-black rounded'
        onClick={() => setName(name === "Initial Name" ? "Updated Name" : "Initial Name")}
      >
        Change Name
      </button>
    </div>
  );
};

export default UseCallBack;
    