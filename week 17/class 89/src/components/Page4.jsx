import React, { useState, useMemo } from "react";

const Page4 = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);

  // 🔥 Expensive Computation: Sum of numbers
  const totalSum = useMemo(() => {
    console.log("Calculating sum..."); // To show when it runs
    for (let i = 0; i < 1000000000; i++) {} // Some expensive calculation
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]); // ✅ Only recalculates if numbers change

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6">
      <h2 className="text-3xl font-bold mb-4">Page 4 - useMemo Demo</h2>

      <div className="bg-white text-gray-900 p-4 rounded-lg shadow-lg text-center">
        <p className="text-xl font-semibold">Total Sum: <span className="text-blue-600">{totalSum}</span></p>
      </div>

      <button 
        onClick={() => setCount(count + 1)} 
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300"
      >
        Re-render Count ({count})
      </button>

      <button 
        onClick={() => setNumbers([...numbers, Math.floor(Math.random() * 100)])} 
        className="mt-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300"
      >
        Add Random Number
      </button>
    </div>
  );
};

export default Page4;
