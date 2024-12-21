import React, { useState } from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";

const App = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$20",
      image: "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      description: "This is product 1",
      isaddedtocart: false,
      Countincart: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$30",
      image: "https://plus.unsplash.com/premium_photo-1719289799376-d3de0ca4ddbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      description: "This is product 2",
      isaddedtocart: false,
      Countincart: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$25",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      description: "This is product 3",
      isaddedtocart: false,
      Countincart: 1,
    },
    {
      id: 4,
      name: "Product 4",
      price: "$40",
      image: "https://images.unsplash.com/photo-1693168045046-9a4b4f30f1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "This is product 4",
      isaddedtocart: false,
      Countincart: 1,
    },
    {
      id: 5,
      name: "Product 5",
      price: "$15",
      image: "https://images.unsplash.com/photo-1651540589735-12cffa044899?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "This is product 5",
      isaddedtocart: false,
      Countincart: 1,
    },
    {
      id: 6,
      name: "Product 6",
      price: "$50",
      image: "https://images.unsplash.com/photo-1723879683051-d926c556a190?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "This is product 6",
      isaddedtocart: false,
      Countincart: 1,
    },
  ]);
  

  const [addedtocartproducts, setaddedtocartproducts] = useState([]);


  
  return (
    <>
      <Nav addedtocartproducts={addedtocartproducts} />
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-[70%] px-4 md:px-20">
          <Home
            products={products}
            setproducts={setproducts}
            addedtocartproducts={addedtocartproducts}
            setaddedtocartproducts={setaddedtocartproducts}
           
          />
        </div>
        <div className="w-full md:w-[30%] py-4 px-4 md:pr-20">
          <Cart
            addedtocartproducts={products.filter((p) => p.isaddedtocart)}
            setaddedtocartproducts={setaddedtocartproducts}

            
          />
        </div>
      </div>
    </>
  );
};

export default App;
