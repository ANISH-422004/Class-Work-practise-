import React from "react";

const Cards = (props) => {
  //   console.log(props);
  let { cards, setcards } = props;

  // console.log(cards[0]);
  const handeldeletcard = (i) => {
    const updatedCards = [...cards]; // Create a shallow copy of the cards array
    updatedCards.splice(i, 1); // Remove the item at index `i` and returns the remains array
    setcards(updatedCards); // Update the state with the modified array
  };
  

  return (
    <>
      <div className="h-[70%] w-full g-red-100 overflow-y-auto flex justify-center  flex-wrap p-5 gap-5">
        {cards.map((card, idx) => {
          console.log(card);

          return (
            <div
              key={idx}
              className="cards w-[250px] h-[350px] bg-[#9B20DE] rounded-xl p-2  text-white flex flex-col  items-center"
            >
              <div className="imagecontainer h-[50%] w-full  bg-red-300 rounded">
                <img
                  className="w-full h-full object-cover "
                  src={card.image}
                  alt=""
                />
              </div>

              <h1 className="font-mono w-full text-xl h-[10%]">{card.name}</h1>
              <p className="text-left h-[30%]  text-xs  text-violet-100  font-sans ">{card.description}</p>
              <button 
                onClick={() => handeldeletcard(idx)}
                className="bg-black text-red-500 w-[50%] mt-5 p-1 rounded"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
