// App.jsx
import React, { useState } from "react";
import Form from "./Components/Form";
import CardList from "./Components/CardList";

function App() {
  const [cards, setCards] = useState([{},{},{},{},]); // hold objects of  data  of each card in array which wil come form form then set val need to passe to form through prop

  const addCard = (card) => {
    setCards([...cards, card]);
  };

  const removeCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Dynamic Card Generator</h1>
      <Form addCard={addCard} />
      <CardList cards={cards} removeCard={removeCard} />
    </div>
  );
}

export default App;
