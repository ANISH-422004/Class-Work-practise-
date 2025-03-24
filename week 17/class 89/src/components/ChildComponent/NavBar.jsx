import React, { memo } from 'react';

const NavBar = ({ name, handleClick }) => {
  console.log('Navbar is rendered');

  return (
    <div className="p-4 bg-gray-800 text-white w-full text-center">
      <h2>I am {name} Navbar</h2>
      <button 
        className="mt-2 px-4 py-2 bg-blue-500 rounded"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
};

// Using React.memo to prevent unnecessary re-renders
export default memo(NavBar);
