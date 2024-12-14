import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [product, setproduct] = useState([]);

  const getproducts = () => {
    const api = 'https://fakestoreapi.com/products';

    axios
      .get(api)
      .then((response) => {
        setproduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addproduct = () => {
    const api = 'https://fakestoreapi.com/products';

    axios
      .post(api, {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronics',
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        onClick={getproducts}
        className="text-xl bg-red-300 m-2 p-1 rounded-lg"
      >
        CALL API
      </button>
      <button
        onClick={addproduct}
        className="text-xl bg-red-300 m-2 p-1 rounded-lg"
      >
        Save Product
      </button>
      <hr className="my-2 font-bold" />
      <ul className="bg-red-300 min-h-[60vh] m-5 p-2 flex flex-wrap gap-4">
        {product.length > 0 ? (
          product.map((productdata) => (
            <li
              key={productdata.id} // Add a key for React list rendering
              className="w-1/4 p-5 bg-red-200 rounded text-xs"
            >
              {productdata.title}
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default App;
