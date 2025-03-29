import { createSlice } from "@reduxjs/toolkit";


const initialState = [
];

const ProductSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        initalizeProducts: (state, action) => {
            return action.payload; // ✅ Replace state correctly
        }
    }
});


export default ProductSlice.reducer

export const { addProduct, initalizeProducts } = ProductSlice.actions    