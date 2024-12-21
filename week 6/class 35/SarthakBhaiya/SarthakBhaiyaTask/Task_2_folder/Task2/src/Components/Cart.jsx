import React, { useState } from "react";

const Cart = ({ addedtocartproducts }) => {

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

          <h1>Total Price : $</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
