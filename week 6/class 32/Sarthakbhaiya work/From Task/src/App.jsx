import React, { useState } from "react";
import Form from "./components/Form";
import Cards from "./components/Cards";

const App = () => {
  
  const [cards, setcards] = useState([])
  // console.log(cards);
  
  
  

  return (
    <div className="bg-[#260B44]  h-screen w-full py-5">
      <Form cards={cards} setcards={setcards}></Form>
      <Cards cards={cards} setcards={setcards}></Cards>
    </div>
  );
};

export default App;
