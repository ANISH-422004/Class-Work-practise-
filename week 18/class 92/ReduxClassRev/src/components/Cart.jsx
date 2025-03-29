import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncRemoveItemFromCart } from "../app/actions/CartActions"; 

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch(); // ✅ Use dispatch

    return (
        <div className="bg-slate-200 flex justify-center items-center p-4 m-2 rounded-md">
            {cart.length > 0 ? (
                <ul className="pt-20">
                    {cart.map((item) => (
                        <li
                            key={item.id}
                            className="bg-gray-100 flex justify-between items-center p-4 m-2 rounded-md shadow-md hover:shadow-lg transition"
                        >
                            <div>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-gray-600">${item.price}</p>
                                <p className="text-sm text-gray-500">{item.category}</p>
                            </div>
                            <button
                                onClick={() => dispatch(asyncRemoveItemFromCart(item.id))} // ✅ Dispatch correctly
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                            >
                                Remove Product
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <h1 className="text-2xl font-bold text-gray-800">No Items in Cart</h1>
            )}
        </div>
    );
};

export default Cart;
