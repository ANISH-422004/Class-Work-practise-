import { useEffect } from "react";

  const Home = ({ 
    products, 
    setproducts,  
    setaddedtocartproducts, 
    
  }) => {

    useEffect(()=>{},[products])

    const handleToggleAddToCart = (id) => {
      // Update the products state
      setproducts((prevProducts) => {
        const updatedProducts = prevProducts.map((product) =>
          product.id === id
            ? { ...product, isaddedtocart: !product.isaddedtocart }
            : product
        ); // setting ture or false in single source of truth

        

        // Update the added-to-cart products array made from setproducts
        const addedToCartArray = updatedProducts.filter((p) => p.isaddedtocart);
        setaddedtocartproducts(addedToCartArray);


        return products;       
      });
    };

    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-green-600 font-bold">{product.price}</span>
                <button
                  className={`px-4 py-2 rounded ${
                    product.isaddedtocart
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  onClick={() => handleToggleAddToCart(product.id)}
                >
                  {product.isaddedtocart ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default Home;
