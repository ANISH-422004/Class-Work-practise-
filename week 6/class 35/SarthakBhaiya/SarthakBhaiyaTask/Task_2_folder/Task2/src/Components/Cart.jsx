import React, { useState, useEffect } from "react";

const Cart = ({ addedtocartproducts , setaddedtocartproducts ,products,setproducts}) => {
  const [toatalamout, settoatalamout] = useState(0);

  // console.log(products,setproducts);
  

  useEffect(() => {
    const total = addedtocartproducts.reduce(
      (sum, product) =>
        sum + parseFloat(product.price.slice(1)) * product.Countincart,
      0
    );
    settoatalamout(total);
  }, [addedtocartproducts]);


//   The dependency array tells React when to re-run the effect.
// In this case, addedtocartproducts is a dependency, meaning the effect will only re-run if the value of addedtocartproducts changes.

  // Function to handle increasing the product count
  const handleIncrease = (product) => {
    const updatedProducts = addedtocartproducts.map((item) => {
      if (item.id === product.id) {
        item.Countincart += 1; 
      }
      return item;
    });
    const total = updatedProducts.reduce(
      (sum, product) =>
        sum + parseFloat(product.price.slice(1)) * product.Countincart,
      0
    );
    settoatalamout(total); 
  };

  // Function to handle decreasing the product count
  const handleDecrease = (product) => {
    const updatedProducts = addedtocartproducts.map((item) => {
      if (item.id === product.id && item.Countincart > 1) { // 1 ke nahi jaye ga 
        item.Countincart -= 1; 
      }
      return item;
    });
    const total = updatedProducts.reduce(
      (sum, product) =>
        sum + parseFloat(product.price.slice(1)) * product.Countincart,
      0
    );
    settoatalamout(total); // Update the total amount
  };
  

  const handleDeleteItemFromCart = (id) => {
    console.log("Deleting product with ID:", id);
  
    // Find the product that is being removed
    const deletedProduct = addedtocartproducts.find(product => product.id === id);
    
    // If the product exists in the cart, update the products state
    if (deletedProduct) {
      // Update the products state by resetting the count and setting inCart to false
      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            // Countincart: 1, // Reset count to 1
            inCart: false,  // Set inCart to false to indicate it's not in the cart
          };
        }
        return product;
      });
  
      setproducts(updatedProducts);
    }
  
    // Now, filter out the deleted product from the cart
    const updatedCart = addedtocartproducts.filter((product) => product.id !== id);
    
    // Update the cart state
    setaddedtocartproducts(updatedCart);
  
    // Recalculate the total amount after removing the item
    const total = updatedCart.reduce(
      (sum, product) =>
        sum + parseFloat(product.price.slice(1)) * product.Countincart,
      0
    );
    settoatalamout(total);
  };
  








  return (
    <div className="p-4 bg-slate-300 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {addedtocartproducts.length === 0 ? (
        <p className="text-gray-500">No items in the cart.</p>
      ) : (
        <div className="space-y-4">
          {addedtocartproducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 border rounded shadow relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex items-center gap-2">
                <button
                  className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
                  onClick={() => handleDecrease(product)}
                >
                  -
                </button>
                <span className="text-lg font-semibold">
                  {product.Countincart}
                </span>
                <button
                  className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center"
                  onClick={() => handleIncrease(product)}
                >
                  +
                </button>
              </div>
              <div>
                <h3 className="font-semibold te">{product.name}</h3>
                <p className="text-gray-600">Price per Item : <span className="font-mono text-xl text-red-500">{product.price}</span></p>
              </div>
            <div className="h-6 aspect-square text-center rounded-full bg-red-600 text-white absolute top-[0%] left-[100%] -translate-x-[60%] -translate-y-[20%] hover:cursor-pointer" onClick={()=>{handleDeleteItemFromCart(product.id)}}>X</div>

            </div>
          ))}

          <h1 className="text-xl font-bold mt-4">
            Total Price: ${toatalamout.toFixed(2)}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
