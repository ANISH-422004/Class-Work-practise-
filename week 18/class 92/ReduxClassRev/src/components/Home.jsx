import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsData } from "../Hooks/getProductsData";
import { Link } from "react-router-dom";
import { addToCart } from "../app/slices/CartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useGetProductsData();
  const cart = useSelector((state) => state.cart);
  console.log(products);

  return products ? (
    <div className="container mx-auto relative">
      {/* Navbar */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center gap-4 fixed w-full top-0 z-10 shadow-md">
        <h1 className="text-2xl font-bold">Products</h1>
        <h2 className="text-lg font-mono">Redux Class</h2>
        <Link
          to="/cart"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          Cart Items: {cart.length}
        </Link>
      </div>

      {/* Product List */}
      <ul className="pt-20">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-gray-100 flex justify-between items-center p-4 m-2 rounded-md shadow-md hover:shadow-lg transition"
          >
            <div>
              <p className="font-semibold">{product.title}</p>{" "}
              {/* ✅ Use `title` instead of `name` */}
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
            >
              Add Product
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : (

    <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
    </div>
  )
};

export default Home;
