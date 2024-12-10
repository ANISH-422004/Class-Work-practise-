import React from "react";

const Musicplace = ({image,songname,artist,added,handelclick,index}) => {
  
    // console.log(image,songname,artist,added,handelclick,index);
    
  
    return (
    <>
      <div
        id="card"
        className="w-72 h-32 bg-white p-2 flex gap-6 relative rounded-3xl"
        >
                        <div
                        id="img-cont"
                        className=" h-[60%] aspect-square bg-orange-300 rounded-full overflow-hidden "
                        >
                                        <img className="object-cover object-center" src={`${image}`} alt="" />
                        </div>

                        <div className="p-3">
                                    <h2 className="font-mono font-semibold text-lg">{songname}</h2>
                                    <h3 className="font-mono text-s ">{artist}</h3>
                        </div>

                        
                        <button onClick={()=>handelclick(index)} className={`w-[50%] absolute ${added ? ' bg-orange-300' : ' bg-green-300' } p-1 rounded-2xl top-[85%] left-[50%] -translate-x-[50%] transition-all duration-75  hover:scale-105 active:bg-orange-500 `}>
                                    {`${added ? "Add to Favourites" : "Added"}`}
                        </button>
      </div>
    </>
  );
};

export default Musicplace;
