import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chacha: [
    { id: 1, product: "product1", price: 20 },
    { id: 2, product: "product2", price: 22 },
    { id: 3, product: "product3", price: 24 },
  ],
};


const productSlice = createSlice(
    {
        name:"chacha",
        initialState,
        reducers:{
            add : (state , action)=>{
                console.log(action);
                
                state.chacha.push(action.payload)
            },
            remove : (state , action)=>{
              state.chacha.pop()
            }
            
        }
    }
)

export default productSlice.reducer
export const {add,remove} = productSlice.actions