// Nav.jsx
import React from "react";

const Nav = ({ addedtocartproducts }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold ">ShopKaro</div>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
          WishList
        </button>
        <button className="bg-green-400 px-4 py-2 rounded hover:bg-gray-600">
          Grocery
        </button>
        <div className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
          Cart : {addedtocartproducts.length}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
