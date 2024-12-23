import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartproducts, setcartproducts] = useState([]);
  const[click,setClick]=useState({});
  console.log(cartproducts);

  const handelAddToCart = (idx) => {
    // console.log("i was clicked ", idx);
    
    let clickedproduct = products[idx]; 
    
    // console.log(clickedproduct);

    setClick((prev)=>({...prev,[idx]:!prev[idx]}));
    setcartproducts([...cartproducts,clickedproduct]);
  

};

  const getProducts = async () => {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      console.log(data); // Logging the fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <div className="w-[70%] h-screen ">
        <div className="bg-blue-200 h-[6%] flex items-center justify-center">
          <button
            onClick={getProducts}
            className="p-2 border border-red-300 text-red-400"
          >
            Get Products
          </button>
        </div>

        <div className="bg-red-300 h-[94%] overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-4 flex flex-col justify-between h-[380px] w-[300px]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2 truncate ">
                  {product.description}
                </p>
                <span className="text-blue-500 font-bold">
                  ${product.price}
                </span>
                <button
                  className="text-red-400 border border-red-300"
                  onClick={() => handelAddToCart(idx)}
                >
                 {click[idx]?"Added":" Add to card"}
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No products loaded yet!</p>
          )}
        </div>
      </div>
      <div className="w-[30%] h-screen bg-green-300 overflow-y-auto">
        <div>
          <h1 className="text-center font-semibold">YOUR CART</h1>
        </div>
        <div className=" m-1 shadow-md">
          <div>
            {cartproducts.map((elem) => {
              return (
                <div className="cart-card flex items-center border border-gray-300 rounded-lg shadow p-4 bg-white mb-4 overflow-x-hidden">
                  <img
                    src={elem.image}
                    alt=""
                    className="w-20 h-20 object-contain mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold mb-2 truncate">
                      {elem.title}
                    </h3>
                    <span className="text-blue-500 font-bold">${elem.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
