import React from "react";

function Card({ card, removeCard, index }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }} className="shrink-0 w-[20%] flex flex-col gap-2 items-center">
      <h2 className="font-bold text-lg text-center">{card.name}</h2>
      <p className="font-thin text-[0.5rem] leading-1 text-center">{card.description}</p>
      <img src={card.imageUrl} alt={card.name} style={{ width: "100px" }} />
      <button onClick={() => removeCard(index)} className="bg-red-600 text-white  p-1 rounded-2xl">Remove</button>
    </div>
  );
}

export default Card;
