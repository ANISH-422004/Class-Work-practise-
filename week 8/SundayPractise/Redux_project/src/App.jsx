import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./store/Reducers/ProducstsSlice";
import { asyncremove } from "./store/Actions/ProductsActions";

const App = () => {

  const dispatch  = useDispatch()
   let products = useSelector(state=>state.product)
   console.log(products);
   
   const DeleteProduct =(clickedIdx) =>{
      dispatch(asyncremove(clickedIdx))
   }

  return (
    <div className="min-h-screen w-full p-5 ">
      <h1 className="bg-red-300 text-red-700 text-4xl  text-center">
        API / BackEnd Integration in Redux
      </h1>


      <div className="bg-slate-100 h-[70vh] w-full mt-4 overflow-y-auto flex flex-col gap-2 shadow-md">
      {
        products.map((product,idx)=>{
          return(
            <h1 key={idx}
            className="w-full bg-slate-300 flex justify-between px-2">
                {product.title}

                <span
                className="cursor-pointer text-red font-bold text-red-500"
                onClick={()=>{DeleteProduct(idx)}}
                >X</span>
            </h1>
          )
        })
      }

      </div>
    
    
    
    </div>

  );
};

export default App;
