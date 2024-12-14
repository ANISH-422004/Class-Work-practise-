import axios from "axios";
import React, { useEffect, useState } from "react";

const Show = () => {
  const [product, setproduct] = useState([]);

  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((response) => {
        setproduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    
    getproducts();
  },[])

  return (
    <>
      <button
        onClick={getproducts}
        className="text-xl bg-red-300  m-2 p-1 rounded-lg active:bg-red-500"
      >
        CALL API
      </button >
      <hr />

      <ul className="bg-red-300 h-[50vh] m-5 p-2 mb-5 overflow-auto">
        {product.length > 0 ? (
          product.map((productdata) => (
            <li
              key={productdata.id} // Add a key for React list rendering
              className=" p-5 bg-red-200 rounded text-xs m-2"
            >
              {productdata.title}
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
};

export default Show;
