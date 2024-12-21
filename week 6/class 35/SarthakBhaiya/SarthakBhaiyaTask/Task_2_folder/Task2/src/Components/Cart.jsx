import React, { useState } from "react";

// What is reduce?
// reduce is a higher-order array method in JavaScript that is used to iterate over an array and reduce it to a single value. This value can be a number, string, object, or any other data type. The method executes a callback function for each element in the array, and the result of each iteration is passed to the next.
//array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// const numbers = [10, 20, 30, 40];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 100


const Cart = ({ addedtocartproducts  ,toatalamout }) => {

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {addedtocartproducts.length === 0 ? (
        <p className="text-gray-500">No items in the cart.</p>
      ) : (
        <div className="space-y-4">
          {addedtocartproducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 border rounded shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}

          <h1>Total Price : ${toatalamout}</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
