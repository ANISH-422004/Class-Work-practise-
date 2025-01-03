import React from "react";
import { useSelector } from "react-redux";

const One = () => {
  const data = useSelector((state) => state.product.chacha);
  console.log(data);

  return <div className="h-[20em] overflow-y-auto">One

        <div >
            {
                data.map((d,idx)=>{
                    return(
                        <h1 key={idx} className="bg-red-400 twxt-xl m-2">{d.product}</h1>
                    )
                })
            }
        </div>

  </div>;
};

export default One;
