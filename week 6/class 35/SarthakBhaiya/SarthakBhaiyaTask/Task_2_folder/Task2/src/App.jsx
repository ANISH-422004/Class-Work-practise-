import React, { useState } from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

const App = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$20",
      image: "https://via.placeholder.com/150",
      description: "This is product 1",
      isaddedtocart: false,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$30",
      image: "https://via.placeholder.com/150",
      description: "This is product 2",
      isaddedtocart: false,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$25",
      image: "https://via.placeholder.com/150",
      description: "This is product 3",
      isaddedtocart: false,
    },
    {
      id: 4,
      name: "Product 4",
      price: "$40",
      image: "https://via.placeholder.com/150",
      description: "This is product 4",
      isaddedtocart: false,
    },
    {
      id: 5,
      name: "Product 5",
      price: "$15",
      image: "https://via.placeholder.com/150",
      description: "This is product 5",
      isaddedtocart: false,
    },
    {
      id: 6,
      name: "Product 6",
      price: "$50",
      image: "https://via.placeholder.com/150",
      description: "This is product 6",
      isaddedtocart: false,
    },
  ]);

  const Numberaddedtocarts = products.filter((p) => p.isaddedtocart).length;

  return (
    <>
      <Nav Numberaddedtocarts={Numberaddedtocarts}></Nav>
      <div className="px-20">
        <Home products={products} setproducts={setproducts}></Home> 
      </div>
    </>
  );
};

export default App;
