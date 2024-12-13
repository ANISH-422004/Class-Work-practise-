import React from "react";
import Card from "./Card";

function CardList({ cards, removeCard }) {
  return (
    <div className=" w-[90vw] h-[40vh] bg-gray-300 overflow-auto flex  ">
      {cards.map((card, index) => (
        <Card
        
          key={index}
          index={index}
          card={card}
          removeCard={removeCard}
        />
      ))}
    </div>
  );
}

export default CardList;
