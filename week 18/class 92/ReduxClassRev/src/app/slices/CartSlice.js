import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {


            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        clearCart: (state, action) => {
            return []
        }
    }
})


export default CartSlice.reducer


export const {
    addToCart,
    removeFromCart,
    clearCart

} = CartSlice.actions