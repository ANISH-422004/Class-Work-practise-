import React, { useState } from "react";

const Form = (props) => {
  const [userobject, setuserobject] = useState({
    name: "",
    description: "",
    image: "",
  });
//   console.log(userobject);
  //  console.log(props);
  let { cards, setcards } = props;
//   console.log(cards);

  return (
    <>
      <form className="flex flex-col items-center gap-5  h-[30%]" onSubmit={(e)=>{
        e.preventDefault()    
        setcards([...cards,userobject])
        
        setuserobject({
            name: "",
            description: "",
            image: "",
          })
        }}>
        <input
          onChange={(e) => {
            setuserobject({ ...userobject, name: e.target.value });
          }}
          value={userobject.name}
          type="text"
          className="w-[80%] h-[25%] bg-violet-900 rounded-xl border border-violet-200  text-white text-lg font-mono"
          placeholder=" Enter Name"
        />
        <input
          onChange={(e) => {
            setuserobject({ ...userobject, description: e.target.value });
          }}
          value={userobject.description}
          type="text "
          className="w-[80%] h-[25%] bg-violet-900 rounded-xl border border-violet-200  text-white text-lg font-mono"
          placeholder=" Enter Description"
        />
        <input
          onChange={(e) => {
            setuserobject({ ...userobject, image: e.target.value });
          }}
          value={userobject.image}
          type="text "
          className="w-[80%] h-[25%] bg-violet-900 rounded-xl border border-violet-200  text-white text-lg font-mono"
          placeholder=" Enter Image"
        />
        <input
          type="submit"
          className="bg-black text-blue-600 border p-1 w-[30%] font-mono  font-bold text-xl  active:bg-slate-900  active:text-blue-200 "
        />
      </form>
    </>
  );
};

export default Form;
